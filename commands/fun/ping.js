const { MessageEmbed, ReplyMessageOptions } = require("discord.js");

module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, args) {
        const embed = new MessageEmbed()
            .setColor("#A020F0")
            .setDescription("pong")
            .setFooter("Razor-DB");

        const replyOptions = {
            embeds: [embed]
        };

        message.reply(replyOptions);
    },
};