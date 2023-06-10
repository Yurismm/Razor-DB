const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "rolvegive",
    description: "Gives role",
    async execute(interaction) {
        const role = interaction.guild.roles.cache.get("901522952338677801");

        interaction.guild.members.cache
            .filter((member) => !member.user.bot)
            .forEach((member) => member.roles.add(role));

        const embed = new MessageEmbed()
            .setColor("#A020F0")
            .setTitle("cmd push")
            .setURL("check cmdline")
            .setFooter("Razor-DB");

        await interaction.reply({ embeds: [embed] });
    },
};