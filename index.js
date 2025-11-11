import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8568037431:AAEMllBtiNJtSt1vok-OsCVLrjh8pNo3DZA";
const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  const menuPhoto = "bmw-3.jpg";

  if (text == "/start") {
    bot.sendMessage(chatId, `xushkelipsiz, ${firstname}`, {
      reply_markup: {
        keyboard: [[{ text: "BMW M3 malumot lar" }]],
      },
    });
  } else if (text == "BMW M3 malumot lar") {
    const Kutishtext = await bot.sendMessage(chatId, "iltimos kuting....");

    setTimeout(() => {
        bot.deleteMessage(chatId, Kutishtext.message_id)
        bot.sendPhoto(chatId, menuPhoto, {
          caption:
            "BMW M3 - bu nemis avtomobil ishlab chiqaruvchisi BMW tomonidan 1986-yildan beri ishlab chiqarilayotgan yuqori samarali sport avtomobili. U turli avlodlarda turli tana shakllarida (sedan, kupe, kabriolet va universal) mavjud. Eng so'nggi avlodlarida (353) kVt ((480) ot kuchi) gacha bo'lgan (M) TwinPower Turbo inline-6 dvigateli va (0) dan (100) km/soat tezlikka (4.2) soniyada erishish mumkin. ",
        
    
        
        });
    }, 2000);
    
  }
});
console.log("ISHGA TUSHDI");
