const { DiscordAPIError } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "invite",
    description: "Gives you details on your server",
    execute(message, args) {
        const embed1 = new Discord.MessageEmbed()
            .setColor("#A020F0")
            .setTitle("Invite Link")
            .setURL("https://discord.com/oauth2/authorize?client_id=889632085076230165&permissions=0&scope=applications.commands%20bot")
            .setFooter("Razor-DB")
        message.channel.send({ embeds: [embed1] })
    }
}