const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "invite",
    description: "Give invite",
    async execute(interaction, args) {
        const embed1 = new MessageEmbed()
            .setColor("#A020F0")
            .setTitle("Invite Link")
            .setURL(
                "https://discord.com/oauth2/authorize?client_id=889632085076230165&permissions=0&scope=applications.commands%20bot"
            )
            .setFooter("Razor-DB");

        await interaction.reply({ embeds: [embed1] });
    },
};