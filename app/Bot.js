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
            console.log('dd', msg);
            await StartHandler.handle(msg, this.bot)
        })
        this.bot.on('message', msg => {
            this.bot.sendMessage(msg.chat.id, 'I am alive!');
        });
    }
}

module.exports = new Bot()