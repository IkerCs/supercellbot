/* eslint-disable no-unused-expressions */
const { MessageEmbed } = require('discord.js-light');
const fetch = require('node-fetch');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class bscommand extends BaseCommand {
    constructor() {
        super('coc-clan', 'coc', []);
    }

    async run(client, message, args) {
        const id = args[0] ? args[0].toUpperCase().replace('#', '') : null;
        if (!id) {
            return message.reply('Necesitas enviar una ID valida');
        }
        const BASE_URL = 'https://api.clashofclans.com/v1'
        const request = await fetch(`${BASE_URL}/clans/%23${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${client.config.clash}`,
                Accept: 'application/json',
            },
        });
        const body = await request.json();
        if (body.reason == 'notFound') return message.reply(`La ID **${id}** es invalida!`)
        const Embed = new MessageEmbed()
        Embed.setTitle(body.name);
        Embed.addField(':bulb: - ID', `**${body.tag}**`, true);
        Embed.addField(':speech_balloon: - Descripcion', `**${body.description ? body.description : 'No tiene descripcion'}**`, true);
        Embed.addField(':flag_white: - Ubicacion', `Ubicacion: **${body.location.name}**\nIdioma: **${body.chatLanguage ? body.chatLanguage.name : 'Sin definir'}**`, true);
        Embed.setThumbnail(body.badgeUrls.large, true);
        Embed.addField(':star: - Nivel', `Nivel: **${body.clanLevel}**\nExperiencia: **${body.clanPoints}**`, true);
        Embed.addField(':trophy: - Requisitos', `Trofeos: **${body.requiredTrophies}**\nAyuntamiento: **${body.requiredTownhallLevel}**`, true);
        Embed.addField(':thinking: - Adicional', `Miembros: **${body.members}/50**\nDonaciones totales: **${body.memberList.reduce((a, b) => a + b.donations, 0)}**\nRegistro de guerra: **${body.isWarLogPublic ? 'Publico' : 'Privado'}**\nVictorias de guerras de clanes: **${body.warWins}**`, true);
        message.channel.send(Embed);
        return 0;
    }
}
