const Discord = require('discord.js-selfbot');
const client = new Discord.Client();

const ChannelId = '874742033653334066'

client.on('ready', async() => {
  console.log('Self Bot Aktif.');
  client.channels.cache.get(ChannelId).join().then(Kanal => {
  Kanal.voice.setSelfMute(true)
  Kanal.voice.setSelfDeaf(true)
})  
  console.log('Bot Ses Kanalına Giriş Yaptı.');
});

client.login(process.env.Token); 
