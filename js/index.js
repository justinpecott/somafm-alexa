'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./constants');
var audioEventHandlers = require('./handlers/audioEventHandlers');
var startModeHandlers = require('./handlers/startModeHandlers');
var playModeHandlers = require('./handlers/playModeHandlers');
var remoteControlHandlers = require('./handlers/remoteControlHandlers');

exports.handler = function(event, context, callback){
    console.log('Here we go!');
    console.log("SOMA FM EVENT: " + JSON.stringify(event));
    console.log("SOMA FM CONTEXT: " + JSON.stringify(context));
    var alexa = Alexa.handler(event, context);
    alexa.appId = constants.appId;
    alexa.dynamoDBTableName = constants.dynamoDBTableName;
    alexa.registerHandlers(
        startModeHandlers,
        playModeHandlers,
        remoteControlHandlers,
        audioEventHandlers
    );

    // Ensure the device can play audio
    // event.context.System won't be present while testing from
    // the Developer Portal
    if (event.context !== undefined &&
        event.context.System !== undefined &&
        event.context.System.device.supportedInterfaces.AudioPlayer === undefined) {
        alexa.emit(':tell', 'Sorry, Soma FM is not supported on this device');
    }
    else {
        alexa.execute();
    }
};
