/* eslint-disable no-unused-expressions */
const { MessageEmbed } = require('discord.js-light');
const fetch = require('node-fetch');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class bscommand extends BaseCommand {
    constructor() {
        super('coc-war', 'coc', []);
    }

    async run(client, message, args) {
        const id = args[0] ? args[0].toUpperCase().replace('#', '') : null;
        if (!id) {
            return message.reply('Necesitas enviar una ID valida');
        }
        const BASE_URL = 'https://api.clashofclans.com/v1'
        const request = await fetch(`${BASE_URL}/clans/%23${id}/currentwar`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${client.config.clash}`,
                Accept: 'application/json',
            },
        });
        const body = await request.json();
        if (body.reason == 'notFound') return message.reply(`La ID **${id}** es invalida!`)
        if (body.reason == 'accessDenied') return message.reply('El clan no esta en una guerra de clanes');
        const Embed = new MessageEmbed();
        Embed.setTitle(`${body.clan.name} vs ${body.opponent.name}`);
        Embed.addField('Informacion de guerra', `Tamaño: **${body.teamSize} miembros por clan**\nEstado: **${body.state == 'preparation' ? 'Preparacion' : 'En Guerra'}**\nClanes: **${body.clan.tag}**, **${body.opponent.tag}**`, true)
        Embed.addField('Clan', `Tag: **${body.clan.tag}**\nNivel: **${body.clan.clanLevel}**\nAtaques: **${body.clan.attacks}**\nEstrellas: **${body.clan.stars}**\nPorcentaje de destruccion: **${body.clan.destructionPercentage}**`, true)
        Embed.addField('Equipo oponente', `Tag: **${body.opponent.tag}**\nNivel: **${body.opponent.clanLevel}**\nAtaques: **${body.opponent.attacks}**\nEstrellas: **${body.opponent.stars}**\nPorcentaje de destruccion: **${body.opponent.destructionPercentage}**`, true)
        message.channel.send(Embed);
        return 0;
    }
}
