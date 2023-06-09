const { DiscordAPIError } = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js")
const Discord = require("discord.js");
const genshindb = require('genshin-db');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"], partials: ["MESSAGE", "CHANNEL", "REACTION", "USER"] });

module.exports = {
    name: "cc",
    description: "Allows you to change the name of the channel youre in",
    execute(message, args) {
        const channel = args.join(" ");

        client.channels.get(channel)

        message.guild.channels.create(channel, {
            type: 'voice'
        })

        const embed = new Discord.MessageEmbed()
            .setColor("#A020F0")
            // .setURL("")
            .setTitle("Created channel")
            .setDescription("Channel created:" + channel)
            .setFooter("Chamber-DB")
        message.channel.send({ embeds: [embed] });
    }
}