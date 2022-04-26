const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  cast: {
    type: Array,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    // required: true,
  },
});

module.exports = mongoose.model("Movies", movieSchema);