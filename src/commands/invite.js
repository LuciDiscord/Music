const Discord = require('discord.js')

exports.run = (client, message, args) =>{

	const emb = new Discord.MessageEmbed()
	.setTitle("Here\'s My Invite links")
	.addField("Invite", "[Click to invite me](https://discord.com/oauth2/authorize?client_id=626771394063237138&permissions=103935041&scope=bot)")
	.addField("Server", "[Click to Join support server](https://discord.gg/B8pabK7)")
	message.channel.send(emb)
};
