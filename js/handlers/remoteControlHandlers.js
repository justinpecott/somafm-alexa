'use strict';

var Alexa = require('alexa-sdk');
var constants = require('../constants');
var somafm = require('../somafm');

/*
 * All Requests are received using a Remote Control. Calling corresponding handlers for each of them.
 */
var remoteControlHandlers = Alexa.CreateStateHandler(constants.states.PLAY_MODE, {
        'PlayCommandIssued' : function () {
            somafm.play.call(this)
        },
        'PauseCommandIssued' : function () {
            somafm.stop.call(this)
        },
        'NextCommandIssued' : function () {
            somafm.unsupported.call(this)
        },
        'PreviousCommandIssued' : function () {
            somafm.unsupported.call(this)
        }
    });

module.exports = remoteControlHandlers;