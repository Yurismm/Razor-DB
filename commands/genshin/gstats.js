const genshindb = require('genshin-db');
const { DiscordAPIError } = require("discord.js");
const Discord = require("discord.js");
const fs = require('fs');

module.exports = {
    name: "gcharacter",
    description: "Shows you infomation on a Genshin Character.",
    execute(message, args) {
        const ginput = args.join(" ");

        const embed = new Discord.MessageEmbed()
            .setColor("#A020F0")
            .setImage(genshindb.characters(ginput).images.portrait)
            .setURL(genshindb.characters(ginput).url.fandom)
            .setTitle(genshindb.characters(ginput).name + " , " + genshindb.characters(ginput).element)
            .setDescription(genshindb.characters(ginput).description + "\n Birthday: " + genshindb.characters(ginput).birthday + "\n Constellation: " + genshindb.characters(ginput).constellation + "\n Voice Actor: " + genshindb.characters(ginput).cv.english + "\n Attack at lvl 80: " + genshindb.characters(ginput).stats(80).attack)
            .setFooter("Razor-DB")

        message.channel.send({ embeds: [embed] });
    }
}