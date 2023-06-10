const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "killproc",
    description: "Kills instance of bot / logs the bot out",
    async execute(interaction, args, client) {
        const embed1 = new MessageEmbed()
            .setTitle("Working...")
            .setDescription("Killing...")
            .setColor("#A020F0")
            .setTimestamp();
        await interaction.reply({ embeds: [embed1] });

        await delay(11000);

        const embed2 = new MessageEmbed()
            .setTitle("Working...")
            .setDescription("Killed process, check cmd line")
            .setColor("#A020F0")
            .setTimestamp();
        await interaction.editReply({ embeds: [embed2] });

        client.destroy(function(error) {
            if (error) {
                console.log("Problems logging out!");
                console.log(error);
                return;
            }
            console.log("Logged out successfully!");
        });
    },
};