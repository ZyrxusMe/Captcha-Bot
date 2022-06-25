const Discord = require("discord.js"),
client = new Discord.Client({partials: ["MESSAGE", "USER", "REACTION"]});
      const { Database } =  require('nukleon')
const { createCanvas, loadImage } = require('canvas')
const  db  =  new  Database('database.json')
const  codes  =  new  Database('codes.json')
const  userverifyed  =  new  Database('verified.json')

module.exports.run = async (client, message, args) => {
  let sebep = args[0]

    const pong = new Discord.MessageEmbed()
    .setTitle('Error Choose an option!!')
    .setColor('RED')
    .setDescription(`
channel | log | message | verify | get-code | verified-role

`)
    .setImage('https://cdn.discordapp.com/attachments/962346241432375337/963168692902957116/unknown.png')
   if(!sebep) return message.channel.send(`${message.author}`, pong)
                if (args[0] == "verified-role"  || args[0] == "doğrulanmış-rol") {

                        let kanalida = args[1]


    if (!message.member.hasPermission("ADMINISTRATOR")) {
      const yetkinyokmeh = new Discord.MessageEmbed()
        .setAuthor("❌ Error!")
        .setDescription("**You Must Have 'Administrator' Permission to Use This Command!**")
        .setColor("RED")
      return message.channel.send(yetkinyokmeh)
    }


    if (!kanalida) {
      const idyokmeh = new Discord.MessageEmbed()
        .setAuthor("❌ Error!")
        .setDescription("**Specify an ID to set up the verified role!!**")
        .setColor("RED")
      return message.channel.send(idyokmeh)
    }

    if(isNaN(kanalida)) {
      const nan = new Discord.MessageEmbed()
      .setAuthor("❌ Error!")
      .setDescription("**Role ID Can Only Be Numbers!**")
      .setColor("RED")
      return message.channel.send(nan)
    }

    const rolefetch = message.guild.roles.cache.get(kanalida)
    if(typeof(rolefetch) == "undefined") {
      const yok = new Discord.MessageEmbed()
      .setAuthor("❌ Error!")
      .setColor("RED")
      .setDescription("**No Such Role ID Found**")
      return message.channel.send(yok)
    }
    if(rolefetch.guild.id !== message.guild.id) {
      const busunucudadeil = new Discord.MessageEmbed()
      .setAuthor("❌ Error!")
      .setDescription("**The ID of the Role you specified could not be found or the role is above the bot's role.**")
      .setColor("RED")
      return message.channel.send(busunucudadeil)
      }

    db.set(`role_${message.guild.id}`, kanalida)

        const sucembed = new Discord.MessageEmbed()
          .setAuthor("✅ Successful!")
          .setDescription("**The specified Role will be awarded to verified users!**")
          .setColor("GREEN")
        message.channel.send(sucembed)
                }
    
            if (args[0] == "channel"  || args[0] == "kanal") {

                    if(message.guild == null) return
    let kanalid = args[1]

                
                    if (!message.member.hasPermission("ADMINISTRATOR")) {
      const yetkinyokmeh = new Discord.MessageEmbed()
        .setAuthor("❌ ERROR!")
        .setDescription("**You Must Have 'Administrator' Permission to Use This Command!**")
        .setColor("RED")
      return message.channel.send(yetkinyokmeh)
    }


    if (!kanalid) {
      const idyokmeh = new Discord.MessageEmbed()
        .setAuthor("❌ Error!")
        .setDescription("**To Set the Channel, You Must Specify the ID of That Channel!**")
        .setColor("RED")
      return message.channel.send(idyokmeh)
    }

    if(isNaN(kanalid)) {
      const nan = new Discord.MessageEmbed()
      .setAuthor("❌ Error!")
      .setDescription("**Channel ID Can Only Be Numbers!**")
      .setColor("RED")
      return message.channel.send(nan)
    }

    const channelfetch = client.channels.cache.get(kanalid)
    if(typeof(channelfetch) == "undefined") {
      const yok = new Discord.MessageEmbed()
      .setAuthor("❌ Error!")
      .setColor("RED")
      .setDescription("**No Such Channel ID Found**")
      return message.channel.send(yok)
    }
    if(channelfetch.guild.id !== message.guild.id) {
      const busunucudadeil = new Discord.MessageEmbed()
      .setAuthor("❌ Error!")
      .setDescription("**The Channel ID You Specified Could Not Be Found This Channel May Not Be Accessible Or This Channel Is Not Available On This Server**")
      .setColor("RED")
      return message.channel.send(busunucudadeil)
      }

    db.set(`channel_${message.guild.id}`, kanalid)

        const sucembed = new Discord.MessageEmbed()
          .setAuthor("✅ Successful!")
          .setDescription("**The channel is set.!**")
          .setColor("GREEN")
        message.channel.send(sucembed)

            }
                if (args[0] == "message"  || args[0] == "mesaj") {
                    
                                        if (!message.member.hasPermission("ADMINISTRATOR")) {
      const yetkinyokmeh = new Discord.MessageEmbed()
        .setAuthor("❌ ERROR!")
        .setDescription("**You Must Have 'Administrator' Permission to Use This Command!**")
        .setColor("RED")
      return message.channel.send(yetkinyokmeh)
    }
                    
const belirtilmemis = db.fetch(`channel_${message.guild.id}`)
   if (belirtilmemis == null) {
       
       const belirtilmemiskanak = new Discord.MessageEmbed()
       .setAuthor('❌ Error!')
       .setColor('RED')
       .setDescription('The channel to send the message to is not set!')
       
       
   }
                    
                    const belirtilmemisa = db.fetch(`role_${message.guild.id}`)
   if (belirtilmemisa == null) {
       
       const belirtilmemiskanalll = new Discord.MessageEmbed()
       .setAuthor('❌ Error!')
       .setColor('RED')
       .setDescription('The role that will be granted to users when authenticated is not set!')
       
       
   }

                    
                    let kanal = db.fetch(`channel_${message.guild.id}`)
                    
                    
                    const embed22 = new Discord.MessageEmbed()
          .setAuthor("✅ Successful!")
                    .setDescription(`

**The message has been sent to the channel.**


`)
                    message.channel.send(`${message.author}`, embed22)
                
                    const messageaa = new Discord.MessageEmbed()
                    .setTitle('🔒 Verification')
                    .setColor('BLUE')
                    .setDescription(`
**You need to complete the verification phase to be able to access the channels!**
Go to the verification channel and verify yourself!
.captcha get-code
.captcha verify code
`)
                    .setImage('https://cdn.discordapp.com/attachments/963171575270613082/963376746135187466/codeeee.png')
              const msg = await client.channels.cache.get(kanal).send(`Verification`, messageaa)

              }

            if (args[0] == "get-code"  || args[0] == "kodu-al") {

                const belirtilmemisaaa = db.fetch(`channel_${message.guild.id}`)
   if (belirtilmemisaaa == null) {
       
       const belirtilmemiskanak2 = new Discord.MessageEmbed()
       .setAuthor('❌ Error!')
       .setColor('RED')
       .setDescription('The channel to send the message to is not set!')
       
       
   }
                    
                    const belirtilmemisaa = db.fetch(`role_${message.guild.id}`)
   if (belirtilmemisaa == null) {
       
       const belirtilmemiskana = new Discord.MessageEmbed()
       .setAuthor('❌ Error!')
       .setColor('RED')
       .setDescription('The role that will be granted to users when authenticated is not set!')
       
       
   }
                
                                               const karaliste = userverifyed.fetch(`verfiyed_${message.author.id}.${message.guild.id}`)
      if (karaliste == 'Yes') {

            const kanalyok = new Discord.MessageEmbed()
          .setAuthor("Verification")
          .setColor("RED")
          .setDescription('**You are already verified on this server!**')
                .setImage('https://cdn.discordapp.com/attachments/963171575270613082/963376746135187466/codeeee.png')

        return message.channel.send(kanalyok)

      }

                
        const canvas = createCanvas(900, 250)
const ctx = canvas.getContext('2d')

function random(randomFlag, min, max) {
  let birharf = "",
    range = min,
    harfler = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min; // Any length
  }
  for (let i = 0; i < range; i++) {
    pos = Math.round(Math.random() * (harfler.length - 1));
    birharf += harfler[pos];
  }
  return birharf;
}

const hersey = random(false, 7) //burayı değiştirebilirsin

const bg = await loadImage('https://cdn.discordapp.com/attachments/963171575270613082/963376746135187466/codeeee.png')

ctx.drawImage(bg, 0, 0);
ctx.font = `100px "fontgirin"`
ctx.fillText(hersey, 200, 200)
                
        codes.push(`code_${message.author.id}`,hersey) 

                const attachment = new Discord.MessageAttachment(canvas.toBuffer()); 

                const codesendembed = new Discord.MessageEmbed()
                .setTitle('Verification')
                .setColor('GREEN')
                .setDescription(`
Welcome! Enter the code above and verify yourself!! ${message.author}

.captcha verify **code**

`)
                                    .attachFiles(attachment)

                message.channel.send(`${message.author}`, codesendembed)
                
            }
            if (args[0] == "verify"  || args[0] == "doğrulan") {
                let sebep = args.slice(1).join(" ")
                
if(sebep == codes.get(`code_${message.author.id}`)){
    
                const codesendembeda = new Discord.MessageEmbed()
                .setTitle('Successful!')
                .setColor('GREEN')
                                    .setImage('https://cdn.discordapp.com/attachments/963171575270613082/963376746135187466/codeeee.png')
                .setDescription(`
Thanks for verifying yourself!
Welcome to ${message.guild.name} server!

`)
                                let role = db.fetch(`role_${message.guild.id}`)
                let giverole = message.guild.roles.cache.find(r => r. id === role); 


                codes.deleteEach(`code_${message.author.id}`)
    
    userverifyed.set(`verfiyed_${message.author.id}.${message.guild.id}`, `Yes`)
    
    
    message.guild.members.cache.get(message.author.id).roles.add(role);
                message.channel.send(`${message.author}`, codesendembeda)
  
 

}
            }
};

exports.config = {
  name: "captcha",
  guildOnly: true,
  aliases: [],
};
