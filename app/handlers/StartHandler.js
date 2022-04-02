
class StartHandler {
    async handle(msg, bot) {
        const chatId = msg.chat.id
        const opts = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'test',
                            url: 'https://film.repost.space'
                        }
                    ]
                ]
            }
        }

        return await bot.sendMessage(chatId, '', opts)
    }
}