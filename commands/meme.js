const https = require('https');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Collection } = require('discord.js');
const client = new Client();

const url = 'https://www.reddit.com/r/dankmemes/hot/.json?limit=100';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Sends a meme (the subreddit used here is r/dankmemes)'),
    async execute(interaction) {
        https.get(url, (result) => {
            var body = '';
            result.on('data', (chunk) => {
                body += chunk;
            });

            result.on('end', () => {
                var response = JSON.parse(body);
                var index = response.data.children[Math.floor(Math.random() * 99) + 1].data;

                if (index.post_hint !== 'image') {
                    var text = index.selftext;
                    const textembed = new MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`);

                    return interaction.reply({ embeds: [textembed] });
                }

                var image = index.preview.images[0].source.url.replace('&amp;', '&');
                var title = index.title;
                var link = 'https://reddit.com' + index.permalink;
                var subRedditName = index.subreddit_name_prefixed;

                const imageembed = new MessageEmbed()
                    .setTitle(subRedditName)
                    .setImage(image)
                    .setColor(9384170)
                    .setDescription(`[${title}](${link})`)
                    .setURL(`https://reddit.com/${subRedditName}`);

                interaction.reply({ embeds: [imageembed] });
            }).on('error', function(e) {
                console.log('Got an error: ', e);
            });
        });
    },
};

// Create a collection to store commands
client.commands = new Collection();

// Register the command
client.commands.set(module.exports.data.name, module.exports);

// Export the client object
module.exports.client = client;