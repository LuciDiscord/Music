const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    const help = new Discord.MessageEmbed()
    .setDescription("Here are the available commands!")
    .addField("**Music**", "`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`")
    .addField("**Filters**", "`bassboost`, `tremolo`, `vibrato`, `treble`, `8D`, `normalizer`, `surrounding`, `nightcore`, `vaporwave`, `superequalizer`, `phaser`, `reverse`, `pulsator`")
    .addField("**Informations**", "`voted`, `ping`, `help`")
    .setFooter(`To use filters, ${process.env.PREFIX}filter (the filter). Example : ${process.env.PREFIX}filter nightcore.`)
    .setColor("PURPLE")
    
    message.channel.send(help)

}
