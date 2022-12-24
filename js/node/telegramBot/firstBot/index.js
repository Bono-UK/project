const telegramBot = require("node-telegram-bot-api");
const token = "5952274038:AAFCNjd30p6PgyrkqBuNqywVJQRJ6fQetvQ"

const bot = new telegramBot(token, {polling:true});

const chats = {}
const gameOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
      {text:"1", callback_data:"1"}, 
      {text:"2", callback_data:"2"}, 
      {text:"3", callback_data:"3"}, 
      {text:"4", callback_data:"4"}
      ],[
      {text:"5", callback_data:"5"},
      {text:"6", callback_data:"6"},
      {text:"7", callback_data:"7"},
      {text:"8", callback_data:"8"}
      ],[
      {text:"9", callback_data:"7"},
      {text:"0", callback_data:"7"},
      ]
    ]
  })
}

const start = () => {

bot.on("message", async msg => {
  const text = msg.text;
  const chatId = msg.chat.id;
  
  if (text === "/info") {
   return bot.sendMessage(chatId, `you name ${msg.from.first_name}`)
  }
  if (text === "/game") {
    await bot.sendMessage(chatId, "сейчас я загадаю число от 0 до 9, а ты должен её угадать")
    const number = Math.floor(Math.random()*10)
    console.log(number);
    chats[chatId] = number
    return bot.sendMessage(chatId, "одгадай число", gameOptions)
  }


  return bot.sendMessage(chatId, "i dont know")

})
  bot.on("callback_query", msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id   
    if (data === chats[chatId]) {
      return bot.sendMessage(chatId, `ты одгадал число ${chats[chatId]}`)
    } else {
      return bot.sendMessage(chatId, `ты не одгадал число ${chats[chatId]}`)

    }
})

}

start()
