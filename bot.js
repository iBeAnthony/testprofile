const botconfig = require("./botconfig.json");
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const as = require('array-sort');
const pretty = require("pretty-ms");
const ms = require("ms");
const jimp = require('jimp');
const Canvas = require('canvas');
const prefix = "#"
client.on("message", message => {
  if (message.content.startsWith(prefix + 'send')) {
    if(!message.author.id === "375652913286086657") return;
    var user = message.mentions.members.first();
    var args = message.content.split(" ").slice(1).join(" ");
//er.send(args);
  }});
client.on('message', message => {
    var args = message.content.toLowerCase().split(' ');
    var command = args[0];
    var wordsSay = message.content.split(' ').slice(1).join(' ');//Alpha Codes//iBeAnthonyD
    
    if(command == prefix + 'say') {//iBeAnthonyD
        var sayRole = message.guild.roles.find(r => r.name === 'say');
        if(!sayRole) return message.channel.send('I couldn\'t find `say` role!');
        if(!message.member.roles.has(sayRole.id)) return message.channel.send('You dont have `say` role to use this command!');
        if(!wordsSay) return message.channel.send(`**ex:** ${prefix}say Hello World!`);
        
        message.delete();
        let sayE = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(`**${wordsSay}**`)
        
        message.channel.send(sayE);
    }
});
client.on('guildCreate', guild => {
    const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle('Invite Bot')
.setURL('https://discordapp.com/oauth2/authorize?client_id=590981104266379283&permissions=8&scope=bot')
.setDescription(`Bot Joined Server
Server name: ${guild.name}
Server Owner: ${guild.owner}
Server id: ${guild.id} 
Server Count: ${guild.memberCount}`);
client.channels.get("591361100486934541").sendEmbed(embed)
});



client.on('guildDelete', guild => {
    const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle('Invite Bot')
.setURL('https://discordapp.com/oauth2/authorize?client_id=590981104266379283&permissions=8&scope=bot')
.setDescription(`Bot Left Server
Server name: ${guild.name}
Server owner: ${guild.owner} 
Server id: ${guild.id} 
Server Count: ${guild.memberCount}`);
client.channels.get("591361100486934541").sendEmbed(embed) // By InF,Texo#9874
});
//https//
const http = require('http');
var express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://short-rate.glitch.me/`);
}, 280000);
client.on('ready', () => {
	client.user.setActivity(`#help| I'm now under maintenance.`,{type: 'WATCHING'});
  client.user.setStatus("idle")
});
client.on('message', msg => { 
  const at_reply = ('<@' + msg.author.id + '>  '); 
  if (msg.author.bot) return; 
  if (msg.content === "#" ) {   
        const emoji = client.emojis.find(emoji => emoji.name === "BMC_loading");

      msg.channel.send(at_reply + `${emoji} عذرا ولكن البوت تحت الصيانة الان`);  
  };
}); 

