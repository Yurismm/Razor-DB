const { DiscordAPIError } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "server",
    description: "Gives you details on your server",
    execute(message, args) {
        const embed1 = new Discord.MessageEmbed()
            .setColor("#A020F0")
            .setTitle("Server Details")
            .setDescription("Name of this server: " + message.guild.name + "\n This server has: " + message.guild.memberCount + " members.")
            .setFooter("Razor-DB")

        message.channel.send({ embeds: [embed1] })
    }
}