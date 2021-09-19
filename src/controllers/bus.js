const moment = require("moment");
const busModel = require("../models/bus");

exports.create = async (req, res) => {
  try {
    const bus = await busModel({
      busImage: req.body.busImage,
      source: req.body.source,
      busName: req.body.busName,
      averageRating: req.body.averageRating,
      numberOfRatings: req.body.numberOfRatings,
      departureDay: moment(new Date(req.body.departureDay)).format(
        "YYYY-MM-DD"
      ),
      departureTime: req.body.departureTime,
      estimatedDuration: req.body.estimatedDuration,
      numberOfSeats: req.body.numberOfSeats,
      remainingSeats: req.body.remainingSeats,
      price: req.body.price,
    });
    await bus.save();
    res.status(201).json({
      bus: bus,
      message: "ok",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.findAll = async (req, res) => {
  try {
    const getBuses = await busModel.find();
    return res.status(200).json({
      getBuses,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.findOne = async (req, res) => {
  try {
    const bus = await busModel.findOne({ _id: req.params.id });
    return res.status(200).json({
      bus: bus,
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};
