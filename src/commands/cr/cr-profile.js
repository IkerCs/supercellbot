/* eslint-disable no-unused-expressions */

const { MessageEmbed } = require('discord.js-light');
const fetch = require('node-fetch');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class bscommand extends BaseCommand {
    constructor() {
        super('cr-profile', 'cr', []);
    }

    async run(client, message, args) {
        const id = args[0] ? args[0].toUpperCase().replace('#', '') : null;
        if (!id) {
            return message.reply('Necesitas enviar una ID valida');
        }
        const BASE_URL = 'https://api.clashroyale.com/v1'
        const request = await fetch(`${BASE_URL}/players/%23${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${client.config.royale}`,
                Accept: 'application/json',
            },
        });
        const body = await request.json();
        if (body.reason == 'notFound') return message.reply(`La ID **${id}** es invalida!`)
        const Embed = new MessageEmbed()
        Embed.setTitle(body.name);
        Embed.addField(':cyclone: - ID', `**${body.tag}**`, true)
        Embed.addField(':ringed_planet: - Nivel', `**${body.expLevel}**`, true)
        Embed.addField(':trophy: - Trofeos', `Actuales: **${body.trophies}**\nMaximos: **${body.bestTrophies}**`, true)
        Embed.addField(':medal: - Partidas', `Victorias: **${body.wins}**\nDerrotas: ${body.losses}\nTotales: **${body.battleCount}**\n3 coronas: **${body.threeCrownWins}**`, true);
        Embed.addField(':people_hugging: - Clan', body.clan ? `ID: **${body.clan.tag}**\nNombre: **${body.clan.name}**` : '**No tiene un clan**', true);
        Embed.addField(':house: - Arena', `**${body.arena ? body.arena.name : 'No tiene arena'}**`, true)
        Embed.addField(':lion_face: - Cartas', `Total: **${body.cards.length}**\nFavorita: **${body.currentFavouriteCard.name}**`, true)
        Embed.addField(':wine_glass: - Mazo actual', body.currentDeck.map((x) => `\`${x.name}\``), true)
        message.channel.send(Embed);
        return 0;
    }
}
