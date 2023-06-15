const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Collection } = require('discord.js');
const client = new Client();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cc')
        .setDescription('Creates specific voice channels'),
    async execute(interaction) {
        const guild = interaction.guild;

        await guild.channels.create('announcements', { type: 'GUILD_VOICE' });
        await guild.channels.create('boosting-prices', { type: 'GUILD_VOICE' });
        await guild.channels.create('custom-requests', { type: 'GUILD_VOICE' });
        await guild.channels.create('streamer-boosting', { type: 'GUILD_VOICE' });
        await guild.channels.create('feedbacks', { type: 'GUILD_VOICE' });
        await guild.channels.create('completed-orders', { type: 'GUILD_VOICE' });
        await guild.channels.create('rules', { type: 'GUILD_VOICE' });
        await guild.channels.create('order-here', { type: 'GUILD_VOICE' });

        const embed = new MessageEmbed()
            .setColor('#A020F0')
            .setTitle('Channels Created')
            .setDescription('Voice channels have been created successfully.')
            .setFooter('Chamber-DB');

        interaction.reply({ embeds: [embed] });
    },
};

// Create a collection to store commands
client.commands = new Collection();

// Register the command
client.commands.set(module.exports.data.name, module.exports);

// Export the client object
module.exports.client = client;