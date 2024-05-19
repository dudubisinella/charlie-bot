const { Events } = require("discord.js");
<<<<<<< HEAD
const axios = require("axios");

const { OPENAI_API_KEY, CHAT_GPT_CHANNEL_ID, CHANNEL_BOT_ID } = process.env;

const client = require("./client-ready");

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;

  if (message.content === "!comandos" && message.channelId === CHANNEL_BOT_ID) {
=======
const client = require("./client-ready");

client.on(Events.MessageCreate, async (message) => {
  if (message.content === "!comandos") {
>>>>>>> f94f927e57cdbb4954ba9047a881d784f490df25
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
<<<<<<< HEAD

  if (message.channel.id === CHAT_GPT_CHANNEL_ID) {
    const userQuestion = message.content;
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userQuestion }],
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      const botResponse = response.data.choices[0].message.content;
      message.channel.send(botResponse);
    } catch (error) {
      console.error("Erro ao chamar a API da OpenAI:", error);
      message.channel.send(
        "Desculpe, ocorreu um erro ao tentar processar sua solicitação."
      );
    }
  }
=======
>>>>>>> f94f927e57cdbb4954ba9047a881d784f490df25
});
