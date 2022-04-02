require('dotenv').config()
const express = require('express')

const Bot = require('./app/Bot')
const token = process.env.BOT_TOKEN
const PORT = process.env.PORT || 8200

const polling = process.env.APP_MODE === 'local'

const bot = Bot.init(polling)
const app = express()
app.use(express.json())

app.post(`/bot${token}`, (req, res) => {
    bot.processUpdate(req.body)
    res.sendStatus(200)
})

app.listen(PORT, () => {
    console.log(`APP app listening at http://localhost:${PORT}`)
})

Bot.launch()