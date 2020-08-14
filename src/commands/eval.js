const Discord = require('discord.js');
const owners = ["601614134286483495", "523579776749928449"];
function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

exports.run = (client, message, args) => {
    if (!owners.includes(message.author.id)) return;
    args = args.join(" ");
    try {
var evaled = eval(args);

        if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);
	let Out = `\`\`\`xl\n${clean(evaled)}\n\`\`\``
	if (message.content.includes("token")) Out = "`Please Nu!~`"
	if (message.content.includes(`"hi"`)) return message.reply("Hellos! What would you like me to eval?");
	const embed = new Discord.MessageEmbed()
	.setTitle("Eval")
	.setColor("GREEN")
	.setTimestamp()
	.addField("Input", `\`${args}\``)
	.addField("Output", Out, false)
	.setThumbnail(client.user.avatarURL())
	.setFooter("Successfully Completed")
	message.channel.send(embed)
    } catch (err) {

        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}
