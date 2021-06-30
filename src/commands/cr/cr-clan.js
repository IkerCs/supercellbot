/* eslint-disable no-unused-expressions */

const { MessageEmbed } = require('discord.js-light');
const fetch = require('node-fetch');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class bscommand extends BaseCommand {
    constructor() {
        super('cr-clan', 'cr', []);
    }

    async run(client, message, args) {
        const id = args[0] ? args[0].toUpperCase().replace('#', '') : null;
        if (!id) {
            return message.reply('Necesitas enviar una ID valida');
        }
        const BASE_URL = 'https://api.clashroyale.com/v1'
        const request = await fetch(`${BASE_URL}/clans/%23${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${client.config.royale}`,
                Accept: 'application/json',
            },
        });
        const body = await request.json();
        if (body.reason == 'notFound') return message.reply(`La ID **${id}** es invalida!`)
        const Embed = new MessageEmbed()
        Embed.setTitle(body.name)
        Embed.addField('ID', `**${body.tag}**`, true)
        Embed.addField('Descripcion', `**${body.description}**`, true)
        Embed.addField('Ubicacion', `**${body.location.name}**`, true)
        Embed.addField('Miembros', `**${body.members}**`, true)
        Embed.addField('Donaciones', `**${body.memberList.reduce((a, b) => a + b.donations, 0)}**`, true);
        message.channel.send(Embed);
        return 0;
    }
}
