const EmbedBuilder = require("../util/EmbedBuilder")
const { Client, Message, MessageEmbed } = require("discord.js")
const delay = ms => new Promise(res => setTimeout(res, ms));

module.exports = {
    name: 'killproc',
    description: 'kills instance of bot / logs the bot out',
    category: "info",

    async execute(message, args, client) {
        const embed = new MessageEmbed()
            .setTitle("working...")
            .setDescription("killing...")
            .setColor("A020F0")
            .setTimestamp();
        await message.channel.send({ embeds: [embed] });



        await setTimeout(function() {
            const embed2 = new MessageEmbed()
                .setTitle("working...")
                .setDescription("killed process, check cmd line")
                .setColor("A020F0")
                .setTimestamp();
            message.channel.send({ embeds: [embed2] });

            client.destroy(function(error) {
                if (error) {
                    console.log('Problems logging out!');
                    console.log(error);
                    return;
                }
                console.log('Logged out successfully!');
            })
        }, 11000);

    }
}