const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")
const BOATS = require('boats.js');
const Boats = new BOATS(process.env.BOATAPI);

exports.run = async (client, message, args) => {
	if (!message.mentions.users.first()){
        const Av = new Discord.MessageEmbed()
                .setAuthor(`Your Avatar`, message.author.avatarURL())
                .setColor(`PURPLE`)
                .setImage(message.author.avatarURL() + "?size=2048")
                .setTimestamp()
                message.channel.send(Av);
	 } else {
        	const AvT = new Discord.MessageEmbed()
                	.setAuthor(message.mentions.users.first().tag +`'s Avatar`, message.mentions.users.first().avatarURL())
                	.setColor(`PURPLE`)
                	.setImage(message.mentions.users.first().avatarURL() + "?size=2048")
                	.setTimestamp()
	                message.channel.send(AvT);
}
}
