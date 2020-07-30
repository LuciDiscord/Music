const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //If the member is not in a voice channel
    if(!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${emotes.error}`);

    //If no music is provided
    if (!args[0]) return message.channel.send(`Please enter a music ${emotes.error}`);

    const aTrackIsAlreadyPlaying = client.player.isPlaying(message.guild.id);

        // If there's already a track playing
        if(aTrackIsAlreadyPlaying){

            // Add the track to the queue
            const result = await client.player.addToQueue(message.guild.id, args[0]);
            if(!result) return message.channel.send(`This song provider is not supported...`);

            if(result.type === 'playlist'){
                message.channel.send(`${result.tracks.length} songs added to the queue ${emotes.music}`);
            } else {
		const emb = new Discord.MessageEmbed()
			.setDescription(`${result.name} added to the queue ${emotes.music}`)
			.setTimestamp()
			message.channel.send(emb)
            }

        } else {

            // Else, play the song
            const result = await client.player.play(message.member.voice.channel, args.join(" ")).catch(() => {});
            if(!result) return message.channel.send(`This song provider is not supported...`);

            if(result.type === 'playlist'){
                message.channel.send(`${result.tracks.length} songs added to the queue ${emotes.music}\nCurrently playing ${result.tracks[0].name} !`);
            } else {
		const embd = new Discord.MessageEmbed()
		.setDescription(`Currently playing ${result.name} ${emotes.music}`)
		.setTimestamp()
                message.channel.send(embd);
            }

            const queue = client.player.getQueue(message.guild.id)

            //Events
            .on('end', () => {
                message.channel.send(`There is no more music in the queue ${emotes.error}`);
            })
            .on('trackChanged', (oldTrack, newTrack) => {
		const emsb = new Discord.MessageEmbed()
                .setDescription(`Now playing ${newTrack.name} ... ${emotes.music}`)
		.setTimestamp()
		message.channel.send(emsb).then(m => m.delete({timeout: 5000}));
            })
            .on('channelEmpty', () => {
                message.channel.send(`Stop playing, there is no more member in the voice channel ${emotes.error}`);
            });
        }
    }
