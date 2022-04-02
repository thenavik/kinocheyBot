
class SearchHandler {
    async handle(msg, bot) {
        const chatId = msg.chat.id
        const opts = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Бэтмен 2024',
                            url: 'https://film.repost.space'
                        },
                        {
                            text: 'Бэтмен 2024',
                            url: 'https://film.repost.space'
                        },
                        {
                            text: 'Бэтмен 2024',
                            url: 'https://film.repost.space'
                        },
                        {
                            text: 'Бэтмен 2024',
                            url: 'https://film.repost.space'
                        }
                    ]
                ]
            }
        }

        return await bot.sendMessage(chatId, 'Результаты поиска: ', opts)
    }
}

module.exports = new SearchHandler()