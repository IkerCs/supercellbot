const { MessageEmbed } = require('discord.js-light');
const fetch = require('node-fetch');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class bscommand extends BaseCommand {
    constructor() {
        super('bs-profile', 'brawl', []);
    }

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
        const Embed = new MessageEmbed();
        Embed.setTitle(body.name);
        Embed.setAuthor(body.tag);
        Embed.addField(':trophy: - Trofeos', `Actuales: **${body.trophies}**\nMaximo: **${body.highestTrophies}**`, true);
        Embed.addField(':gem: - Experiencia', `Nivel: **${body.expLevel}**\nPuntos: **${body.expPoints}**`, true);
        Embed.addField(':video_game: - Partidas ganadas', `3v3: **${body['3vs3Victories']}**\nDuo: **${body.duoVictories}**\nSolo: **${body.soloVictories}**`, true)
        Embed.addField(':people_hugging: - Club', body.club.tag ? `ID: **${body.club.tag}**\nNombre: **${body.club.name}**` : '**No esta en un club**', true);
        Embed.addField(':lion_face: - Brawlers', `**${body.brawlers.length}**/${client.util.bs.BRAWLERS}`, true)
        return message.reply(Embed)
    }
}
