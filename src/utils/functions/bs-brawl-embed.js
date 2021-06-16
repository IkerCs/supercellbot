/* eslint-disable no-unused-expressions */
const { MessageEmbed } = require('discord.js');
const functions = require('./brawlers');
const emojis = require('../../constants/bs-emojis');

function trophyRoad(body) {
    const Embed = new MessageEmbed();
    Embed.setTitle(body.name);
    Embed.setAuthor('Camino de trofeos');
    const SHELLY = functions.SHELLY(body);
    SHELLY ? Embed.addField(`${emojis.SHELLY} - SHELLY`, `Trofeos: **${SHELLY.trophies}**\nMaximos: **${SHELLY.highestTrophies}**\nNivel: **${SHELLY.power}**\nRango: **${SHELLY.rank}**`, true) : null;
    const NITA = functions.NITA(body)
    NITA ? Embed.addField(`${emojis.NITA} - NITA`, `Trofeos: **${NITA.trophies}**\nMaximos: **${NITA.highestTrophies}**\nNivel: **${NITA.power}**\nRango: **${NITA.rank}**`, true) : null;
    const COLT = functions.COLT(body)
    COLT ? Embed.addField(`${emojis.COLT} - COLT`, `Trofeos: **${COLT.trophies}**\nMaximos: **${COLT.highestTrophies}**\nNivel: **${COLT.power}**\nRango: **${COLT.rank}**`, true) : null;
    const BULL = functions.BULL(body)
    BULL ? Embed.addField(`${emojis.BULL} - BULL`, `Trofeos: **${BULL.trophies}**\nMaximos: **${BULL.highestTrophies}**\nNivel: **${BULL.power}**\nRango: **${BULL.rank}**`, true) : null;
    const JESSIE = functions.JESSIE(body)
    JESSIE ? Embed.addField(`${emojis.JESSIE} - JESSIE`, `Trofeos: **${JESSIE.trophies}**\nMaximos: **${JESSIE.highestTrophies}**\nNivel: **${JESSIE.power}**\nRango: **${JESSIE.rank}**`, true) : null;
    const BROCK = functions.BROCK(body)
    BROCK ? Embed.addField(`${emojis.BROCK} - BROCK`, `Trofeos: **${BROCK.trophies}**\nMaximos: **${BROCK.highestTrophies}**\nNivel: **${BROCK.power}**\nRango: **${BROCK.rank}**`, true) : null;
    const DYNAMIKE = functions.DYNAMIKE(body)
    DYNAMIKE ? Embed.addField(`${emojis.BROCK} - DYNAMIKE`, `Trofeos: **${DYNAMIKE.trophies}**\nMaximos: **${DYNAMIKE.highestTrophies}**\nNivel: **${DYNAMIKE.power}**\nRango: **${DYNAMIKE.rank}**`, true) : null;
    const BO = functions.BO(body)
    BO ? Embed.addField(`${emojis.BO} - BO`, `Trofeos: **${BO.trophies}**\nMaximos: **${BO.highestTrophies}**\nNivel: **${BO.power}**\nRango: **${BO.rank}**`, true) : null;
    const TICK = functions.TICK(body)
    TICK ? Embed.addField(`${emojis.TICK} - TICK`, `Trofeos: **${TICK.trophies}**\nMaximos: **${TICK.highestTrophies}**\nNivel: **${TICK.power}**\nRango: **${TICK.rank}**`, true) : null;
    const BIT = functions['8-BIT'](body)
    BIT ? Embed.addField(`${emojis['8BIT']} - 8-BIT`, `Trofeos: **${BIT.trophies}**\nMaximos: **${BIT.highestTrophies}**\nNivel: **${BIT.power}**\nRango: **${BIT.rank}**`, true) : null;
    const EMZ = functions.EMZ(body)
    EMZ ? Embed.addField(`${emojis.EMZ} - EMZ`, `Trofeos: **${EMZ.trophies}**\nMaximos: **${EMZ.highestTrophies}**\nNivel: **${EMZ.power}**\nRango: **${EMZ.rank}**`, true) : null;
    const STU = functions.STU(body)
    STU ? Embed.addField(`${emojis.STU} - STU`, `Trofeos: **${STU.trophies}**\nMaximos: **${STU.highestTrophies}**\nNivel: **${STU.power}**\nRango: **${STU.rank}**`, true) : null;
    return Embed;
}

