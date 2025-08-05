require('dotenv-safe').config();

const { Client } = require('discord.js-selfbot-v13');

const { base, colors } = require('./src/utils/bases');
const { Files } = require('./src/utils/functions');

console.log(colors.YELLOW + '[Discord]=> Starting...' + colors.RESET);

base.client = new Client();

const Events = Files('./src/events/', { removeDir: 1 });
for (const e in Events) base.client.on(e, Events[e].bind(null, base.client));

base.client.login(process.env.BOT_TOKEN)
  .catch((err) => console.log(`${colors.RED}[Discord Error]=> ${colors.RESET}`, err));