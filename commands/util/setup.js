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



        client.channels.cache.get(channel)

        message.guild.channels.create("announcements", {
            type: 'voice'
        })

        message.guild.channels.create("boosting-prices", {
            type: 'voice'
        })

        message.guild.channels.create("custom-requests", {
            type: 'voice'
        })

        message.guild.channels.create("streamer-boosting", {
            type: 'voice'
        })


        message.guild.channels.create("feedbacks", {
            type: 'voice'
        })


        message.guild.channels.create("completed-orders", {
            type: 'voice'
        })

        message.guild.channels.create("rules", {
            type: 'voice'
        })

        message.guild.channels.create("order-here", {
            type: 'voice'
        })

        const embed = new Discord.MessageEmbed()
            .setColor("#A020F0")
            // .setURL("")
            .setTitle("chambers hot asshole")
            .setDescription(":zany: idk if that works" + channel)
            .setFooter("Chamber-DB")
        message.channel.send({ embeds: [embed] });
    }
}