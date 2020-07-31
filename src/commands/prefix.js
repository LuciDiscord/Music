const Discord = require("discord.js");
const fs = require("fs");
const db = require('quick.db');

exports.run = async (client, message, args, prefix) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:facepalm: You need \`ADMINISTRATOR\` permission to do this`);
  if(!args[0] || args[0 == "help"]) return message.reply(`Usage: [p]prefix <desired prefix here> ([p] is the client original prefix or the prefix previously set)\n [p]prefix clear (to clear the customised prefix and reset it to k/)`)
  if(args[0] === 'clear'){
    db.set(`prefix_${message.guild.id}`, process.env.PREFIX)
        message.channel.send("Success, Cleared customised prefix. Reset to " + process.env.PREFIX)
        return
    }else{
    db.set(`prefix_${message.guild.id}`, args[0])
    let embed = new Discord.MessageEmbed()
    .setColor("#ff8200")
    .setTitle("Prefix Changed")
    .setDescription(`Set to ${args[0]}`)
    .setFooter(`${message.author.tag}`)
    .setTimestamp()
    message.channel.send({embed});
  }
}
