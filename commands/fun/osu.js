const Discord = require("discord.js");

module.exports = {
    name: "osu",
    description: "Shows your osu stats",
    execute(message, args) {
        const osuname = args.join(" ");
        const embed = new Discord.MessageEmbed()
            .setColor("#A020F0")
            .setTitle("osu! Profile")
            .setImage("https://lemmmy.pw/osusig/sig.php?colour=hexff66aa&uname=" + osuname + "&pp=1&countryrank&flagshadow&flagstroke&opaqueavatar&avatarrounding=5&onlineindicator=undefined&xpbar&xpbarhex&random")
            .setFooter("Razor-DB")

        message.channel.send({ embeds: [embed] });
    }
}