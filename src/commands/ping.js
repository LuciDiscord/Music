const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")
const BOATS = require('boats.js');
const Boats = new BOATS(process.env.BOATAPI);

exports.run = async (client, message, args) => {
	message.channel.send(`:ping_pong: Pong!\n|| Websockets: ${client.ws.ping}ms ||`)
}
