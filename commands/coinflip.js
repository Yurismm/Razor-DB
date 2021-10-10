const { DiscordAPIError } = require("discord.js");
const Discord = require("discord.js");
const fs = require('fs');

module.exports = {
    name: 'coinflip',
    description: 'cf',
    execute(message, args) {
        function coinflipfun() {
            var rand = ["Heads", "Tails"];
            return rand[Math.floor(Math.random() * rand.length)];
        }
        message.channel.send(coinflipfun())
    },
};