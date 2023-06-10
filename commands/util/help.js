const { MessageEmbed } = require('discord.js');

const { prefix } = require('../../config.json');

module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    options: [{
        name: 'command',
        type: 'STRING',
        description: 'Name of the command to get help for (optional)',
        required: false,
    }, ],
    async execute(interaction) {
        const { commands } = interaction.client;

        const commandName = interaction.options.getString('command');
        const command = commands.get(commandName) || commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

        if (!commandName) {
            const embed = new MessageEmbed()
                .setTitle('Here\'s a list of all my commands:')
                .addField('**Commands:**', commands.map((cmd) => cmd.name).join(', '))
                .addField('\u200B', `For help on a specific command use \`/help [command name]\``);

            return interaction.reply({ embeds: [embed] });
        }

        if (!command) {
            return interaction.reply('That\'s not a valid command!');
        }

        const embed = new MessageEmbed()
            .setTitle(`Command: ${command.name}`)
            .addField('**Description:**', command.description || 'No description available')
            .addField('**Usage:**', `${prefix}${command.name} ${command.usage || ''}`)
            .addField('**Cooldown:**', `${command.cooldown || 3} second(s)`);

        if (command.aliases) {
            embed.addField('**Aliases:**', command.aliases.join(', '));
        }

        await interaction.reply({ embeds: [embed] });
    },
};