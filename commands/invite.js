const { MessageEmbed } = require("discord.js");
const { Client, Collection } = require('discord.js');
const client = new Client();

module.exports = {
    data: {
        name: 'invite',
        description: 'Give invite',
    },
    async execute(interaction) {
        const embed1 = new MessageEmbed()
            .setColor("#A020F0")
            .setTitle("Invite Link")
            .setURL(
                "https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=0&scope=applications.commands%20bot"
            )
            .setFooter("Razor-DB");

        await interaction.reply({ embeds: [embed1] });
    },
};

// Create a collection to store commands
client.commands = new Collection();

// Register the command
client.commands.set(module.exports.data.name, module.exports);

// Export the client object
module.exports.client = client;