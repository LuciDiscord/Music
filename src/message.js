const fetch = require("node-fetch");
const Discord = require("discord.js");
const talkedRecently = new Set();

module.exports = (client, message) => {

   //Ignore all bots
    if (message.author.bot) return;

    //Prefix
    let prefix = process.env.PREFIX;
    //Ignore messages not starting with the prefix (in config.json)

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
            message.channel.send("Wait 5 seconds before using commands again. - " + message.author.username);
    } else {
    cmd.run(client, message, args)
      console.log(message.author.id + " ran the command " + command + " with args " + args)
    const body = {
        "username": "Kyra Monitor",
        "avatar_url": "https://cdn.discordapp.com/attachments/422469871343894540/605846303619940362/asuna.png",
        "embeds": [
          {
            "title": "Kyra Monitor",
            "description": "Command Ran",
            "color": 6747458 ,
            "fields": [
              {
                "name": "name",
                "value": message.author.tag,
                "inline": true
              },
              {
                "name": "guild id",
                "value": message.guild.id,
                "inline": true
              },
              {
                "name": "command",
                "value": command.name,
                "inline": true
              },
              {
                "name": "membercount",
                "value": message.guild.members.cache.size,
                "inline": true
              },
              {
                "name": "owner",
                "value": message.guild.owner.user.tag,
                "inline": true
              },
              {
                "name": "owner id",
                "value": message.guild.owner.id,
                "inline": true
              }
            ],
            "thumbnail": {
              "url": message.guild.iconURL()
            },
            "footer": {
              "text": `new server count ${bot.guilds.cache.size} new member count ${(bot.guilds.reduce((a,b) => a + b.memberCount,0)).toLocaleString()}, mobile copy id ${message.guild.id}`
            }
          }
        ]
     }
          fetch(process.env.MONITORHOOK,{
              method: "post",
              body: JSON.stringify(body),
              headers: { 'Content-Type': 'application/json' },
          })

      talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);        }, 5000);
    }

};
