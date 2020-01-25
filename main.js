const client = new (require('discord.js')).Client();
const token = require('fs').readFileSync('./token.txt').toString().replace(/\n/g, '');
const triggers = ['<@652373244539699200>', '<@!652373244539699200>', "@someone"];
const randomUser = (i) => {
    let mem = i.guild.members.map(m => m.user.nickname || m.user.username)
    return "***(" + mem[~~(Math.random() * mem.length)] + ")***"
}
const randomFace = () => {
    let faces = ['( ͡° ͜ʖ ͡°)', `̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿`, `༼ つ ◕_◕ ༽つ`, `(づ｡◕‿‿◕｡)づ`, `(ಥ﹏ಥ)`, `(ノಠ益ಠ)ノ彡┻━┻`, `¯\\_(ツ)_/¯`];
    return "**" + faces[~~(Math.random() * faces.length)] + "**"
}
client.on('ready', () => {
    client.user.setActivity('with @someone! | ' + client.guilds.size + ' guilds.');
})
client.on('message', m => {
    if (m.author.bot) return;
    console.log(m.content);
    let first = m.content.split(' ')[0].toLowerCase();
    let second = m.content.slice(first.length).trim();
    let a = 0, b = 9;
    let formatted = m.content.includes("@someone") ? m.author + ', ' + m.content.replace(/@someone/g, match => a++ < b ? `${randomFace()} ${randomUser(m)}` : match) : "";  
    m.channel.send(formatted)
        .then(() => {
            console.log(m.author + ' used command');
        })
        .catch(() => {});
   if (first == "s1-help") {
     m.reply("The bot is under construction for now, so the only commands are @someone and s1-ping!");
   } else if (first == "s1-ping") {
     m.reply("Bot response to Discord " + ~~client.ping);
   }
})

client.login(token);
