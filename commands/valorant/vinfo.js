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

        const query = args.join("  ");


        if (!args[0]) {
            message.channel.send("there was no input")


        } else {

            message.channel.send(query);

        }

    }
}