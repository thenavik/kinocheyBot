const { text } = require('express')
const TelegramBot = require('node-telegram-bot-api')
const SearchHandler = require('./handlers/SearchHandler')
const token = process.env.BOT_TOKEN
const StartHandler = require('./handlers/StartHandler')
const url =  process.env.APP_URL

class Bot {
    init (polling = false) {
        this.bot = new TelegramBot(token, { polling })
        if (!polling) {
            this.bot.setWebHook(`${url}/bot${token}`)
        }
        return this.bot
    }

    launch () {
        this.bot.onText(/\/start/, async msg => {
            await StartHandler.handle(msg, this.bot)
        })
        this.bot.on('message', async msg => {
            const text = msg.text.trim()
            if (text.indexOf('/') !== -1) {
                return
            }
            await SearchHandler.handle(msg, this.bot)
        })
    }
}

module.exports = new Bot()