const { DiscordAPIError } = require("discord.js");
const Discord = require("discord.js");




module.exports = {
    name: "rolvegive",
    description: "gives role",
    execute(message, args) {

        let role = message.guild.roles.find(r => r.id === "901522952338677801");


        message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(role))
        const embed1 = new Discord.MessageEmbed()
            .setColor("#A020F0")
            .setTitle("cmd push")
            .setURL("check cmdline")
            .setFooter("Razor-DB")
        message.channel.send({ embeds: [embed1] })
    }
}