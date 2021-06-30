/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
const { MessageEmbed } = require('discord.js-light');
const fetch = require('node-fetch');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class bscommand extends BaseCommand {
    constructor() {
        super('bs-battlelog', 'brawl', []);
    }

    /**
     *
     * @param {import('discord.js-light').Client} client
     * @param {import('discord.js-light').Message} message
     * @param {String[]} args
     * @returns
     */
    async run(client, message, args) {
        const id = args[0] ? args[0].toUpperCase().replace('#', '') : null;
        if (!id) {
            return message.reply('Necesitas enviar una ID valida');
        }
        const BASE_URL = 'https://api.brawlstars.com/v1'
        const request = await fetch(`${BASE_URL}/players/%23${id}/battlelog`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${client.config.brawl}`,
                Accept: 'application/json',
            },
        });
        const body = await request.json();
        if (body.reason == 'notFound') return message.reply(`La ID **${id}** es invalida!`);
        const Embed = new MessageEmbed()
        if (!body.items[0].battle.mode.includes('Showdown')) {
            Embed.setTitle(body.items[0].battle.mode);
            Embed.addField(':thinking: - Tipo', body.items[0].battle.type == 'friendly' ? '**Partida amistosa**' : '**Partida competitiva**')
            Embed.addField('Equipo 1', `\`${body.items[0].battle.teams[0][0].name} | ${body.items[0].battle.teams[0][0].brawler.name}\`,
            ${body.items[0].battle.teams[0][1] ? `\`${body.items[0].battle.teams[0][1].name} | ${body.items[0].battle.teams[0][1].brawler.name}\`,` : ''}
            ${body.items[0].battle.teams[0][2] ? `\`${body.items[0].battle.teams[0][2].name} | ${body.items[0].battle.teams[0][2].brawler.name}\`,` : ''}`)
            Embed.addField('Equipo 2', `\`${body.items[0].battle.teams[1][0].name} | ${body.items[0].battle.teams[1][0].brawler.name}\`,
            ${body.items[0].battle.teams[1][1] ? `\`${body.items[0].battle.teams[1][1].name} | ${body.items[0].battle.teams[1][1].brawler.name}\`,` : ''}
            ${body.items[0].battle.teams[1][2] ? `\`${body.items[0].battle.teams[1][2].name} | ${body.items[0].battle.teams[1][2].brawler.name}\`,` : ''}`)
            Embed.setFooter('Partida 1')
        } else if (body.items[0].battle.mode.startsWith('solo')) {
            Embed.setTitle(body.items[0].battle.mode);
            Embed.addField(':thinking: - Tipo', body.items[0].battle.type == 'friendly' ? '**Partida amistosa**' : '**Partida competitiva**')
            body.items[0].battle.players.forEach((player) => {
                Embed.addField(`${player.name}`, `ID: ${player.tag}\nBrawler: ${player.brawler.name}`)
            });
            Embed.setFooter('Partida 1');
        } else {
            Embed.setTitle(body.items[0].battle.mode);
            Embed.addField(':thinking: - Tipo', body.items[0].battle.type == 'friendly' ? '**Partida amistosa**' : '**Partida competitiva**')
            let i = 0;
            body.items[0].battle.teams.forEach((team) => {
                i += 1;
                Embed.addField(`Equipo ${i}`, `\`${team[0].name} | ${team[0].tag} | ${team[0].brawler.name}\`
                ${team[1] ? `\`${team[1].name} | ${team[1].tag} | ${team[1].brawler.name}\`` : ''}`)
            });
            Embed.setFooter('Partida 1');
        }

        const msg = await message.channel.send(Embed);
        await msg.react('\u25C0');
        await msg.react('\u25B6');
        let index = 0;
        msg.awaitReactions((react, user) => {
            if (user.id != message.author.id) return;
            switch (react.emoji.name) {
            case '\u25C0':
                index -= 1;
                if (body.items[index]) {
                    const LeftEmbed = new MessageEmbed();
                    const { battle } = body.items[index];
                    if (!battle.mode.includes('Showdown')) {
                        LeftEmbed.setTitle(battle.mode);
                        LeftEmbed.addField(':thinking: - Tipo', battle.type == 'friendly' ? '**Partida amistosa**' : '**Partida competitiva**')
                        LeftEmbed.addField('Equipo 1', `\`${battle.teams[0][0].name} | ${battle.teams[0][0].brawler.name}\`,
                        ${battle.teams[0][1] ? `\`${battle.teams[0][1].name} | ${battle.teams[0][1].brawler.name}\`,` : ''}
                        ${battle.teams[0][2] ? `\`${battle.teams[0][2].name} | ${battle.teams[0][2].brawler.name}\`,` : ''}`)
                        LeftEmbed.addField('Equipo 2', `\`${battle.teams[1][0].name} | ${battle.teams[1][0].brawler.name}\`,
                        ${battle.teams[1][1] ? `\`${battle.teams[1][1].name} | ${battle.teams[1][1].brawler.name}\`,` : ''}
                        ${battle.teams[1][2] ? `\`${battle.teams[1][2].name} | ${battle.teams[1][2].brawler.name}\`,` : ''}`)
                    } else if (battle.mode.startsWith('solo')) {
                        LeftEmbed.setTitle(battle.mode);
                        LeftEmbed.addField(':thinking: - Tipo', battle.type == 'friendly' ? '**Partida amistosa**' : '**Partida competitiva**')
                        battle.players.forEach((player) => {
                            LeftEmbed.addField(`${player.name}`, `ID: ${player.tag}\nBrawler: ${player.brawler.name}`)
                        });
                    } else {
                        LeftEmbed.setTitle(battle.mode);
                        LeftEmbed.addField(':thinking: - Tipo', battle.type == 'friendly' ? '**Partida amistosa**' : '**Partida competitiva**')
                        let i = 0;
                        battle.teams.forEach((team) => {
                            i += 1;
                            LeftEmbed.addField(`Equipo ${i}`, `\`${team[0].name} | ${team[0].tag} | ${team[0].brawler.name}\`
                            ${team[1] ? `\`${team[1].name} | ${team[1].tag} | ${team[1].brawler.name}\`` : ''}`)
                        });
                    }
                    LeftEmbed.setFooter(`Partida ${index + 1}`);
                    msg.edit(LeftEmbed)
                } else {
                    index += 1;
                }
                break;

            case '\u25B6':
                index += 1;
                if (body.items[index]) {
                    const RightEmbed = new MessageEmbed();
                    const { battle } = body.items[index];
                    if (!battle.mode.includes('Showdown')) {
                        RightEmbed.setTitle(battle.mode);
                        RightEmbed.addField(':thinking: - Tipo', battle.type == 'friendly' ? '**Partida amistosa**' : '**Partida competitiva**')
                        RightEmbed.addField('Equipo 1', `\`${battle.teams[0][0].name} | ${battle.teams[0][0].brawler.name}\`,
                        ${battle.teams[0][1] ? `\`${battle.teams[0][1].name} | ${battle.teams[0][1].brawler.name}\`,` : ''}
                        ${battle.teams[0][2] ? `\`${battle.teams[0][2].name} | ${battle.teams[0][2].brawler.name}\`,` : ''}`)
                        RightEmbed.addField('Equipo 2', `\`${battle.teams[1][0].name} | ${battle.teams[1][0].brawler.name}\`,
                        ${battle.teams[1][1] ? `\`${battle.teams[1][1].name} | ${battle.teams[1][1].brawler.name}\`,` : ''}
                        ${battle.teams[1][2] ? `\`${battle.teams[1][2].name} | ${battle.teams[1][2].brawler.name}\`,` : ''}`)
                    } else if (battle.mode.startsWith('solo')) {
                        RightEmbed.setTitle(battle.mode);
                        RightEmbed.addField(':thinking: - Tipo', battle.type == 'friendly' ? '**Partida amistosa**' : '**Partida competitiva**')
                        battle.players.forEach((player) => {
                            RightEmbed.addField(`${player.name}`, `ID: ${player.tag}\nBrawler: ${player.brawler.name}`)
                        });
                    } else {
                        RightEmbed.setTitle(battle.mode);
                        RightEmbed.addField(':thinking: - Tipo', battle.type == 'friendly' ? '**Partida amistosa**' : '**Partida competitiva**')
                        let i = 0;
                        battle.teams.forEach((team) => {
                            i += 1;
                            RightEmbed.addField(`Equipo ${i}`, `\`${team[0].name} | ${team[0].tag} | ${team[0].brawler.name}\`
                            ${team[1] ? `\`${team[1].name} | ${team[1].tag} | ${team[1].brawler.name}\`` : ''}`)
                        });
                    }
                    RightEmbed.setFooter(`Partida ${index + 1}`);
                    msg.edit(RightEmbed)
                } else {
                    index -= 1;
                }
                break;

            default:
                break;
            }
        })
        return 0;
    }
}
