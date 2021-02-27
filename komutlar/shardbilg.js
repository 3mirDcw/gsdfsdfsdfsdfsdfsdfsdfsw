const Discord = require('discord.js')
const chalk = require('chalk')
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
require('moment-duration-format');
exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!!";


  if (message.author.id !== "680124536871845903")
  return message.channel.send(
    new Discord.MessageEmbed()
    .setTitle(`**Yetki Hatası**`)
    .setColor('#fa0606')
    .setThumbnail(message.author.avatarURL())
    .setDescription(`**•** \`${prefix}shard\` **kullanmak için,** \`Botun Sahibi\` **yetkisine sahip olman gerekiyor.**`)  
  
  ).then(a => a.delete({timeout: 10000}));

  const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
let shardinfo = {
        ping: await client.shard.fetchClientValues('ws.ping'),
        server_count: await client.shard.fetchClientValues('guilds.cache.size'),
        user_count: await client.shard.fetchClientValues('users.cache.size'),
        uptime: await client.shard.fetchClientValues("uptime"),
        emoji: await client.shard.fetchClientValues("emojis.cache.size")
  }
let i = message.guild.shardID
    let embed = new Discord.MessageEmbed()
    .setAuthor(`EtherZ Shard Bilgi`, message.author.avatarURL())
    .setFooter(`Bu sunucunun shardı: ${i+1}`)
    .setColor('BLUE')
    for(i=0;i<client.shard.count;i++) {
        embed.addField(`Shard: ${i+1} `, ` Sunucu **${shardinfo.server_count[i]}** \n  Kullanıcı **${shardinfo.user_count[i].toLocaleString()}** \n  Ping: **${Math.round(shardinfo.ping[i])}**ms \n  Emojiler:**${Math.round(shardinfo.emoji[i])}**  \n  Aktiflik Süresi: **${moment.duration(shardinfo.uptime[i]).format(`D [Gün] , H [Saat], m [Dakika], s [Saniye]`)}**`)
    }
    message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["shardbilgi","shr"],
  permLevel: 0,
  kategori: "bot",
};

exports.help = {
  name: 'shard',
  description: 'Botun davet linklerini gösterir.',
  usage: 'davet',

};