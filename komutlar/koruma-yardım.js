const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('709489466913325168') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:load:797015222316564510> **ShowTeam Bot Koruma Menüsüne Hoşgeldiniz** <a:load:797015222316564510>`)
        .setDescription(`

  **» ${prefix}kanal-koruma #kanal** <a:1226_discord_verified:802635579958493294> Sunucuda Açılan veya Kapatılan Kanalı Otomatik Kapatır Veya Açar.
  **» ${prefix}kanal-koruma-sıfırla** <a:1226_discord_verified:802635579958493294> Ayarlanan Kanal Koruma Sistemini Sıfırlar.
  **» ${prefix}rol-koruma #kanal ** <a:1226_discord_verified:802635579958493294> Sunucuda Açılan veya Kapatılan Rolü Otomatık Kapatır Veya Açar.
  **» ${prefix}rol-koruma-sıfırla ** <a:1226_discord_verified:802635579958493294> Ayarlanan Rol Koruma Sistemini Sıfırlar.
  **» ${prefix}spam ** <a:1226_discord_verified:802635579958493294> Spam engel açar.
  **» ${prefix}spamkapat ** <a:1226_discord_verified:802635579958493294> Spam engel kapatır.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)

        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['koruma-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'koruma-yardım',
  description: '!davet-sistemi Menüsü',
  usage: 'kayıt-sistemi'
};