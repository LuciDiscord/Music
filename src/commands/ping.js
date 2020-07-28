const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")
const BOATS = require('boats.js');
const Boats = new BOATS(process.env.BOATAPI);

exports.run = async (client, message, args) => {
Boats.getVoted(client.user.id, message.author.id).then((voted) => {
    if (voted.voted){
	message.reply("Yes! you have voted!")
	} else {
	   message.reply("Nope, You haven't voted")}
})
    console.log(voted);
}
