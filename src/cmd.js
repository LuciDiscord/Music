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
})
