'use strict';

var constants = require('./constants');
var channels = require('./channels');
var https = require('https');
var apiUrl = 'https://somafm.com/channels.json';

var somafm = function () {
    return {
        play: function () {
            this.handler.state = constants.states.PLAY_MODE;

            // Make sure we have a channel
            var intent = this.event.request.intent;
            var hasChannel = intent && intent.slots && intent.slots.Channel && intent.slots.Channel.value;
            if (hasChannel) {
                // Save the channel as our token, downcased for easier lookup
                var token = intent.slots.Channel.value.toLowerCase();
                this.attributes['token'] = token;
                console.log("SOMA FM CHANNEL: " + token);

                // Lookup the channel attributes
                var channel = channels[token];
                console.log("SOMA FM CHANNEL ATTRIBUTES: " + JSON.stringify(channel));

                if (channel === undefined){
                    var message = 'I could not find that channel, please ask me for a different one.';
                    this.response.speak(message).listen(message);
                    this.emit(':responseReady');
                } else {
                    // Only throw a card if it's an intent (not remote control)
                    if (this.event.request.type === 'IntentRequest') {
                        var image = {
                            smallImageUrl: channel['image'],
                            largeImageUrl: channel['image']
                        };
                        this.response.cardRenderer(channel['title'], channel['description'], image);
                    }

                    // play behavior, url, token, expected previous token, offset in millis
                    this.response.audioPlayerPlay('REPLACE_ALL', channel['url'], token, null, 0);
                    this.emit(':responseReady');
                }

            } else {
                console.log("SOMA FM NO CHANNEL NAME IN REQUEST.");
                var message = 'I did not understand the channel name, please ask me again.';
                this.response.speak(message).listen(message);
                this.emit(':responseReady');
            }

        },
        stop: function () {
            this.response.audioPlayerStop();
            this.emit(':responseReady');
        },
        song: function () {
            // Hold on to a reference to 'this' for the https callback
            var requestHandler = this;

            https.get(apiUrl, function(res) {
                var body = '';

                res.on('data', function (chunk) {
                    body += chunk;
                });

                res.on('end', function () {
                    var apiResponse = JSON.parse(body);
                    var currentApiChannels = apiResponse['channels'];

                    // The names we're using to identify the stations are not
                    // the same due to how Alexa is hearing thigs. Need to get
                    // the id from our channel list and look it up in the
                    // returned list
                    var listeningChannelName = requestHandler.event.context.AudioPlayer.token;
                    var listeningChannel = channels[listeningChannelName];

                    var apiListeningChannel = currentApiChannels.find(function(channel) {
                        return channel['id'] === listeningChannel['id'];
                    });

                    // Find the last playing song
                    var message = 'This is ' + apiListeningChannel['lastPlaying'];
                    var cardTitle = "Currently Playing on " + listeningChannel['title'];
                    console.log("SOMA FM SONG LOOKUP : " + message);
                    requestHandler.response.cardRenderer(cardTitle, apiListeningChannel['lastPlaying']);
                    requestHandler.response.speak(message);
                    requestHandler.emit(':responseReady');
                });
            }).on('error', function (e) {
                console.log("SOMA FM SONG LOOKUP ERROR: ", e);
                requestHandler.response.speak('An error was encountered looking up this song.');
                requestHandler.emit(':responseReady');
            });
        },
        popular: function () {
            // Hold on to a reference to 'this' for the https callback
            var requestHandler = this;

            https.get(apiUrl, function(res) {
                var body = '';

                res.on('data', function (chunk) {
                    body += chunk;
                });

                res.on('end', function () {
                    var apiResponse = JSON.parse(body);
                    var currentChannels = apiResponse['channels'];
                    // sort by listeners
                    currentChannels.sort(function(a, b) {
                        return b['listeners'] - a['listeners'];
                    });

                    // Construct a message with the top three stations
                    var message = 'The most popular stations ranked by current listeners are ';
                    var popCount = currentChannels.length < 2 ? currentChannels.length : 2;
                    for (var i = 0; i <= popCount; i++) {
                        if (i === popCount) {
                            message += ' and ';
                        }
                        message += currentChannels[i]['title'];
                        if (i === popCount) {
                            message += '.';
                        } else {
                            message += ', ';
                        }
                    }
                    console.log("SOMA FM POPULAR STATIONS LOOKUP : " + message);
                    requestHandler.response.speak(message);
                    requestHandler.emit(':responseReady');
                });
            }).on('error', function (e) {
                console.log("SOMA FM POPULAR STATIONS LOOKUP ERROR: ", e);
                requestHandler.response.speak('An error was encountered looking popular stations.');
                requestHandler.emit(':responseReady');
            });
        },
        unsupported: function () {
            this.response.speak('This command is not applicable to Soma FM.');
            this.emit(':responseReady');
        },
        welcome: function () {
            this.response.speak('Welcome to Soma FM. You can say, play Indie Pop Rocks; or any other channel to begin.');
            this.emit(':responseReady');
        },
        help: function () {
            var message = 'You can say, play Indie Pop Rocks; or any other channel to begin.';
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        },
        exit: function () {
            this.response.speak('Good bye.');
            this.emit(':responseReady');
        },
        unimplemented: function () {
            this.response.speak('This function is not yet implemented');
            this.emit(':responseReady');
        },
        unhandled: function () {
            var message = 'Sorry, I could not understand. You can say, play Indie Pop Rocks; or any other channel to begin.';
            this.response.speak(message).listen(message);
            this.emit(':responseReady');
        }
    }
}();

module.exports = somafm;
