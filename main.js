const client = new (require('discord.js')).Client();
const token = require('fs').readFileSync('./token.txt').toString();
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
    console.log(m.content);
    let first = m.content.split(' ')[0].toLowerCase();
    let second = m.content.slice(first.length).trim();
    let a = 0, b = 4;
    let formatted = m.content.replace(/@someone/g, match => a++ < b ? `${randomFace} ${randomUser()} ${second}` : match);
    m.reply(formatted);
    if (first == 's1-help') {
        m.reply(':warning: Hello! The bot is still under some construction, so the help command is mostly empty for now!\nCurrent Commands: `@someone`, `s1-ping`');
    } else if (first == 's1-ping') {
        m.channel.send('Response time to Discord: ' + Math.round(client.ping) + 'ms');
    }
})

client.login(token);
