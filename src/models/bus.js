const mongoose = require("mongoose");
const { Schema } = mongoose;

const busSchema = new Schema({
  busImage: String,
  source: String,
  busName: String,
  averageRating: Number,
  numberOfRatings: Number,
  departureDay: Date,
  departureTime: String,
  estimatedDuration: String,
  numberOfSeats: Number,
  remainingSeats: [Number],
  price: Number,
});

module.exports = mongoose.model("Bus", busSchema);
