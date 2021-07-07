/* eslint-disable no-unused-expressions */
const { MessageEmbed } = require('discord.js-light');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class bscommand extends BaseCommand {
    constructor() {
        super('links', 'bot', []);
    }

    /**
     *
     * @param {import('discord.js-light').Client} client
     * @param {import('discord.js-light').Message} message
     * @param {String[]} args
     * @returns
     */
    async run(client, message) {
        const Embed = new MessageEmbed()
        Embed.setDescription(`
        Links importantes: 
        - Invitacion: https://discord.com/api/oauth2/authorize?client_id=830995862506438738&permissions=52224&scope=bot
        - Soporte: https://discord.com/invite/DeK9s4SgME
        - YN9 bot: https://cossio.mx/invite
        - Github: https://github.com/Ikercs/supercellbot

        Desarrollado con: 
        - https://developer.clashroyale.com/
        - https://developer.clashofclans.com/
        - https://developer.brawlstars.com/
        
        Dependencias: 
        - [Node.JS](https://nodejs.org/)
        - [Discord.js](https://npmjs.com/package/discord.js)
        - [Discord.js-light](https://npmjs.com/package/discord.js-light)
        - [node-fetch](https://npmjs.com/package/node-fetch)
        - [nodemon](https://npmjs.com/package/nodemon)
        - [slappey](https://npmjs.com/package/slappey)
        - [pm2](https://npmjs.com/package/pm2)
        - [eslint](https://npmjs.com/package/eslint)
        - [eslint-config-airbnb-base](https://npmjs.com/package/eslint-config-airbnb-base)
        - [eslint-plugin-import](https://npmjs.com/package/eslint-plugin-import)
        - [Visual studio code](https://code.visualstudio.com/)
        - [Linux Ubuntu 20.04](https://ubuntu.com/download/desktop/thank-you?version=21.04&architecture=amd64)
        - [Ionos](https://ionos.com/)

        Plataformas:
        - [MybotList](https://www.portalmybot.com/mybotlist/)
        `)
        return message.channel.send(Embed);
    }
}
