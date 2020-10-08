const Discord = require('discord.js');
const client = new Discord.Client();;
const fs = require("fs");
const moment = require('moment');
const prefix = "!"
const http = require('http');
var express = require('express');
const Canvas = require("canvas");
const jimp = require("jimp");
const pretty = require('pretty-ms')
const getRandom = require("get-random")
const app = express();
var embed  =  new  Discord.RichEmbed()

app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://hulking-okra.glitch.me/`);
}, 280000);

let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {titel: '!title',rep: 0,reps: 'NOT YET',dailytime:86400000,credits: 0,};
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on('message', message => {
 
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
      if(getvalueof.bot) return message.channel.send(`**✖️| ${message.content.split(' ')[1]} لم يتم العثور على**`); 
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
                         if (!profile[getvalueof.id]) profile[getvalueof.id] = {titel:'!title',rep: 0,reps: 'NOT YET',dailytime:86400000,credits: 0,};
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
      if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credits')) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   dailytime:86400000,
   credits: 0,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `$${profile[men.id].credits}` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `$${profile[message.author.id].credits}` + "`.**")
}
}
if(message.content.startsWith(prefix + "daily")) {
    if(profile[message.author.id].dailytime !== 86400000 && Date.now() - profile[message.author.id].dailytime !== 86400000) {
         message.channel.send(`**❎ |** You already **Claimed** the daily ammount of credits since \`${pretty(Date.now() - profile[message.author.id].dailytime)}\`/24 Hours.`);
     } else {
         let ammount = getRandom(1, 25);
         profile[message.author.id].dailytime = Date.now();
         profile[message.author.id].credits += ammount;
         fs.writeFileSync("./profile.json", JSON.stringify(profile, null, 4));
         message.channel.send(`**✅ |** \`${ammount}\`, Successfully **Claimed** Your daily ammount of credits!`);
     }
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + 'credit')) {
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**انت لا تمتلك هذا القدر من الكريدت**")
  if(isNaN(args[0]) || args[0] < 1) return message.channel.send(`:interrobang: **| ${message.author.username}, لقد حدت خطأ  **`);

				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            if(defineduser === defineduser.bot) return message.channel.send(`You can't transfer a credits to bots!`);
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 0;
  
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '0963' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '0963' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`**${message.author.username},Transfer Amount:** \`${args}\` 
**type these numbers to confirm:**  \n \`${x[x3]}\``).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => message.author.id === msg.author.id && msg.content === x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            message.delete()

         
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 0;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(` :atm: | Transfer Receipt \`\`\`You have received $${args[0]} from user ${message.author.username} ; (ID (${message.author.id})\`\`\``);



        })
        })
        
		




}

               } );
 client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!profile[message.author.id].titel) profile[message.author.id].titel = ""  
                  if(tit.length > 14) return  message.channel.send("too many letters!");
        if(!tit) {message.channel.send("**:large_orange_diamond: #title <something>**");
        } else {
            profile[message.author.id].titel = tit
            message.channel.send(`:white_check_mark: Done , Your title was changed to » ${profile[message.author.id].titel}`)
        }
        }
        fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })

///profile////
    client.on("message", message => {
  if (message.author.bot) return;
if (message.content.startsWith("!profile")) {
                               let getvalueof = message.mentions.users.first() || message.author
            let Image = Canvas.Image,
            canvas = new Canvas.createCanvas(300, 300),
            ctx = canvas.getContext('2d');
            fs.readFile("./powerx.png", function (err, Background) { //امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300); // حجم الصورة

})

                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        //ur name
                    ctx.font = 'bold 15px Comic Sans MS'; // حجم الخط و نوعه
                        ctx.fontSize = '50px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 141, 200) // احداثيات اسمك

                        //ur name
                    ctx.font = 'bold 15px Comic Sans MS'; // حجم الخط و نوعه
                        ctx.fontSize = '50px'; 
                        ctx.fillStyle = "#f1f1f1"; 
                        ctx.textAlign = "center"; 
                        ctx.fillText(`${getvalueof.username}`, 140, 201) // احداثيات اسمك

                        //credit
                        ctx.font = "bold 12px Arial" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص                        
                        ctx.fillText(`${profile[getvalueof.id].credits}`, 47, 175) // احداثيات المصارياحداثيات اللفل

                        //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].titel}`, 150, 237) // احداثيات النقاط

                        // REP
                        ctx.font = "bold 20px  Arial";
                        ctx.fontSize = "40px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`${profile[getvalueof.id].rep}`, 47,100)
                      
                        //AVATAR
                      
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;

ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(75, 100, 780, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                          ctx.drawImage(ava, 95, 52, 113, 114);
                      
message.channel.startTyping()
message.channel.sendFile(canvas.toBuffer())
message.channel.stopTyping()
})
})
}
});
client.on("ready", () => {
  console.log("Ready.")
})
 client.login(process.env.TOKEN)