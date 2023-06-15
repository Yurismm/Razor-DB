const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Collection } = require('discord.js');
const client = new Client();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coinflip')
        .setDescription('Flips a coin to get either "Heads" or "Tails"'),
    execute(interaction) {
        function coinflipfun() {
            const rand = ["Heads", "Tails"];
            return rand[Math.floor(Math.random() * rand.length)];
        }

        const embed = new MessageEmbed()
            .setColor('#A020F0')
            .setTitle('Coin Flip')
            .setDescription(coinflipfun())
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