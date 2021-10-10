const { DiscordAPIError } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor("#A020F0")
            .setDescription("pong")
            .setFooter("Razor-DB")

        message.channel.send({ embeds: [embed] });
    },
};