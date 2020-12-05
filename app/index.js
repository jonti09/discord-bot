import { Client, MessageEmbed } from 'discord.js';
import dotenv from 'dotenv';
import { fetchInsult } from './api.js';
import { isCommand } from './utils.js';
dotenv.config();

const client = new Client();

client.on('ready', () => {
  console.log(`"${client.user.username}" is connected to discord`);
});

client.on('message', async (message) => {
  if (message.author.bot) return;

  const content = message.content;
  if (!message.channel.name && !isCommand(content)) {
    const insult = await fetchInsult();
    message.reply('That is not a command!');
    message.reply(new MessageEmbed().setTitle("Here's a bonus!").setDescription(insult));
  }
});

client.login(process.env.TOKEN);
