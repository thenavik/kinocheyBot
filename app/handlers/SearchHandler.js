const FindDB = require("../db/FIndDB");

class SearchHandler {
  async handle(msg, bot) {
    const chatId = msg.chat.id;
    const result = await FindDB.search(msg.text);
    if (!result.length) {
      return await bot.sendMessage(
        chatId,
        "По вашему запросу ничего не найдено."
      );
    }

    const buttons = [];
    result?.forEach((film) => {
      buttons.push([
        {
          text: `${film.name_russian} : ${film.year}`,
          url: `https://film.repost.space/film/${film.kinopoisk_id}`,
        },
      ]);
    });

    const opts = {
      reply_markup: {
        inline_keyboard: [...buttons],
      },
    };

    return await bot.sendMessage(chatId, "Результаты поиска: ", opts);
  }
}

module.exports = new SearchHandler();
