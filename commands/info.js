const Discord = require("discord.js"),
client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) => {
    
    let ramm = ""
if(((process.memoryUsage().rss / 1024) / 1024).toFixed(2) >= 0 && ((process.memoryUsage().rss / 1024) / 1024).toFixed(2) < 100 )
  {
    ramm = "--🟢-------------------------------------"
  }
     if(((process.memoryUsage().rss / 1024) / 1024).toFixed(2) >= 100 && ((process.memoryUsage().rss / 1024) / 1024).toFixed(2) < 200 )
  {
    ramm = "------🟢---------------------------------"
  }
       if(((process.memoryUsage().rss / 1024) / 1024).toFixed(2) >= 200 && ((process.memoryUsage().rss / 1024) / 1024).toFixed(2) < 300 )
  {
    ramm = "-----------🟢----------------------------"
  }
      if(((process.memoryUsage().rss / 1024) / 1024).toFixed(2) >= 300 && ((process.memoryUsage().rss / 1024) / 1024).toFixed(2) < 400 )
  {
    ramm = "---------------🟡------------------------"
  }
      if(((process.memoryUsage().rss / 1024) / 1024).toFixed(2) >= 400 && ((process.memoryUsage().rss / 1024) / 1024).toFixed(2) < 500 )
  {
    ramm = "-------------------🟡--------------------"
  }
         if(((process.memoryUsage().rss / 1024) / 1024).toFixed(2) >= 500 && ((process.memoryUsage().rss / 1024) / 1024).toFixed(2) < 600 )
  {
    ramm = "-----------------------🟡----------------"
  }
              if(((process.memoryUsage().rss / 1024) / 1024).toFixed(2) >= 600 && ((process.memoryUsage().rss / 1024) / 1024).toFixed(2) < 700 )
  {
    ramm = "----------------------------🔴-----------"
  }
               if(((process.memoryUsage().rss / 1024) / 1024).toFixed(2) >= 700 && ((process.memoryUsage().rss / 1024) / 1024).toFixed(2) < 800 )
  {
    ramm = "--------------------------------🔴-------"
  }
          if(((process.memoryUsage().rss / 1024) / 1024).toFixed(2) >= 800 && ((process.memoryUsage().rss / 1024) / 1024).toFixed(2) < 900 )
  {
    ramm = "------------------------------------🔴---"
  }
          if(((process.memoryUsage().rss / 1024) / 1024).toFixed(2) >= 900 && ((process.memoryUsage().rss / 1024) / 1024).toFixed(2) < 1024 )
  {
    ramm = "---------------------------------------<:error:971140776627159200>"
  }
    

    
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [day], H [hour], m [minute], s [second]");
    const istatistik = new Discord.MessageEmbed()
               .setAuthor(`${client.user.username} info`, client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
    .setColor('GREEN')
    .addField('**RAM :**', (process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " / 8196 MB ", true)
    .addField('**Uptime:**', seksizaman, false)
    .addField('**Libary:**', `discord.js`, false)
        .addField('**Users:**', client.guilds.cache.reduce((a,b) => a + b.memberCount,0).toLocaleString(), true)
    .addField('**Servers:**', client.guilds.cache.size.toLocaleString(), true)
    .addField('**Ping:**', `:green_circle: ${client.ws.ping}ms`,true)
    .addField('**Ram Bar:**', ramm,false)
    .addField(`Links`, `**[[Invite!](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)]** **[[Vote!](https://top.gg/tr/bot/${client.user.id}/vote)]**`)
message.channel.send(istatistik)
    
};

exports.config = {
  name: "info",
  guildOnly: true,
  aliases: ['i'],
};
