/* eslint-disable no-unused-expressions */

const { MessageEmbed } = require('discord.js-light');
const fetch = require('node-fetch');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class bscommand extends BaseCommand {
    constructor() {
        super('cr-chest', 'cr', []);
    }

    async run(client, message, args) {
        const id = args[0] ? args[0].toUpperCase().replace('#', '') : null;
        if (!id) {
            return message.reply('Necesitas enviar una ID valida');
        }
        const BASE_URL = 'https://api.clashroyale.com/v1'
        const request = await fetch(`${BASE_URL}/players/%23${id}/upcomingchests`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${client.config.royale}`,
                Accept: 'application/json',
            },
        });
        const body = await request.json();
        if (body.reason == 'notFound') return message.reply(`La ID **${id}** es invalida!`)
        const obj = {
            'Golden Chest': 'Cofre de oro',
            'Silver Chest': 'Cofre de plata',
            'Giant Chest': 'Cofre gigante',
            'Magical Chest': 'Cofre magico',
            'Epic Chest': 'Cofre epico',
            'Legendary Chest': 'Cofre legendario',
            'Mega Lightning Chest': 'Cofre mega relampago',
        };
        const Embed = new MessageEmbed()
        Embed.setTitle(`Cofres de ${id}`);
        Embed.addField('Proximos 4 cofres', `1: ${obj[body.items[0].name]}\n2: ${obj[body.items[1].name]}\n3: ${obj[body.items[2].name]}\n4: ${obj[body.items[3].name]}`, true);
        Embed.addField('Proximos cofres', `
        Proximo cofre gigante: ** en la posicion: ${body.items.find((x) => x.name == 'Giant Chest').index + 1}**
        Proximo cofre magico: ** en la posicion: ${body.items.find((x) => x.name == 'Magical Chest').index + 1}**
        Proximo cofre epico: ** en la posicion: ${body.items.find((x) => x.name == 'Epic Chest').index + 1}**
        Proximo cofre Legendario: ** en la posicion: ${body.items.find((x) => x.name == 'Epic Chest').index + 1}**
        Proximo cofre mega relampago: ** en la posicion: ${body.items.find((x) => x.name == 'Mega Lightning Chest').index + 1}**`);
        message.channel.send(Embed);
        return 0;
    }
}
