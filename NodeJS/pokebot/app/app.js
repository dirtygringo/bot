(function () {
    'use strict';
    var restify = require('restify'),
        builder = require('botbuilder'),
        config = require('./config.js');

    // Creating connector
    var connector = new builder.ChatConnector({
        appId: config.appId,
        appPassword: config.appPassword
    });

    // Create chat bot
    var bot = new builder.UniversalBot(connector);

    bot.dialog('/', function (session) {
        session.send('Hello world!');
    });

    // Restify Server Setup
    var server = restify.createServer();
    server.listen(8080);

    server.post('/', connector.listen());
}());
