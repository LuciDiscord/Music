const Discord = require("discord.js");

exports.run = async (client, message, args) =>{
	const channels = client.channels.cache.get("737768488763916369")
	if (args < 1) return message.reply("You need to add the bug that you have encountered with details")
	let msgs = args.join(" ")
	const embed = new Discord.MessageEmbed()
		.setTitle("New Bug!?")
		.setDescription(msgs)
		.setFooter(message.author.id + " in " + message.guild.id + " on shard " + message.guild.shard.id)
		.setColor("RED")
		.setAuthor(message.author.tag, message.author.avatarURL())
		channels.send(embed)
}
