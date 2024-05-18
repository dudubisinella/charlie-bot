const { Events } = require("discord.js");
const client = require("./client-ready");

client.on(Events.MessageCreate, async (message) => {
  if (message.content === "!comandos") {
    const embed = {
      title: "Lista de comandos",
      description: `
            Reaja com 🚀 quando for iniciar o trabalho
            Reaja com ❌ quando for finalizar o trabalho
            Reaja com 🍴 quando for comer algo
            Reaja com ⏸ em outros casos
          `,
    };

    message.channel
      .send({ embeds: [embed] })
      .then((sentMessage) => {
        sentMessage.react("🚀");
        sentMessage.react("❌");
        sentMessage.react("🍴");
        sentMessage.react("⏸");
      })
      .catch(console.error);
  }
});
