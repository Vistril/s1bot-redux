//Minimalist as possible. The original goal.
const client = new (require('discord.js')).Client();
const token = process.env.TOKEN;



client.login(token);