const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")
const db = require("quick.db");

exports.run = async (client, message, args) => {
let prefix = await db.fetch(`prefix_${message.guild.id}`)
	if (!prefix) prefix = process.env.PREFIX
    const help = new Discord.MessageEmbed()
    .setDescription("Here are the available commands!")
    .setThumbnail(client.user.avatarURL())
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField("**Music**", "`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`")
    .addField("**Filters**", "`bassboost`, `tremolo`, `vibrato`, `treble`, `8D`, `normalizer`, `surrounding`, `nightcore`, `vaporwave`, `superequalizer`, `phaser`, `reverse`, `pulsator`")
    .addField("**Utility**", "`voted`, `ping`, `help`, `avatar`, `up`, `time`, `calc`, `invite`")
    .addField("**Giveaways**", "`start`, `end`, `reroll`")
    .setFooter(`To use filters, ${prefix}filter (the filter). Example : ${prefix}filter nightcore.`)
    .setColor("PURPLE")
    message.channel.send(help)

}
