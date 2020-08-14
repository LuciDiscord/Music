const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")
//const db = require("quick.db");

exports.run = async (client, message, args) => {
//let prefix = await db.fetch(`prefix_${message.guild.id}`)
 let prefix = process.env.PREFIX
    const help = new Discord.MessageEmbed()
    .setDescription("Here are the available filters")
    .setThumbnail(client.user.avatarURL())
    .setAuthor(message.author.username, message.author.avatarURL())
    .setDescription(`To use one of the following filters, use \`${prefix}filter\` before the filters name`)
    .addField("**Filters**", "`bassboost`, `tremolo`, `vibrato`, `treble`, `8D`, `normalizer`, `surrounding`, `nightcore`, `vaporwave`, `superequalizer`, `phaser`, `reverse`, `pulsator`")
    .setFooter(`To use filters, ${prefix}filter (the filter). Example : ${prefix}filter nightcore.`)
    .setColor("PURPLE")
    message.channel.send(help)

}