function rare(body) {
    const Embed = new MessageEmbed();
    Embed.setTitle(body.name);
    Embed.setAuthor('Raro');
    const PRIMO = functions['EL PRIMO'](body);
    PRIMO ? Embed.addField(`${emojis.ELPRIMO} - EL PRIMO`, `Trofeos: **${PRIMO.trophies}**\nMaximos: **${PRIMO.highestTrophies}**\nNivel: **${PRIMO.power}**\nRango: **${PRIMO.rank}**`, true) : null;
    const BARLEY = functions.BARLEY(body);
    BARLEY ? Embed.addField(`${emojis.BARLEY} - BARLEY`, `Trofeos: **${BARLEY.trophies}**\nMaximos: **${BARLEY.highestTrophies}**\nNivel: **${BARLEY.power}**\nRango: **${BARLEY.rank}**`, true) : null;
    const POCO = functions.POCO(body);
    POCO ? Embed.addField(`${emojis.POCO} - POCO`, `Trofeos: **${POCO.trophies}**\nMaximos: **${POCO.highestTrophies}**\nNivel: **${POCO.power}**\nRango: **${POCO.rank}**`, true) : null;
    const ROSA = functions.ROSA(body);
    ROSA ? Embed.addField(`${emojis.ROSA} - ROSA`, `Trofeos: **${ROSA.trophies}**\nMaximos: **${ROSA.highestTrophies}**\nNivel: **${ROSA.power}**\nRango: **${ROSA.rank}**`, true) : null;
    Embed.fields.length == 0 ? Embed.setDescription(`${body.name} no tiene brawlers raros`) : null;
    return Embed;
}

function superRare(body) {
    const Embed = new MessageEmbed();
    Embed.setTitle(body.name);
    Embed.setAuthor('Super raro');
    const RICO = functions.RICO(body);
    RICO ? Embed.addField(`${emojis.RICO} - RICO`, `Trofeos: **${RICO.trophies}**\nMaximos: **${RICO.highestTrophies}**\nNivel: **${RICO.power}**\nRango: **${RICO.rank}**`, true) : null;
    const DARRYL = functions.BARLEY(body);
    DARRYL ? Embed.addField(`${emojis.DARRYL} - DARRYL`, `Trofeos: **${DARRYL.trophies}**\nMaximos: **${DARRYL.highestTrophies}**\nNivel: **${DARRYL.power}**\nRango: **${DARRYL.rank}**`, true) : null;
    const PENNY = functions.PENNY(body);
    PENNY ? Embed.addField(`${emojis.PENNY} - PENNY`, `Trofeos: **${PENNY.trophies}**\nMaximos: **${PENNY.highestTrophies}**\nNivel: **${PENNY.power}**\nRango: **${PENNY.rank}**`, true) : null;
    const CARL = functions.CARL(body);
    CARL ? Embed.addField(`${emojis.CARL} - CARL`, `Trofeos: **${CARL.trophies}**\nMaximos: **${CARL.highestTrophies}**\nNivel: **${CARL.power}**\nRango: **${CARL.rank}**`, true) : null;
    const JACKY = functions.JACKY(body);
    JACKY ? Embed.addField(`${emojis.JACKY} - JACKY`, `Trofeos: **${JACKY.trophies}**\nMaximos: **${JACKY.highestTrophies}**\nNivel: **${JACKY.power}**\nRango: **${JACKY.rank}**`, true) : null;
    Embed.fields.length == 0 ? Embed.setDescription(`${body.name} no tiene brawlers Super raros`) : null;
    return Embed;
}

