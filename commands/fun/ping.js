const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

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