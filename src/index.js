const { Client, Intents, Collection } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const util = require('./utils/json/utils.json');

const client = new Client({
    intents: Intents.NON_PRIVILEGED,
    allowedMentions: { parse: ['users'] },
});

(async () => {
    client.commands = new Collection();
    client.events = new Collection();
    client.config = config;
    client.prefix = config.prefix;
    client.util = util;
    await registerCommands(client, '../commands');
    await registerEvents(client, '../events');
    await client.login(config.token);
})();
