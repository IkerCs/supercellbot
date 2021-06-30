const { Client, Intents, Collection } = require('discord.js-light');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const util = require('./utils/json/utils.json');

const client = new Client({
    intents: Intents.NON_PRIVILEGED,
    allowedMentions: { parse: ['users'] },
    messageCacheMaxSize: 1,
    messageCacheLifetime: 1,
    messageSweepInterval: 60,
    messageEditHistoryMaxSize: 1,
    cacheChannels: false,
    cacheEmojis: false,
    cacheRoles: true,
    cachePresences: false,
    cacheGuilds: true,
    cacheOverwrites: true,
    disabledEvents: [
        'messageUpdate',
        'messageDelete',
        'messageDeleteBulk',
        'messageReactionRemove',
        'messageReactionRemoveAll',
        'messageReactionRemoveEmoji',
        'channelCreate',
        'channelUpdate',
        'channelDelete',
        'channelPinsUpdate',
        'roleCreate',
        'roleUpdate',
        'roleDelete',
        'inviteCreate',
        'inviteDelete',
        'emojiCreate',
        'emojiUpdate',
        'emojiDelete',
        'guildEmojisUpdate',
        'guildBanAdd',
        'guildBanRemove',
        'guildCreate',
        'guildUpdate',
        'guildDelete',
        'guildUnavailable',
        'guildMemberAdd',
        'guildMemberUpdate',
        'guildMemberRemove',
        'guildIntegrationsUpdate',
        'presenceUpdate',
        'typingStart',
        'userUpdate',
        'voiceStateUpdate',
        'webhookUpdate',
        'shardConnect',
        'rest',
    ],
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
