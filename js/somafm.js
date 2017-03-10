'use strict';

var constants = require('./constants');
var channels = require('./channels');
var https = require('https');
var apiUrl = 'https://somafm.com/channels.json?alexa';

var somafm = function () {
    return {
        play: function () {
            this.handler.state = constants.states.PLAY_MODE;

            // See what we were playing before
            var token = this.attributes['token'];
            console.log("SOMA FM CURRENT TOKEN: " + token);
            // If we asked for something different override what was playing before
            var intent = this.event.request.intent;
            if (intent && intent.slots && intent.slots.Channel && intent.slots.Channel.value) {
                token = intent.slots.Channel.value.toLowerCase();
                console.log("SOMA FM UPDATED TOKEN: " + token);
            }

            // Make sure we have something to play
            if (token) {
                // Save the channel as our token, downcased for easier lookup
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
                    var message = 'You\'re listening to ' + channel['title'] + ' on Soma FM';
                    this.response.speak(message);
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

            if (requestHandler.event.context.AudioPlayer.token) {
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

                        // Make the song spoken more natural if we get a clean split
                        // Normal format is 'Artist - Song'
                        var lastPlaying = apiListeningChannel['lastPlaying'].split(' - ', 2);
                        var currentPlay = lastPlaying.length === 2 ? lastPlaying[1] + ' by ' + lastPlaying[0] : apiListeningChannel['lastPlaying'];

                        // Find the last playing song
                        //
                        // Replace the & or an invalid ssml output will occur.
                        // There's probably other characters we should be looking for
                        // but I think this will cover 99% of occurrences
                        var message = 'This is ' + currentPlay.replace(/&/g, '&amp;');
                        var cardTitle = "Currently Playing on " + listeningChannel['title'];
                        console.log("SOMA FM SONG LOOKUP : " + message);
                        requestHandler.response.cardRenderer(cardTitle, currentPlay);
                        requestHandler.response.speak(message);
                        requestHandler.emit(':responseReady');
                    });
                }).on('error', function (e) {
                    console.log("SOMA FM SONG LOOKUP ERROR: ", e);
                    requestHandler.response.speak('An error was encountered looking up this song.');
                    requestHandler.emit(':responseReady');
                });
            } else {
                console.log("SOMA FM SONG LOOKUP NO CHANNEL");
                requestHandler.response.speak("Try asking me later when you're listening to a channel.");
                requestHandler.emit(':responseReady');
            }
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
            var message = 'Welcome to Soma FM. You can say, play Indie Pop Rocks; or any other channel to begin.';
            this.response.speak(message).listen(message);
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
