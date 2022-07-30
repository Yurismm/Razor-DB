const { MessageEmbed, Message } = require("discord.js");
const request = require('request');
const Discord = require("discord.js");
const { API, Regions, Locales, Queue } = require("node-valorant-api");
const { valapikey } = require("../../config.json")

const APIKey = valapikey

module.exports = {
    name: "vinfo",
    decription: "Collect messages this is test",
    category: "valorant",
    async execute(message, args, client) {

        const valorant = new API(Regions.EU, APIKey, Regions.EUROPE);

        valorant.ContentV1.getContent(Locales["en-US"]).then(content => {
            console.log(content.characters.map(char => { return char.name }));
        });



    }
}