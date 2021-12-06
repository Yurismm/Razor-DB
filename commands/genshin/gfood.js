const { DiscordAPIError } = require("discord.js");
const Discord = require("discord.js");
const genshindb = require('genshin-db');

module.exports = {
    name: "gfood",
    description: "test",
    execute(message, args) {
        const ginput = args.join(" ");

        const embed = new Discord.MessageEmbed()
            .setColor("#A020F0")
            .setURL(genshindb.foods(ginput).url.fandom)
            .setTitle(genshindb.foods(ginput).name + " , " + genshindb.foods(ginput).rarity + "*")
            .setDescription("_" + genshindb.foods(ginput).description + "_" + "\n **Effect:** " + genshindb.foods(ginput).effect)
            .setFooter("Razor-DB")

        message.channel.send({ embeds: [embed] });
    }
}


// wip