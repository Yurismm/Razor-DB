const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection } = require('discord.js');
const client = new Client();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('command')
        .setDescription('Description of the command')
        .addStringOption(option =>
            option.setName('option')
            .setDescription('Description of the option')
            .setRequired(true)),
    async execute(interaction) {
        // Code to handle the command execution
        const optionValue = interaction.options.getString('option');
        // Rest of your command logic
    },
};

// Create a collection to store commands
client.commands = new Collection();

// Register the command
client.commands.set(module.exports.data.name, module.exports);

// Export the client object
module.exports.client = client;