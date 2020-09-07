const DBL = require("dblapi.js");
const Discord = require("discord.js");
exports.run = (client, message, args) =>{
const dbl = new DBL(process.env.DBL, client);

if (args < 1) return message.reply("Please provide a valid Bot id");
dbl.getBot(args[0]).then(bot => {
	const emb = new Discord.MessageEmbed()
	.setTitle(bot.username)
	.setThumbnail(bot.avatarURL)
	.setFooter("From TOP.GG")
	.setColor("BLUE")
	.addField("Servers", bot.guilds.size)
	.addField("Owners", bot.owners.tag)
	message.channel.send(emb);
})
}
