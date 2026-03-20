import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'create',
    description: 'create a new short url',
  },
];

const rest = new REST({ version: '10' }).setToken(" ");

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1478301237253373992"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}