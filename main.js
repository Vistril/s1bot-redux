//Minimalist as possible. The original goal.
const { Client } = require('discord.js');
const client = new Client();
const token = process.env.TOKEN;



client.login(token);