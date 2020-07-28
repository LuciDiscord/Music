# Music-bot
A complete code to download for a music bot. Using a module (discord-player) 🎧

### SETUP AND SELFHOSTING

Go to the folder `src` then the file `.env`.
For the bot to be able to start, please complete the file with your credentials as follows :

```
BOATSAPI=Discord.boats API TOKEN
BOT_TOKEN=
PREFIX=.
OWNERID=601614134286483495
GAME=PLAYING STATUS
```

Reminder :

- `PREFIX`, the prefix that will be set to use the bot.
- `GAME`, the status of the bot.
- `BOT_TOKEN`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.

To customize the emojis go to the file `emojis.json`.
Emojis are already defined by default but you can modify them if you wish.

```js
{
    "music": ":musical_note:",
    "queue": ":bar_chart:",
    "error": ":x:",
    "success": ":white_check_mark:"
}
```

Go to the console and type this :

```
npm i
```

OR if you want it done with a script to install & Run:

==================================
### Linux:
- sudo bash autoMusic.sh
- bash ./startLinux.sh

==================================

To start the bot (only if you didnt to AUTOSTART):

```
#With Node
node index.js

#With pm2
pm2 start index.js
```
All you have to do is turn on your bot.

### 🎵 Music commands

```
play <name>, play music in a vocal salon.
pause, pause the current music.
resume, puts the current music back on. 
queue, see the next musics.
np, see music in progress.
volume <1 - 100>, change the volume.
loop, to enable or disable the repeat function.
skip, skip to next music.
stop, stop all music.
filter <filter>, add / remove filters.
w-filters, see filters.
clear-queue, delete the next music.
```

### General commands
```
help, see the list of available orders.
ping, see the bot latency.
voted, See if you've voted on Discord.Boats, for the bot.
```

Utilities (to change the code) :

Find all the functions available on the official code [right here](https://github.com/LuciDiscord/Music).
This is used with [discord.js](https://www.npmjs.com/package/discord.js) and [discord-player](https://www.npmjs.com/package/discord-player).
