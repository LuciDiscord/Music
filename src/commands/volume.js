const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //If the member is not in a voice channel
    if(!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${emotes.error}`);

    //If there's no music
    if(!client.player.isPlaying(message.guild.id)) return message.channel.send(`No music playing on this server ${emotes.error}`);

    //Args
    if(!args[0]) return message.channel.send(`Please enter a number [1-150]${emotes.error}`);

    //Security modification
    if(isNaN(args[0])) return message.channel.send(`Please enter a valid number [1-150]${emotes.error}`);
    if(150 < args[0])  return message.channel.send(`Please enter a valid number [1-150]${emotes.error}`)
    if(args[0] <=0) return message.channel.send(`Please enter a valid number [1-150]${emotes.error}`)

    //Cannot put (-), (+), (,) or (.)
    if(message.content.includes("-")) return message.channel.send(`Please enter a valid number [1-150]${emotes.error}`)
    if(message.content.includes("+")) return message.channel.send(`Please enter a valid number [1-150]${emotes.error}`)
    if(message.content.includes(",")) return message.channel.send(`Please enter a valid number [1-150]${emotes.error}`)
    if(message.content.includes(".")) return message.channel.send(`Please enter a valid number [1-150]${emotes.error}`)

    //Set volume
    client.player.setVolume(message.guild.id, parseInt(args.join(" ")));

    //Message
    message.channel.send(`Volume set to \`${args.join(" ")}\` ${emotes.success}`);

}
