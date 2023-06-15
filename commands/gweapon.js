const genshindb = require('genshin-db');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const { Client, Collection } = require('discord.js');
const client = new Client();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gweapon')
        .setDescription('Shows you information relating to the weapon you have inputted.')
        .addStringOption(option =>
            option.setName('weapon')
            .setDescription('Name of the weapon')
            .setRequired(true)
        ),
    async execute(interaction) {
        const weaponName = interaction.options.getString("weapon");
        const weapon = genshindb.weapons(weaponName);

        if (!weapon) {
            return interaction.reply("Sorry, I couldn't find information about that weapon.");
        }

        const embed = new MessageEmbed()
            .setColor("#A020F0")
            .setImage(weapon.images.icon)
            .setURL(weapon.url.fandom)
            .setTitle(`${weapon.name}, ${weapon.rarity}*`)
            .setDescription(`${weapon.description}\nType: ${weapon.weapontype}\nSubstat: ${weapon.substat}\nBase Attack: ${weapon.baseatk}\nEffect: ${weapon.effect}`)
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