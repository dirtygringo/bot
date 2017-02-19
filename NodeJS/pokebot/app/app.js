(function () {
    'use strict';
    var restify = require('restify'),
        builder = require('botbuilder'),
        config = require('./config.js'),
        recast = require('recastai');

    // RecastAi client
    var recastClient = new recast.Client(config.recast);

    // Creating connector
    var connector = new builder.ChatConnector({
        appId: config.appId,
        appPassword: config.appPassword
    });

    // Create chat bot
    var bot = new builder.UniversalBot(connector);

    bot.dialog('/', (session) => {
        recastClient.textRequest(session.message.text)
            .then(res => {
                let intent = res.intent();
                let entity = res.get('pokemon');
                session.send(`Intent: ${intent.slug}`);
                session.send(`Entity: ${entity.name}`);
            })
            .catch(() => session.send('I need some sleep right now... Talk to me later'));
    });

    // Restify Server Setup
    var server = restify.createServer();
    server.listen(8080,() => {
        console.log('Starting up server....');
    });

    server.post('/', connector.listen());
}());
