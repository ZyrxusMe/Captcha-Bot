const Discord = require("discord.js"),
client = new Discord.Client();
const fetch = require('node-fetch');


module.exports.run = async (client, message, args) => {

function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " day") + " before";
        };
        let guild = message.channel.guild
        let serverSize = message.guild.memberCount;
        let botCount = message.guild.members.cache.filter(m => m.user.bot).size;
        let humanCount = serverSize - botCount;
        let verifLevels = ["Yok", "Düşük hesapta e-posta doğrulanmış olmalıdır", "Orta - Discord'a 5 dakikadan daha uzun süre kayıtlı olmalıdır", "Yüksek - (╯ ° □ °） ╯︵ ┻━┻ - sunucunun üyesi 10 dakikadan uzun olmalıdır", "Çok Yüksek - ┻━┻ ミ ヽ (ಠ 益 ಠ) ﾉ 彡 ┻━┻ - doğrulanmış bir telefon numarasına sahip olmalıdır"];

let region = {
            "us-central": "Amerika :flag_us:",
            "us-east": "Doğu Amerika :flag_us:",
            "us-south": "Güney Amerika :flag_us:",
            "us-west": "Batı Amerika :flag_us:",
            "eu-west": "Batı Avrupa :flag_eu:",
            "eu-central": "Avrupa :flag_eu:",
            "singapore": "Singapur :flag_sg:",
            "london": "Londra :flag_gb:",
            "japan": "Japonya :flag_jp:",
            "russia": "Rusya :flag_ru:",
            "hongkong": "Hong Kong :flag_hk:",
            "brazil": "Brezilya :flag_br:",
            "singapore": "Singapur :flag_sg:",
            "sydney": "Sidney :flag_au:",
            "southafrica": "Güney Afrika :flag_za:",
    "amsterdam": "Hollanda :flag_nl:",
                "europe": "Avrupa :flag_eu:"

    }
    
    const pong = new Discord.MessageEmbed()
    .setTitle('Server info')
    .setAuthor('Server', message.guild.iconURL())
.setThumbnail(message.guild.iconURL())
    .setColor('BLUE')
    .setDescription(`

**Guild Name : ${guild.name}**
**Guild ID : ${guild.id}**
**Created : ${checkDays(message.guild.createdAt)}**
 
**Member Count : ${humanCount}**
**Bot Count : ${botCount}**
**Role Count : ${guild.roles.cache.size}**
`)
    message.channel.send(pong)
};

exports.config = {
  name: "serverinfo",
  guildOnly: true,
  aliases: [],
};
