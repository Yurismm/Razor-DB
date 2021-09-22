const { SlashCommandBuilder } = require("@discordjs/builders");


module.exports = {
    data: new SlashCommandBuilder()
        .setName("osu")
        .setDescription("you can check your osu name (this is for argument checking for now)")
        .addStringOption(option =>
            option.setName("input")
            .setDescription("The input test")
            .setRequired(true))
};