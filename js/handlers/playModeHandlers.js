'use strict';

var Alexa = require('alexa-sdk');
var constants = require('../constants');
var somafm = require('../somafm');

/*
 * Handlers for intents while playing music.
 */
var playModeHandlers = Alexa.CreateStateHandler(constants.states.PLAY_MODE, {
    'LaunchRequest' : function () {
        somafm.welcome.call(this);
    },
    'PlayChannel' : function () {
        somafm.play.call(this)
    },
    'CurrentlyPlaying' : function () {
        somafm.song.call(this);
    },
    'PopularChannels' : function () {
        somafm.popular.call(this);
    },
    'AMAZON.PauseIntent' : function () {
        somafm.stop.call(this);
    },
    'AMAZON.StopIntent' : function () {
        somafm.stop.call(this);
    },
    'AMAZON.CancelIntent' : function () {
        somafm.stop.call(this);
    },
    'AMAZON.ResumeIntent' : function () {
        somafm.play.call(this);
    },
    'AMAZON.NextIntent' : function () {
        somafm.unsupported.call(this);
    },
    'AMAZON.PreviousIntent' : function () {
        somafm.unsupported.call(this);
    },
    'AMAZON.LoopOnIntent' : function () {
        somafm.unsupported.call(this);
    },
    'AMAZON.LoopOffIntent' : function () {
        somafm.unsupported.call(this);
    },
    'AMAZON.ShuffleOnIntent' : function () {
        somafm.unsupported.call(this);
    },
    'AMAZON.ShuffleOffIntent' : function () {
        somafm.unsupported.call(this);
    },
    'AMAZON.StartOverIntent' : function () {
        somafm.unsupported.call(this);
    },
    'AMAZON.HelpIntent' : function () {
        somafm.help.call(this);
    },
    'SessionEndedRequest' : function () {
        // No session ended logic
    },
    'Unhandled' : function () {
        somafm.unhandled().call(this);
    }
});

module.exports = playModeHandlers;