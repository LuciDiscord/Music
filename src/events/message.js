const fetch = require("super-fetch");
const Discord = require("discord.js");
const talkedRecently = new Set();
const db = require('quick.db');
const mentions = ["<@626771394063237138>", "<@!626771394063237138"];
module.exports = async (client, message) =>{
   //Ignore all bot
    if (message.author.bot) return;

    //Prefix
/*
    let prefix = await db.fetch(`prefix_${message.guild.id}`)
	if (!prefix) prefix = process.env.PREFIX;
*/
		let prefix = process.env.PREFIX;

  //Ignore messages not starting with the prefix (in config.json)
     if (mentions.includes(message.content)) {
	if (message.channel.type === "dm") return ("Sorry, commands don't work here");
	message.channel.send(`If you forgot my prefix for this server, its \`${prefix}\``);
     }
     if (!message.content.toLowerCase().startsWith(prefix)) return;
    //Our standard argument/command name definition.
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    //Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
  
    //If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
    //Run the command
if (talkedRecently.has(message.author.id)) {
const webhookClient = new Discord.WebhookClient(process.env.WebHookID, process.env.WebHookToken);

const embed = new Discord.MessageEmbed()
	.setTitle('Command TimeOut Hit')
	.setDescription(message.author.id + " ran the command " + command + " with args " + args + " on guild " + message.guild.id + ` (${message.guild.name}) on shard ${message.guild.shard.id}`)
	.setColor('#0099ff')
	.setTimestamp()

webhookClient.send('Command Monitor', {
	username: 'Kyra Monitor',
	avatarURL: 'https://i.imgur.com/wSTFkRM.png',
 	embeds: [embed],
})
            message.channel.send("Wait 1.5 seconds before using commands again. - " + message.author.username);
    } else {
              cmd.run(client, message, args)
      console.log(message.author.id + " ran the command " + command + " with args " + args)

      talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 1500);
    }
}
