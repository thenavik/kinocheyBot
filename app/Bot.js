const TelegramBot = require('node-telegram-bot-api')
const token = process.env.BOT_TOKEN
const StartHandler = require('./handlers/StartHandler')
const url =  process.env.APP_URL

class Bot {
    init (polling = false) {
        this.bot = new TelegramBot(token, { polling })
        this.bot.setWebHook(`${url}/bot${token}`)
        return this.bot
    }

    launch () {
        this.bot.onText(/\/start/, async msg => {
            await StartHandler.handle(msg, this.bot)
        })
    }
}

module.exports = new Bot()