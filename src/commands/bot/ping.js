/* eslint-disable no-unused-expressions */
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class bscommand extends BaseCommand {
    constructor() {
        super('ping', 'bot', []);
    }

    /**
     *
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {String[]} args
     * @returns
     */
    async run(client, message) {
        message.channel.send(`Mi ping actual es de \`${client.ws.ping}ms\``);
        return 0;
    }
}
