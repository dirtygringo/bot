(function () {
    'use strict';
    var restify = require('restify'),
        builder = require('botbuilder'),
        config = require('./config.js');

    // Restify Server Setup
    var server = restify.createServer();
    server.listen(process.env.port || process.env.PORT || 3978, function () {
        console.log('%s', server.name, server.url);
    });

    // Create chat bot
    var connector = new builder.ChatConnector({
        appId: config.appId,
        appPassword: config.appPassword
    });

    var bot = new builder.UniversalBot(connector);
    server.post('/api/messages', connector.listen());

    bot.dialog('/', function (session) {
        session.send('Hello world!');
    });

}());
