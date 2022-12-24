const telegramApi = require("node-telegram-bot-api")

const token = "5952274038:AAFCNjd30p6PgyrkqBuNqywVJQRJ6fQetvQ"

const bot = new telegramApi(token, {polling: true})

bot.on("massage", msg => {
  console.log(msg);
})
