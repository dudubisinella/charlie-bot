const { Events } = require("discord.js");
const client = require("./client-ready");

const { CHANNEL_BOT_LOG_ID, VOICE_CHANNEL_ID } = process.env;

client.on(Events.MessageReactionAdd, async (reaction, user) => {
  if (user.bot) return;

  const { message, emoji } = reaction;

  if (
    message.embeds.length > 0 &&
    message.embeds[0].title === "Lista de comandos"
  ) {
    const logChannel = client.channels.cache.get(CHANNEL_BOT_LOG_ID);
    if (!logChannel) {
      console.error("Canal de log não encontrado!");
      return;
    }

    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });

    let action = "";
    let moveToPause = false;
    switch (emoji.name) {
      case "🚀":
        action = "Começou a trabalhar";
        break;
      case "❌":
        action = "Finalizou o trabalho";
        moveToPause = true;
        break;
      case "🍴":
        action = "Está comendo";
        moveToPause = true;
        break;
      case "⏸":
        action = "Está em pausa";
        moveToPause = true;
        break;
    }

    if (action) {
      logChannel.send(`[${user.username}] ${action} às: ${formattedTime}`);
    }

    if (moveToPause) {
      const guild = reaction.message.guild;
      const member = guild.members.cache.get(user.id);
      const pausaChannel = guild.channels.cache.get(VOICE_CHANNEL_ID);

      if (member && pausaChannel && member.voice.channel) {
        member.voice.setChannel(pausaChannel).catch(console.error);
      }
    }

    reaction.users.remove(user.id).catch(console.error);
  }
});
