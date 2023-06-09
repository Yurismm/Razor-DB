const { MessageEmbed } = require("discord.js")
const embedBuilder = {
    infoEmbed: function infoEmbed() { return new MessageEmbed().setColor(0x1c88ed).setTimestamp(Date.now()) }
}

module.exports = embedBuilder