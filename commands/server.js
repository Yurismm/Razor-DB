const { SlashCommandBuilder } = require("@discordjs/builders");
const { execute } = require("./ping");


module.exports = {
    data: new SlashCommandBuilder()
        .setName("server")
        .setDescription("Replies with your server infomation"),
    async execute(interaction) {
        await interaction.reply("The name of this server is:   " + interaction.guild.name + "\n and there is a grand total of: " + interaction.guild.memberCount + " users in this server.")
    }
}