/* eslint-disable no-unused-expressions */
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class bscommand extends BaseCommand {
    constructor() {
        super('bs-club', 'brawl', []);
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
        const request = await fetch(`${BASE_URL}/clubs/%23${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${client.config.brawl}`,
                Accept: 'application/json',
            },
        });
        const body = await request.json();
        const States = {
            open: 'Abierto',
            inviteOnly: 'Solo invitacion',
            closed: 'Cerrado',
        }
        console.log(body.type)
        const Embed = new MessageEmbed();
        Embed.setTitle(`${body.name}`);
        Embed.addField(':yo_yo: - ID', `**${body.tag}**`, true);
        Embed.addField(':speech_balloon: - Descripcion', `${body.description ? body.description : 'No tiene descripcion'}`, true);
        Embed.addField(':trophy: - Trofeos', `**${body.trophies}**`, true);
        Embed.addField(':medal: - Trofeos requeridos', `**${body.requiredTrophies}**`, true);
        Embed.addField(':people_hugging: - Miembros', `**${body.members.length}**`, true);
        Embed.addField(':clock1: - Estado', States[body.type], true);
        return message.channel.send(Embed);
    }
}