client.on('message', message => {
            if (message.content==prefix + "help") {
     let embed = new Discord.RichEmbed()
     .setTitle ('البوت مازال تحت التطوير اي مشكلة تواجهك تواصل مع الدعم الفني | اي اقتراح عندك اتفضل سيرفر السبورت.')
.addField('#ban' , 'لحظر عضو')
.addField('#kick' , 'اطرد عضو')
.addField('#warn' , 'لاعطاء شخص تحذير')
.addField('#clear' , 'مسح الشات')
.addField('#credits ' , 'معرفة كم معك كريدت')
     .addField('#credit @mention <amount> ' , 'لتحويل كريدت لشخص')
.addField('#daily ' , 'لاستلام راتب يومي قدره 200 كريدت')
.addField('#profile ' , 'معلومات عن بروفايلك')
.addField('#user' , 'معلومات حسابك')
.addField('#title' , 'لوضع كلام تحت اسمك بالبروفايل')
.addField('#shop' , 'لدخول المتجر الخاص بالبوت')
.addField('#contact' , 'ارسال رسالة لصاحب البوت')
.addField('#members' , 'عدد اعضاء السيرفر')
     .addField('#say' , 'التكلم عن طريق البوت')
.addField('#server' , 'معلومات السيرفر')
.addField('#bot' , 'معلومات البوت')
.addField('#support' , 'لدخول سيرفر السبورت')



.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});
client.on('message', async message =>{
  if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "warn") {
		if (!message.channel.guild) return;
        var sayRole = message.guild.roles.find(r => r.name === 'warn');
        if(!sayRole) return message.channel.send('I couldn\'t find `warn` role!');
        if(!message.member.roles.has(sayRole.id)) return message.channel.send('You dont have `warn` role to use this command!');
		let user = message.mentions.users.first();
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Warned!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Warned!`, user.displayAvatarURL)
		.setDescription(`      
${user} تم اعطائك تحذير
${message.author.tag}  بواسطة
[ ${reason} ] : السبب
اتمنى ان لا يتكرر هذا الغلط مجددا
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
  });
client.on("message", message => {
              var args = message.content.substring(prefix.length).split("*");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**:x:عفوا ولكن هذا الامر للسيرفرات فقط**');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?انت لا تمتلك برمشن `MANAGE_MESSAGES` لاستخدام الامر**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تم مسح الشات``",
          color: 0x06DF00,
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });


client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** هذا الامر للسيرفرات فقط**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تمتلك برمشن` BAN_MEMBERS ` **");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**انا لا امتلك برمشن` BAN_MEMBERS ` **");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**العضو:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**بواسطة:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** هذا الامر للسيرفرات فقط**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تمتلك برمشن` KICK_MEMBERS `**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**انا لا امتلك برمشن` KICK_MEMBERS ` **");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**العضو:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**بواسطة:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
//support//
client.on('message', message => {
    if(message.content.startsWith(prefix+'support')) {
  const embed = new Discord.RichEmbed()
    .setTitle("Invite Link")
    .setDescription(`support server **[here](https://discord.gg/jK7pnUG)**`)
    .setColor('RANDOM');
    
        message.author.send(embed)
}
});
client.on('message', message => {
    if(message.content.startsWith(prefix+'shop')) {
  const embed = new Discord.RichEmbed()
    .setTitle("Invite Link")
    .setDescription(`Shop Server **[here](https://discord.gg/3EpTHat)**`)
    .setColor('RANDOM');
    
        message.author.send(embed)
}
});
client.on('message', message => {
    if(message.content.startsWith(prefix+'invite')) {
  const embed = new Discord.RichEmbed()
    .setTitle("Invite Link")
    .setDescription(`Bot Invite Link: https://discordapp.com/oauth2/authorize?client_id=590981104266379283&permissions=8&scope=bot `)
    .setColor('RANDOM');
    
        message.author.send(embed)
}
});
client.on('message', message => {
    if(message.content.startsWith(prefix+'inv')) {
  const embed = new Discord.RichEmbed()
    .setTitle("Invite Link")
    .setDescription(`Bot Invite Link: https://discordapp.com/oauth2/authorize?client_id=590981104266379283&permissions=8&scope=bot `)
    .setColor('RANDOM');
    
        message.author.send(embed)
}
});
 client.on('message', message => {
          

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });

﻿client.on("message", message => {
if(message.content.startsWith(prefix + `contact`)){
if(message.author.bot || message.channel.type == 'dm') return;
let args = message.content.split(" ").slice(1);
let msg = args.join(' ');
let dev = client.users.get("375652913286086657"); //Your id
if(!args) return message.reply("يجب كتابة الرسالة");
dev.send(`• | User: **${message.author.tag}**\n\n• | Message: **${msg}**`).then(() =>{
message.channel.send(`Your message has been successfully delivered to the bot owner`)
}).catch(console.error);
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('**AMBot Info** ')
            .addField('**My Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**RAM Usage**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('**Servers**', [client.guilds.size], true)
            .addField('**Channels**' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**' ,`[ ${client.users.size} ]` , true)
            .addField('**My Name**' , `[ ${client.user.tag} ]` , true)
            .addField('**My Prefix**' , `[ ${prefix} ]` , true)
            .addField('**My Language**' , `[ JS | JavaScript ]` , true)
      .addField('#support' , [`لدخول سيرفر السبورت`])
                  .addField('**Bot Version**' , `[ 4.1.0 ]` , true)
            .setFooter('==> Created By - ☆ | iBeAnthonyD#2226')
    })
}
});
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** server type**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ Members Number__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ Members Number who online__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ Text Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ voice Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ The Owner__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ Server ID__**',`**${msg.guild.id}**`,true)
      .addField('📅**__The date when the server created __**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
//members//
   client.on('message',function(message) {
            const online = client.emojis.find(emoji => emoji.name === "online");
                 const dnd = client.emojis.find(emoji => emoji.name === "dnd");
            const idle = client.emojis.find(emoji => emoji.name === "idle");
            const bot = client.emojis.find(emoji => emoji.name === "BMC_Bot");


  if (message.author.bot) return;
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info 
${online} online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
${dnd}  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
${idle}  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
${bot} bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });  
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Member");
   member.addRole (role);
  
})

client.login(process.env.BOT_TOKEN);
