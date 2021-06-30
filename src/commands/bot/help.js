/* eslint-disable no-unused-expressions */
const { MessageEmbed } = require('discord.js-light');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class bscommand extends BaseCommand {
    constructor() {
        super('help', 'bot', []);
    }

    /**
     *
     * @param {import('discord.js-light').Client} client
     * @param {import('discord.js-light').Message} message
     * @param {String[]} args
     * @returns
     */
    async run(client, message) {
        const Embed = new MessageEmbed();
        Embed.setTitle('Menu de Ayuda');
        Embed.addField('<:brawl:850963335791771660> - Brawl stars', client.commands.filter((x) => x.category == 'brawl').map((x) => `\`${x.name}\``), true);
        Embed.addField('<:coc:851162343853129759> - Clash of clans', client.commands.filter((x) => x.category == 'coc').map((x) => `\`${x.name}\``), true)
        Embed.addField('<:cr:851162474677534780> - Clash royale', client.commands.filter((x) => x.category == 'cr').map((x) => `\`${x.name}\``), true)
        Embed.addField(':robot: - Bot', client.commands.filter((x) => x.category == 'bot').map((x) => `\`${x.name}\``), true)
        return message.channel.send(Embed);
    }
}
