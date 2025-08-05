const { Errors } = require('../../utils/functions');
const config = require('../../../config.json');

const { MessageEmbed } = require('discord.js-selfbot-v13');

const event = (client, message) => {
  try {
    if (message.author.id === '559681569325973505' && message.content === '!status') {
      return message.channel.send('> **Status:**\n・ *__ONLINE__*');
    }

    if (message.author.id === '1380336491859017819' && message.embeds && message.embeds[0]) {
      client.channels.cache.get('1363753126171115571').send({ embeds: message.embeds });
    }
  } catch (err) {
    return Errors(err, `Event ${__filename}`)
      .then(() => event(client))
      .catch((e) => message.channel.send(e));
  }
};

module.exports = event;