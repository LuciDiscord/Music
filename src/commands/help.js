const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")
//const db = require("quick.db");

exports.run = async (client, message, args) => {
//let prefix = await db.fetch(`prefix_${message.guild.id}`)
 let prefix = process.env.PREFIX
    const help = new Discord.MessageEmbed()
    .setDescription("Here are the available commands!")
    .setThumbnail(client.user.avatarURL())
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField("**Music**", "`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`")
    .addField("**Utility**", "`voted`, `ping`, `help`, `avatar`, `up`, `time`, `calc`, `invite`, `flist`")
    .addField("**Giveaways**", "`start`, `end`, `reroll`")
    .setFooter(`To use filters, ${prefix}flist and use the desired filter after the command ${prefix}filter`)
    .setColor("PURPLE")
    message.channel.send(help)

}
