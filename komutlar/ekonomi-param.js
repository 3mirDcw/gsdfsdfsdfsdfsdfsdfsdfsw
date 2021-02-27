const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
   let u = message.mentions.users.first() || message.author;
  let s = message.guild.id

    let balance = await db.fetch(`paracık_${u.id+s}`);

  let altin = await db.fetch(`altıncıklar_${u.id+s}`);
  let altinim;
  if (altin == null) altinim = '0'
  else altinim = ''+ altin +''

let elmas = await db.fetch(`elmascıklar_${u.id+s}`);
let maaş = await db.fetch(`meslek_${u.id+s}`);
let meslekA = await db.fetch(`meslekA_${u.id+s}`);
let pref = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

  const DarkCode = new Discord.RichEmbed()

  .addField(':gem: Elmasın:', `${elmas === null ? "0" : `${elmas}`}`, true)
  .addField(`${client.emojis.get(`${client.emojiler.gold}`)} Altının:`, altinim, true)
  .addField(':dollar: Paran:', `${balance === null ? "0" : `${balance} TL`}`, true)
  .addField(`Meslek`, `Çalıştığı meslek: **${meslekA === null  ? "Bir meslekte çalışmıyorsunuz" : `${meslekA}`}**\nMaaş: **${maaş === null  ? "0" : `${maaş}`}** `)
  
  .setFooter(`Para ve meslek sahibi: ${u.tag} Komutu kullanan: ${message.author.tag}`)
  .setColor('RANDOM')

  message.channel.send(DarkCode)

  const DarkCode = new Discord.RichEmbed()
  .setDescription(`Aldığın eşyaları görmek istersen ${pref}çanta yazarak görebilirsin.`)
  .setColor('RANDOM')
  message.channel.send(DarkCode)
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['param', 'paracıklarım', 'altınlarım', 'altınım', 'altıncıklarım', 'elmaslarım', 'elmasım', 'mesleğim', 'maaşım', 'işim', 'meslekim'],
  permLevel: 0,
  kategori: "profil"
};

exports.help = {
  name: 'paralarım',
  description: 'Olan paranızı, altınlarınızı ve elmaslarınızı gösterir',
  usage: 'paralarım'
};