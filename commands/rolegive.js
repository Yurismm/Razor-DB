const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection } = require('discord.js');
const client = new Client();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rolvegive')
        .setDescription('Gives role'),
    async execute(interaction) {
        const role = interaction.guild.roles.cache.get('901522952338677801');

        interaction.guild.members.cache
            .filter((member) => !member.user.bot)
            .forEach((member) => member.roles.add(role));

        const embed = new MessageEmbed()
            .setColor('#A020F0')
            .setTitle('cmd push')
            .setURL('check cmdline')
            .setFooter('Razor-DB');

        await interaction.reply({ embeds: [embed] });
    },
};

// Create a collection to store commands
client.commands = new Collection();

// Register the command
client.commands.set(module.exports.data.name, module.exports);

// Export the client object
module.exports.client = client;