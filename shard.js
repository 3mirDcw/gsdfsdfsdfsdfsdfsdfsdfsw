const Discord = require('discord.js');
const client = new Discord.Client()
const express = require('express');
const ayarlar = require('./ayarlar.json');
const captain = new Discord.ShardingManager('./bot.js', {
    totalShards: 2,
    token: (ayarlar.token)//sa kodır abler
});

captain.on('shardCreate', shard => {
  console.log(`${shard.id+1} IDli Başlatıldı ve Kullanıma Hazır.`)
    const webhook = new Discord.WebhookClient("815195160912461855","9YaeENHJOexWrC5Q7UxkCN3K-BXDYZmr7rJCfUCj2vEWCf7PSmO2YpohtOhCGR0Lm5Y6")
    webhook.send(`Shard **${shard.id+1}/${shard.id+1} [Bağlanılıyor]** :bekle: \nShowTeam Discord'a Bağlanıyor.`)
    setTimeout(() => {
  const webhook = new Discord.WebhookClient("815195160912461855","9YaeENHJOexWrC5Q7UxkCN3K-BXDYZmr7rJCfUCj2vEWCf7PSmO2YpohtOhCGR0Lm5Y6")
  webhook.send(`Shard **${shard.id+1}/${shard.id+1} [Bağlanıldı]** :tamam: \nShowTeam Discord'a Bağlandı ve Hazır.`)
  }, 3000)
});
// WebHook Oluşturup ID ve token gir
setTimeout(() => {
    captain.broadcastEval("process.exit()");
}, 8600000);
captain.spawn();