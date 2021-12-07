const genshindb = require('genshin-db');
const { DiscordAPIError } = require("discord.js");
const Discord = require("discord.js");
const fs = require('fs');

module.exports = {
    name: "gweapon",
    description: "Shows you infomation relating to the weapon you have inputted.",
    execute(message, args) {
        const ginput = args.join(" ");

        const embed = new Discord.MessageEmbed()
            .setColor("#A020F0")
            .setImage(genshindb.weapons(ginput).images.icon)
            .setURL(genshindb.weapons(ginput).url.fandom)
            .setTitle(genshindb.weapons(ginput).name + " , " + genshindb.weapons(ginput).rarity + "*")
            .setDescription(genshindb.weapons(ginput).description + "\n Type: " + genshindb.weapons(ginput).weapontype + "\n Substat: " + genshindb.weapons(ginput).substat + "\n Base Attack: " + genshindb.weapons(ginput).baseatk + "\n Effect: " + genshindb.weapons(ginput).effect)
            .setFooter("Razor-DB")

        message.channel.send({ embeds: [embed] });
    }
}