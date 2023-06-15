const genshindb = require('genshin-db');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const { Client, Collection } = require('discord.js');
const client = new Client();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gcharacter')
        .setDescription('Shows you information on a Genshin Character.')
        .addStringOption(option =>
            option.setName('character')
            .setDescription('Name of the character')
            .setRequired(true)
        ),
    async execute(interaction) {
        const characterName = interaction.options.getString("character");
        const character = genshindb.characters(characterName);

        if (!character) {
            return interaction.reply("Sorry, I couldn't find information about that character.");
        }

        const embed = new MessageEmbed()
            .setColor("#A020F0")
            .setImage(character.images.portrait)
            .setURL(character.url.fandom)
            .setTitle(`${character.name}, ${character.element}`)
            .setDescription(`${character.description}\nBirthday: ${character.birthday}\nConstellation: ${character.constellation}\nVoice Actor: ${character.cv.english}\nAttack at lvl 80: ${character.stats(80).attack}`)
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