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
        keyboard: [[{ text: "BMW M3 malumot lar" }]
        [{text:"BMW M4 MALUMOTLARI "}]
    ],
        
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
    
  } else if (text == "BMW M4 MALUMOTLARI") {
        const Kutishtext = await bot.sendMessage(chatId, "iltimos kuting....");
        setTimeout(() => {
        bot.deleteMessage(chatId, Kutishtext.message_id)
        bot.sendPhoto(chatId, menuPhoto, {
          caption:
            "    BMW M4 – bu BMW M seriyasiga mansub yuqori unumli sport mashinasi bo‘lib, u turbodvigatel, kuchli dinamikalar va zamonaviy texnologiyalar bilan jihozlangan. BMW M4 Competition Coupé'ning quvvati \(510\) ot kuchi, aylanish momentini esa \(650\) Nm ga teng. Uning tezlikka erishish vaqtlarida farq bor; ba'zi modellar \(0\) dan \(100\) km/soat tezlikka \(3.8\) soniyada erishsa, boshqalari \(4.3\) soniyagacha vaqt sarflaydi. Maksimal tezlik \(250\) km/soat dan \(305\) km/soat gacha o‘zgarishi mumkin. BMW M4 xususiyatlari Dvigatel: BMW TwinPower TurboQuvvat: \(510\) ot kuchi (M4 Competition Coupé uchun)Aylanish momenti: \(650\) Nm (M4 Competition Coupé uchun)Transmissiya: \(8\)-tezkur M Steptronic avtomat uzatmalar qutisiQo‘shimcha texnologiyalar: M xDrive (ixtiyoriy), M aktiv differensialTezlanish (0–100 km/soat): \(3.84.3\) soniya (variantga qarab)Maksimal tezlik: \(250\) km/soat dan \(305\) km/soat gacha (variantga qarab)Tarixi: 2013-yilda taqdim etilgan va «BMW M3» seriyasining o‘rnini bosgan",
        
    
        
        });
    }, 2000);

  }
});
console.log("ISHGA TUSHDI");
