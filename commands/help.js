const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const pong = new Discord.MessageEmbed()
    .setTitle('Captcha')
    .setColor('GREEN')
    .setDescription(`

**Hello! I am Captcha Bot! My commands are:**

**.captcha**
**.ping**
**.serverinfo**

**Do not think that there are several commands! There are options in .captcha**

`)
    message.channel.send(pong)
};

exports.config = {
  name: "help",
  guildOnly: true,
  aliases: [],
};
