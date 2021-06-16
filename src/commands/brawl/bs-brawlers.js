/* eslint-disable no-unused-expressions */
const fetch = require('node-fetch');
const BaseCommand = require('../../utils/structures/BaseCommand');
const embeds = require('../../utils/functions/bs-brawl-embed');

module.exports = class bscommand extends BaseCommand {
    constructor() {
        super('bs-brawlers', 'brawl', []);
    }

    /**
     *
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {String[]} args
     * @returns
     */
    async run(client, message, args) {
        const id = args[0] ? args[0].toUpperCase().replace('#', '') : null;
        if (!id) {
            return message.reply('Necesitas enviar una ID valida');
        }
        const BASE_URL = 'https://api.brawlstars.com/v1'
        const request = await fetch(`${BASE_URL}/players/%23${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${client.config.brawl}`,
                Accept: 'application/json',
            },
        });
        const body = await request.json();
        if (body.reason == 'notFound') return message.reply(`La ID **${id}** es invalida!`)
        const msg = await message.channel.send(embeds.trophyRoad(body));
        msg.react('\x31\uFE0F\u20E3');
        msg.react('\x32\uFE0F\u20E3');
        msg.react('\x33\uFE0F\u20E3');
        msg.react('\x34\uFE0F\u20E3');
        msg.react('\x35\uFE0F\u20E3');
        msg.react('\x36\uFE0F\u20E3');
        msg.react('\x37\uFE0F\u20E3');

        msg.awaitReactions(async (react, user) => {
            if (user.id != message.author.id) return;
            react.message.reactions.cache.get(react.emoji.name).users.remove(user.id).catch();
            switch (react.emoji.name) {
            case '\x31\uFE0F\u20E3':
                await msg.edit(embeds.trophyRoad(body))
                break;

            case '\x32\uFE0F\u20E3':
                await msg.edit(embeds.rare(body))
                break;

            case '\x33\uFE0F\u20E3':
                await msg.edit(embeds.superRare(body))
                break;

            case '\x34\uFE0F\u20E3':
                await msg.edit(embeds.epic(body))
                break;

            case '\x35\uFE0F\u20E3':
                await msg.edit(embeds.mythic(body))
                break;

            case '\x36\uFE0F\u20E3':
                await msg.edit(embeds.legendary(body))
                break;

            case '\x37\uFE0F\u20E3':
                await msg.edit(embeds.chromatic(body))
                break;

            default:
                null;
                break;
            }
        });
        return 0;
    }
}
