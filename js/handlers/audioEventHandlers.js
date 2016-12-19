'use strict';

var Alexa = require('alexa-sdk');
var constants = require('../constants');

/*
 * Binding audio handlers to PLAY_MODE State since they are expected only in
 * this mode. In general we're just keeping track of the station the user is
 * listening to here.
 */
var audioEventHandlers = Alexa.CreateStateHandler(constants.states.PLAY_MODE, {
    'PlaybackStarted' : function () {
        this.attributes['token'] = this.event.request.token;
        this.emit(':saveState', true);
    },
    'PlaybackFinished' : function () {
        this.attributes['token'] = this.event.request.token;
        this.emit(':saveState', true);
    },
    'PlaybackStopped' : function () {
        this.attributes['token'] = this.event.request.token;
        this.emit(':saveState', true);
    },
    'PlaybackNearlyFinished' : function () {
        // Nothing to do here.
        // This shouldn't occur as streams are 24x7.
        return this.context.succeed(true);
    },
    'PlaybackFailed' : function () {
        // AudioPlayer.PlaybackFailed Directive received. Logging the error.
        console.log("Playback Failed : %j", this.event.request.error);
        this.context.succeed(true);
    }
});

module.exports = audioEventHandlers;