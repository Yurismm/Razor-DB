const Discord = require("discord.js");
const fs = require("fs");

const { brawlapi } = require("../../config.json")
    //        fs.readFile("../../legends.json", JSON.stringify(legends, null, 4), err => {
    //          if (err) return err;

legends = require("../../legends.json")

module.exports = {
    name: "blegend",
    decription: "Gives you infomation on a brawlhalla legend",
    execute(message, args) {

        const args4 = args.join(" ");

        const legends_ = legends[args4].legend_name_key

        const embed2 = new Discord.MessageEmbed()
            .setColor("#A020F0")
            .setTitle("Brawlhalla Legend Test")
            .setDescription(legends_)
            .setFooter("Razor-DB")

        message.channel.send({ embeds: [embed2] })



    }
}