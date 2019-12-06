//Minimalist as possible. The original goal.
const client = new (require('discord.js')).Client();
const { randomFace, randomUser } = new (require('./worker.js'))
const token = process.env.TOKEN;
const triggers = ['<@652373244539699200>', '<@!652373244539699200>', "@someone"];
client.on('a', m => {
    let first = m.content.split(' ')[0].toLowerCase();
    let second = m.content.substring(cmd.length).trim();
    if (triggers.includes(first)) {
        m.reply(`${randomFace(m)} ${randomUser(m)} ${second}`);
    }
})

client.login(token);