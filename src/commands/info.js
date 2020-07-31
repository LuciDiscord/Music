const { MessageEmbed } = require('discord.js')
exports.run = async (client, message, args) =>{
const ShardUsers = client.users.cache.size;
/*
const UserCount = await client.shard.fetchClientValues('guilds.user.size');
const GuildCount = await client.shard.fetchClientValues('guilds.size');
*/
const ShardGuilds = client.guilds.cache.size

	const embed = new MessageEmbed()
		.setTitle(client.user.username + `info`)
		.setColor("PURPLE")
		.setThumbnail(client.user.avatarURL())
		.addField("Library", "Discord.js")
		.addField("Current Shard", `ID: ${message.guild.shard.id}\n${ShardUsers} Users\n${ShardGuilds} Guilds`)
//		.addField("All Shards", `${UserCount} Users\n${GuildCount} Guilds`)
		.setTimestamp()
		.setFooter("Request By:" + message.author.tag)
		message.channel.send(embed).catch(err => console.log(err));
}

