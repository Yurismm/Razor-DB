const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Collection } = require('discord.js');
const client = new Client();

module.exports = {
        data: new SlashCommandBuilder()
            .setName('help')
            .setDescription('List all of my commands or info about a specific command.')
            .addStringOption(option =>
                option.setName('command')
                .setDescription('Name of the command to get help for (optional)')
                .setRequired(false)),
        async execute(interaction) {
            const { commands } = interaction.client;

            const commandName = interaction.options.getString('command');
            const command = commands.get(commandName) || commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

            if (!commandName) {
                const embed = new MessageEmbed()
                    .setTitle('Here\'s a list of all my commands:')
                    .addField('**Commands:**', commands.map((cmd) => cmd.data.name).join(', '))
                    .addField('\u200B', 'For help on a specific command use `/help [command name]`');

                return interaction.reply({ embeds: [embed] });
            }

            if (!command) {
                return interaction.reply('That\'s not a valid command!');
            }

            const embed = new MessageEmbed()
                .setTitle(`Command: ${command.data.name}`)
                .addField('**Description:**', command.data.description || 'No description available')
                .addField('**Usage:**', `/${command.data.name} ${command.data.options ? command.data.options.map(option => `[${option.name}]`).join(' ') : ''}`)
            .addField('**Cooldown:**', `${command.data.cooldown || 3} second(s)`);

        if (command.data.aliases) {
            embed.addField('**Aliases:**', command.data.aliases.join(', '));
        }

        await interaction.reply({ embeds: [embed] });
    },
};

// Create a collection to store commands
client.commands = new Collection();

// Register the command
client.commands.set(module.exports.data.name, module.exports);

// Export the client object
module.exports.client = client;