function epic(body) {
    const Embed = new MessageEmbed();
    Embed.setTitle(body.name);
    Embed.setAuthor('Epico');
    const PIPER = functions.PIPER(body);
    PIPER ? Embed.addField(`${emojis.PIPER} - PIPER`, `Trofeos: **${PIPER.trophies}**\nMaximos: **${PIPER.highestTrophies}**\nNivel: **${PIPER.power}**\nRango: **${PIPER.rank}**`, true) : null;
    const PAM = functions.PAM(body);
    PAM ? Embed.addField(`${emojis.PAM} - PAM`, `Trofeos: **${PAM.trophies}**\nMaximos: **${PAM.highestTrophies}**\nNivel: **${PAM.power}**\nRango: **${PAM.rank}**`, true) : null;
    const FRANK = functions.FRANK(body);
    FRANK ? Embed.addField(`${emojis.FRANK} - FRANK`, `Trofeos: **${FRANK.trophies}**\nMaximos: **${FRANK.highestTrophies}**\nNivel: **${FRANK.power}**\nRango: **${FRANK.rank}**`, true) : null;
    const BIBI = functions.BIBI(body);
    BIBI ? Embed.addField(`${emojis.BIBI} - BIBI`, `Trofeos: **${BIBI.trophies}**\nMaximos: **${BIBI.highestTrophies}**\nNivel: **${BIBI.power}**\nRango: **${BIBI.rank}**`, true) : null;
    const BEA = functions.BEA(body);
    BEA ? Embed.addField(`${emojis.BEA} - BEA`, `Trofeos: **${BEA.trophies}**\nMaximos: **${BEA.highestTrophies}**\nNivel: **${BEA.power}**\nRango: **${BEA.rank}**`, true) : null;
    const NANI = functions.NANI(body);
    NANI ? Embed.addField(`${emojis.NANI} - NANI`, `Trofeos: **${NANI.trophies}**\nMaximos: **${NANI.highestTrophies}**\nNivel: **${NANI.power}**\nRango: **${NANI.rank}**`, true) : null;
    const EDGAR = functions.EDGAR(body);
    EDGAR ? Embed.addField(`${emojis.EDGAR} - EDGAR`, `Trofeos: **${EDGAR.trophies}**\nMaximos: **${EDGAR.highestTrophies}**\nNivel: **${EDGAR.power}**\nRango: **${EDGAR.rank}**`, true) : null;
    Embed.fields.length == 0 ? Embed.setDescription(`${body.name} no tiene brawlers epicos`) : null;
    return Embed;
}

function mythic(body) {
    const Embed = new MessageEmbed();
    Embed.setTitle(body.name);
    Embed.setAuthor('Mitico');
    const MORTIS = functions.MORTIS(body);
    MORTIS ? Embed.addField(`${emojis.MORTIS} - MORTIS`, `Trofeos: **${MORTIS.trophies}**\nMaximos: **${MORTIS.highestTrophies}**\nNivel: **${MORTIS.power}**\nRango: **${MORTIS.rank}**`, true) : null;
    const TARA = functions.TARA(body);
    TARA ? Embed.addField(`${emojis.TARA} - TARA`, `Trofeos: **${TARA.trophies}**\nMaximos: **${TARA.highestTrophies}**\nNivel: **${TARA.power}**\nRango: **${TARA.rank}**`, true) : null;
    const GENE = functions.GENE(body);
    GENE ? Embed.addField(`${emojis.GENE} - FRANK`, `Trofeos: **${GENE.trophies}**\nMaximos: **${GENE.highestTrophies}**\nNivel: **${GENE.power}**\nRango: **${GENE.rank}**`, true) : null;
    const MAX = functions.MAX(body);
    MAX ? Embed.addField(`${emojis.MAX} - MAX`, `Trofeos: **${MAX.trophies}**\nMaximos: **${MAX.highestTrophies}**\nNivel: **${MAX.power}**\nRango: **${MAX.rank}**`, true) : null;
    const MRP = functions['MR. P'](body);
    MRP ? Embed.addField(`${emojis.MRP} - MR. P`, `Trofeos: **${MRP.trophies}**\nMaximos: **${MRP.highestTrophies}**\nNivel: **${MRP.power}**\nRango: **${MRP.rank}**`, true) : null;
    const SPROUT = functions.SPROUT(body);
    SPROUT ? Embed.addField(`${emojis.SPROUT} - SPROUT`, `Trofeos: **${SPROUT.trophies}**\nMaximos: **${SPROUT.highestTrophies}**\nNivel: **${SPROUT.power}**\nRango: **${SPROUT.rank}**`, true) : null;
    const BYRON = functions.BYRON(body);
    BYRON ? Embed.addField(`${emojis.BYRON} - BYRON`, `Trofeos: **${BYRON.trophies}**\nMaximos: **${BYRON.highestTrophies}**\nNivel: **${BYRON.power}**\nRango: **${BYRON.rank}**`, true) : null;
    const SQUEAK = functions.SQUEAK(body);
    SQUEAK ? Embed.addField(`${emojis.SQUEAK} - SQUEAK`, `Trofeos: **${SQUEAK.trophies}**\nMaximos: **${SQUEAK.highestTrophies}**\nNivel: **${SQUEAK.power}**\nRango: **${SQUEAK.rank}**`, true) : null;
    Embed.fields.length == 0 ? Embed.setDescription(`${body.name} no tiene brawlers miticos`) : null;
    return Embed;
}

