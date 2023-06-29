const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('osu')
    .setDescription('Shows your osu stats')
    .addStringOption(option =>
      option.setName('username')
        .setDescription('Your osu! username')
        .setRequired(true)
    ),
  async execute(interaction) {
    const osuname = interaction.options.getString('username');
    const embed = new MessageEmbed()
      .setColor("#A020F0")
      .setTitle("osu! Profile")
      .setImage(`https://lemmmy.pw/osusig/sig.php?colour=hexff66aa&uname=${osuname}&pp=1&countryrank&flagshadow&flagstroke&opaqueavatar&avatarrounding=5&onlineindicator=undefined&xpbar&xpbarhex&random`)
      .setFooter("Razor-DB");

    await interaction.reply({ embeds: [embed] });
  },
};