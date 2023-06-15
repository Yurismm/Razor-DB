const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection } = require('discord.js');
const client = new Client();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('osu')
        .setDescription('Shows your osu stats'),
    async execute(interaction) {
        const osuname = interaction.options.getString('username');
        const embed = new MessageEmbed()
            .setColor('#A020F0')
            .setTitle('osu! Profile')
            .setImage(`https://lemmmy.pw/osusig/sig.php?colour=hexff66aa&uname=${osuname}&pp=1&countryrank&flagshadow&flagstroke&opaqueavatar&avatarrounding=5&onlineindicator=undefined&xpbar&xpbarhex&random`)
            .setFooter('Razor-DB');

        await interaction.reply({ embeds: [embed] });
    }
};

// Create a collection to store commands
client.commands = new Collection();

// Register the command
client.commands.set(module.exports.data.name, module.exports);

// Export the client object
module.exports.client = client;