const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Gives you details on your server'),
    execute(interaction) {
        const embed = new MessageEmbed()
            .setColor("#A020F0")
            .setTitle("Server Details")
            .setDescription(`Name of this server: ${interaction.guild.name}\nThis server has: ${interaction.guild.memberCount} members.`)
            .setFooter("Razor-DB");

        interaction.reply({ embeds: [embed] });
    },
};