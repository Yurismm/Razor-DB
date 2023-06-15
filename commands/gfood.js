const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const genshindb = require('genshin-db');
const { Client, Collection } = require('discord.js');
const client = new Client();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gfood')
        .setDescription('Shows you information about the food you input')
        .addStringOption(option =>
            option.setName('food')
            .setDescription('Name of the food')
            .setRequired(true)
        ),
    async execute(interaction) {
        const foodName = interaction.options.getString("food");
        const food = genshindb.foods(foodName);

        if (!food) {
            return interaction.reply("Sorry, I couldn't find information about that food.");
        }

        const embed = new MessageEmbed()
            .setColor("#A020F0")
            .setURL(food.url.fandom)
            .setTitle(`${food.name}, ${food.rarity}*`)
            .setDescription(`_${food.description}_\n**Effect:** ${food.effect}`)
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