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

        fetch('https://api.henrikdev.xyz/valorant/v1/mmr/eu/cherie/0004')
            .then(function(response) {
                switch (response.status) {
                    // status "OK"
                    case 200:
                        return response.text();
                        // status "Not Found"
                    case 404:
                        throw response;
                }
            })
            .then(function(template) {
                console.log(template);
            })
            .catch(function(response) {
                // "Not Found"
                console.log(response.statusText);
            });
    }
}