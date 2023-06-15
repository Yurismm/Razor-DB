const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Collection } = require('discord.js');
const client = new Client();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping!'),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor("#A020F0")
            .setDescription("pong")
            .setFooter("Razor-DB");

        await interaction.reply({ embeds: [embed] });
    },
};

// Create a collection to store commands
client.commands = new Collection();

// Register the command
client.commands.set(module.exports.data.name, module.exports);

// Export the client object
module.exports.client = client;