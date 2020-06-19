const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("720237756894150767")
setInterval(function() {
channel.send(`انت بضان اوي احا ؟؟`);
}, 30)
})

client.login(process.env.BOT_TOKEN);