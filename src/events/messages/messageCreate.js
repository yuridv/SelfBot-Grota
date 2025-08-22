const { Errors } = require('../../utils/functions');
const config = require('../../../config.json');

const { WebhookClient, EmbedBuilder } = require('discord.js');

const event = (client, message) => {
  try {
    if (message.author.id === config.developer && message.content === '!status') {
      return message.channel.send('> **Status:**\n・ *__ONLINE__*');
    }

    if (message.author.id === config.bot_city && message.embeds && message.embeds[0]) {
      const webhook = new WebhookClient({ url: config.webhook_log_chest });

      webhook.send({
        embeds: message.embeds
      });
    }
  } catch (err) {
    return Errors(err, `Event ${__filename}`)
      .then(() => event(client))
      .catch((e) => message.channel.send(e));
  }
};

module.exports = event;