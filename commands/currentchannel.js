const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Collection } = require('discord.js');
const client = new Client();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cc')
        .setDescription("Allows you to change the name of the channel you're in")
        .addStringOption(option =>
            option.setName('channel')
            .setDescription('New channel name')
            .setRequired(true)
        ),
    async execute(interaction) {
        const channelName = interaction.options.getString('channel');

        await interaction.guild.channels.create(channelName, {
            type: 'GUILD_VOICE',
            parent: interaction.channel.parentId,
            position: interaction.channel.position,
            permissionOverwrites: interaction.channel.permissionOverwrites
        });

        const embed = new MessageEmbed()
            .setColor('#A020F0')
            .setTitle('Channel Created')
            .setDescription(`Channel created: ${channelName}`)
            .setFooter('Chamber-DB');

        await interaction.reply({ embeds: [embed] });
    },
};