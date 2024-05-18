const { Client, Events, GatewayIntentBits, Collection } = require("discord.js");

const { DISCORD_TOKEN, CHANNEL_BOT_ID } = process.env;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

client.commands = new Collection();

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);

  const channelId = CHANNEL_BOT_ID;
  const channel = client.channels.cache.get(channelId);

  if (channel) {
    const embed = {
      title: "Lista de comandos",
      description: `
        Reaja com 🚀 quando for iniciar o trabalho
        Reaja com ❌ quando for finalizar o trabalho
        Reaja com 🍴 quando for comer algo
        Reaja com ⏸ em outros casos
      `,
    };

    channel
      .send({ embeds: [embed] })
      .then((message) => {
        message.react("🚀");
        message.react("❌");
        message.react("🍴");
        message.react("⏸");
      })
      .catch(console.error);
  } else {
    console.error("Canal não encontrado!");
  }
});

client.login(DISCORD_TOKEN);

module.exports = client;
