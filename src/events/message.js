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
    cmd.run(client, message, args);
    console.log(message.author.id + " ran the command " + command + " with args " + args);
};
