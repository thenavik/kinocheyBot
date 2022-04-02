const { Schema, model } = require("mongoose");

const KinoModel = new Schema({
  kinopoisk_id: {
    type: Number,
    unique: true,
    required: true,
  },
  id_db: {
    type: String,
    required: false,
  },
  rating_kp_count: {
    type: String,
    required: false,
  },
  name_original: {
    type: String,
    required: false,
  },
  name_russian: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  trailer: {
    type: String,
    required: false,
  },
  small_poster: {
    type: String,
    required: false,
  },
  big_poster: {
    type: String,
    required: false,
  },
  time_minutes: {
    type: String,
    required: false,
  },
  rating_kp_count: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: false,
  },
  country_ru: {
    type: String,
    required: false,
  },
  slogan: {
    type: String,
    required: false,
  },
  persons: {
    type: Array,
    required: false,
  },
  genres: {
    type: Array,
    required: false,
  },
});

module.exports = model("kinodb", KinoModel);
