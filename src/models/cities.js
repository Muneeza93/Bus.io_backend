const mongoose = require("mongoose");
const { Schema } = mongoose;

const citiesSchema = new Schema({
  cityName: String,
  countryName: String,
});

module.exports = mongoose.model("City", citiesSchema);
