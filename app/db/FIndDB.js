const KinoModel = require("../models/kinoModel.js");

class FindDB {
  async search(msg) {
    const result = await KinoModel.find(
      {
        name_russian: {
          $regex: msg.split("")[0].toUpperCase() + msg.slice(1),
        },
      },
      function (err, kino) {
        if (err) {
          return err;
        } else {
          JSON.stringify(kino);
          if (!kino.length) {
            return "По вашему запросу ничего не найдено.";
          }
          return kino;
        }
      }
    );

    return result;
  }
}

module.exports = new FindDB();
