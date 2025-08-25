const { Errors } = require('../../utils/functions');
const config = require('../../../config.json');

const { WebhookClient, EmbedBuilder } = require('discord.js');

const event = async(client, message) => {
  try {
    if (message.author.id === config.developer && message.content === '!status') {
      return message.channel.send('> **Status:**\n・ *__ONLINE__*');
    }

    if ((message.channel.id === config.channel_logs_leader || message.channel.id === config.channel_logs_member) && message.embeds && message.embeds[0]) {
      const webhook = new WebhookClient({ url: config.webhook_log_chest });

      await webhook.send({
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