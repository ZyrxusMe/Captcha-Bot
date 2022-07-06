const Discord = require("discord.js");
exports.run = async (client, message, args, color, prefix) => {
        if(message.member.roles.cache.some(r=>['roleid'].includes(r.id)) ) {
    try {
        let codein = args.join(" ");
        let code = eval(codein);

      if (codein.length < 1) return message.reply(`enter code!`)
      
        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .addField('Code', `\`\`\`js\n${codein}\`\`\``)
        .addField('Result', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
      let embed2 = new Discord.MessageEmbed()
      .setColor('RED')
      .addField('Code', "\`\`\`js\n"+e+"\n\`\`\`")
        message.channel.send(embed2);
    }
}
}

  
exports.config = {
  name: "eval",
  guildOnly: true,
  aliases: [],
};
