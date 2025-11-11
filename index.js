import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8568037431:AAEMllBtiNJtSt1vok-OsCVLrjh8pNo3DZA";
const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;

if (text == "/start") {
    bot.sendMessage(chatId, `xushkelipsiz, ${firstname}`)
    
}

});
console.log("ISHGA TUSHDI");
