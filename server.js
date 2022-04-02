require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Bot = require("./app/Bot");
const token = process.env.BOT_TOKEN;
const PORT = process.env.PORT || 8200;

const polling = process.env.APP_MODE === "local";

const bot = Bot.init(polling);
const app = express();
app.use(express.json());

app.post(`/bot${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://joviddbdb:joviddb@cluster0.bs3eg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    app.listen(PORT, () => {
      console.log(`APP app listening at http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
Bot.launch();
