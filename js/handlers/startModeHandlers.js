'use strict';

var Alexa = require('alexa-sdk');
var constants = require('../constants');
var somafm = require('../somafm');

/*
 * Handlers for initial launch of the skill.
 */
var startModeHandlers = Alexa.CreateStateHandler(constants.states.START_MODE, {
    'LaunchRequest' : function () {
        this.handler.state = constants.states.START_MODE;
        somafm.welcome.call(this);
    },
    'PlayChannel' : function () {
        somafm.play.call(this);
    },
    'CurrentlyPlaying' : function () {
        somafm.song.call(this);
    },
    'PopularChannels' : function () {
        somafm.popular.call(this);
    },
    'AMAZON.HelpIntent' : function () {
        somafm.help.call(this);
    },
    'AMAZON.StopIntent' : function () {
        somafm.exit.call(this);
    },
    'AMAZON.CancelIntent' : function () {
        somafm.exit.call(this);
    },
    'SessionEndedRequest' : function () {
        // No session ended logic
    },
    'Unhandled' : function () {
        somafm.unhandled.call(this);
    }
});

module.exports = startModeHandlers;