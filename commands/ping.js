const Discord = require("discord.js"),
client = new Discord.Client();
const fetch = require('node-fetch');


module.exports.run = async (client, message, args) => {

                  const API = await fetch(`ip`) // Bot apisiz çalışsın istiyorsanız buranın başına // ekleyin
                        const Data = await API.json(); // Bot apisiz çalışsın istiyorsanız buranın başına // ekleyin

    
    const pong = new Discord.MessageEmbed()
    .setTitle('Pong!')
    .setColor('BLUE')
    .setDescription(`

**<:bot:911273117446467655> : Ping -** __${client.ws.ping}__
**<:bot:911273117446467655> : Discord API -** __${new Date().getTime() - message.createdTimestamp}__
**<:bot:911273117446467655> : Captcha Bot API -** __${Data.ping}__ // Bot apisiz çalışsın istiyorsanız burayı silin.
 
`)
    message.channel.send(pong)
};

exports.config = {
  name: "ping",
  guildOnly: true,
  aliases: [],
};