function legendary(body) {
    const Embed = new MessageEmbed();
    Embed.setTitle(body.name);
    Embed.setAuthor('Legendarios');
    const SPIKE = functions.SPIKE(body);
    SPIKE ? Embed.addField(`${emojis.SPIKE} - SPIKE`, `Trofeos: **${SPIKE.trophies}**\nMaximos: **${SPIKE.highestTrophies}**\nNivel: **${SPIKE.power}**\nRango: **${SPIKE.rank}**`, true) : null;
    const CROW = functions.CROW(body);
    CROW ? Embed.addField(`${emojis.CROW} - CROW`, `Trofeos: **${CROW.trophies}**\nMaximos: **${CROW.highestTrophies}**\nNivel: **${CROW.power}**\nRango: **${CROW.rank}**`, true) : null;
    const LEON = functions.LEON(body);
    LEON ? Embed.addField(`${emojis.LEON} - LEON`, `Trofeos: **${LEON.trophies}**\nMaximos: **${LEON.highestTrophies}**\nNivel: **${LEON.power}**\nRango: **${LEON.rank}**`, true) : null;
    const AMBER = functions.AMBER(body);
    AMBER ? Embed.addField(`${emojis.AMBER} - AMBER`, `Trofeos: **${AMBER.trophies}**\nMaximos: **${AMBER.highestTrophies}**\nNivel: **${AMBER.power}**\nRango: **${AMBER.rank}**`, true) : null;
    Embed.fields.length == 0 ? Embed.setDescription(`${body.name} no tiene brawlers legendarios`) : null;
    return Embed;
}

function chromatic(body) {
    const Embed = new MessageEmbed();
    Embed.setTitle(body.name);
    Embed.setAuthor('Cromaticos');
    const GALE = functions.GALE(body);
    GALE ? Embed.addField(`${emojis.GALE} - GALE`, `Trofeos: **${GALE.trophies}**\nMaximos: **${GALE.highestTrophies}**\nNivel: **${GALE.power}**\nRango: **${GALE.rank}**`, true) : null;
    const SURGE = functions.SURGE(body);
    SURGE ? Embed.addField(`${emojis.CROW} - CROW`, `Trofeos: **${SURGE.trophies}**\nMaximos: **${SURGE.highestTrophies}**\nNivel: **${SURGE.power}**\nRango: **${SURGE.rank}**`, true) : null;
    const COLETTE = functions.COLETTE(body);
    COLETTE ? Embed.addField(`${emojis.COLETTE} - COLETTE`, `Trofeos: **${COLETTE.trophies}**\nMaximos: **${COLETTE.highestTrophies}**\nNivel: **${COLETTE.power}**\nRango: **${COLETTE.rank}**`, true) : null;
    const LOU = functions.LOU(body);
    LOU ? Embed.addField(`${emojis.LOU} - LOU`, `Trofeos: **${LOU.trophies}**\nMaximos: **${LOU.highestTrophies}**\nNivel: **${LOU.power}**\nRango: **${LOU.rank}**`, true) : null;
    const RUFFS = functions['COLONEL RUFFS'](body);
    RUFFS ? Embed.addField(`${emojis.COLONELRUFFS} - RUFFS`, `Trofeos: **${RUFFS.trophies}**\nMaximos: **${RUFFS.highestTrophies}**\nNivel: **${RUFFS.power}**\nRango: **${RUFFS.rank}**`, true) : null;
    const BELLE = functions.BELLE(body);
    BELLE ? Embed.addField(`${emojis.BELLE} - BELLE`, `Trofeos: **${BELLE.trophies}**\nMaximos: **${BELLE.highestTrophies}**\nNivel: **${BELLE.power}**\nRango: **${BELLE.rank}**`, true) : null;
    Embed.fields.length == 0 ? Embed.setDescription(`${body.name} no tiene brawlers cromaticos`) : null;
    return Embed;
}
module.exports = {
    chromatic,
    legendary,
    mythic,
    epic,
    superRare,
    rare,
    trophyRoad,
}
