const BaseEvent = require('../../utils/structures/BaseEvent');

const cooldown = new Set();
module.exports = class MessageEvent extends BaseEvent {
    constructor() {
        super('message');
    }

    async run(client, message) {
        if (message.author.bot) return;
	if (!message.content) return;
        if (message.content.match(/^<@!?830995862506438738>( |)$/g)) {
            if (cooldown.has(message.author.id)) return;
            message.channel.send(`¡Hola, ${message.author.toString()}!\nMi nombre es ${client.user.username} y es un gusto poder saludarte hoy.\nMi prefijo actual es **${client.prefix}**, para acceder a mis comandos usa ${client.prefix}help\nPor el momento estoy en desarrollo por lo que puedes experimentar algunos errores, si esto sucede por favor comunicalo al equipo de soporte dando click aqui -> https://discord.com/invite/DeK9s4SgME\n¡Espero que te sea muy util!\nRecibe un calido abrazo de nuestro equipo de soporte y ha sido un placer asistir a un jugador elite como tu.`)
            cooldown.add(message.author.id);
            setTimeout(() => cooldown.delete(message.author.id), 60000)
        }
        if (message.content.toLowerCase().startsWith(client.prefix)) {
            const [cmdName, ...cmdArgs] = message.content.slice(client.prefix.length).trim().split(/\s+/);
            const command = client.commands.get(cmdName.toLowerCase());
            const permissions = message.channel.permissionsFor(client.user);
            if (!permissions.has('EMBED_LINKS')
            || !permissions.has('USE_EXTERNAL_EMOJIS')
            || !permissions.has('ADD_REACTIONS')) {
                message.channel.send(`¡Hola ${message.author.toString()}!\nMi nombre es SupercellBot y es un gusto poder saludarte hoy.\nPara poder funcionar correctamente necesito los permisos \`Insertar enlaces\`, \`Añadir reacciones\` y \`usar emojis externos\`\nSi necesitas ayuda adicional puedes contactar con nosotros mediante https://discord.com/invite/DeK9s4SgME\n¡Espero que te sea muy util!\nRecibe un calido abrazo de nuestro equipo de soporte y ha sido un placer asistir a un jugador elite como tu.`);
            } else if (command) {
                command.run(client, message, cmdArgs).catch(() => message.channel.send('Ocurrio un error, intenta de nuevo'));
            }
        }
    }
}
