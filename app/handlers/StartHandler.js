
class StartHandler {
    async handle(msg, bot) {
        const chatId = msg.chat.id
        const options = {
            parse_mode: 'HTML'
        }

        return await bot.sendMessage(chatId, `Привет, <strong>${msg.from.username}</strong>. \nЧтобы найти интересующий фильм или сериал, просто отправьте его название.`, options)
    }
}

module.exports = new StartHandler()