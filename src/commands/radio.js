const Discord = require("discord.js");
const opusscript = require("node-opus");

exports.run = (client, message, args) => {
//  if (args.length === 0)
 // return message.reply("You didn't supplied a stream URL!");

    const streamURL = "https://radio.supremedigitalhosting.com/8030/stream"

      if (message.member.voice.channel) {
        message.member.voice.channel.join()
          .then(connection => {
            let embed = new Discord.MessageEmbed()
            .setDescription(`**Connected!** Playing ${args.slice(0, args.length).join(" ")}`)
            .setColor('#ff9900')
            connection.play(streamURL);
            message.channel.send(embed)
          })
          .catch(e => {
            if (e) return message.channel.send("Error:"+ e)
          });
     } else {
        message.reply('You are not in a voice channel!');
     }
    };
