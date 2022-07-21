const { MessageEmbed, Message } = require("discord.js");
const request = require('request');
const Discord = require("discord.js");


module.exports = {
    name: "vinfo",
    decription: "Collect messages this is test",
    category: "valorant",
    async execute(message, args, client) {

        request('https://api.henrikdev.xyz/valorant/v1/account/cherie/0004', function(error, repsonse, body) {
            const status = body["status"]
            console.log(status)

        });

        const filter = m => (m.author.id != client.user.id);



        // https://api.henrikdev.xyz/valorant/v1/account/cherie/0004

    }
}