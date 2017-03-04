"use strict";

module.exports = Object.freeze({

    // AppId from the developer portal.
    appId : '',

    //  DynamoDB Table name for saving user state
    dynamoDBTableName : 'AlexaSomaFM',

    /*
     *  States:
     *  START_MODE : Welcome state when the audio has not begun.
     *  PLAY_MODE :  When a station is being played.
     */
    states : {
        START_MODE : '',
        PLAY_MODE : '_PLAY_MODE'
    }
});
