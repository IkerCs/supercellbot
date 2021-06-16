/* eslint-disable no-unused-expressions */

const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class bscommand extends BaseCommand {
    constructor() {
        super('coc-profile', 'coc', []);
    }

    async run(client, message, args) {
        const id = args[0] ? args[0].toUpperCase().replace('#', '') : null;
        if (!id) {
            return message.reply('Necesitas enviar una ID valida');
        }
        const BASE_URL = 'https://api.clashofclans.com/v1'
        const request = await fetch(`${BASE_URL}/players/%23${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${client.config.clash}`,
                Accept: 'application/json',
            },
        });
        const body = await request.json();
        if (body.reason == 'notFound') return message.reply(`La ID **${id}** es invalida!`)
        const Embed = new MessageEmbed()
        Embed.setTitle(`${body.name}`)
        Embed.addField(':house: - Ayuntamiento', `**${body.townHallLevel}**`, true)
        Embed.addField(':cyclone: - Experiencia', `Nivel: **${body.expLevel}**`, true)
        Embed.addField(':trophy: - Trofeos', `Actuales: **${body.trophies}**\nMaximo: **${body.bestTrophies}**`, true)
        Embed.addField(':star: - Estrellas', `**${body.warStars}**`, true)
        Embed.addField(':shield: - Liga', `**${body.league ? body.league.name : 'No tiene liga'}**`, true)
        Embed.addField(':money_with_wings: - Desafios', `**${body.achievements.length}**`, true)
        Embed.addField(':cd: - Tropas', `${body.troops.filter((x) => x.village == 'home').map((x) => `\`${x.name}\``).join(', ')}\nCantidad: **${body.troops.filter((x) => x.village == 'home').length}**`, true)
        Embed.addField(':champagne_glass: - Hechizos', `**${body.spells.length}**`, true)
        body.league ? Embed.setThumbnail(body.league.iconUrls.medium) : null;
        message.channel.send(Embed);
        return 0;
    }
}
