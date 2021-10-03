const moment = require("moment");
const busModel = require("../models/bus");

/**
 * @swagger
 * components:
 *    schemas:
 *     Bus:
 *         type: object
 *        required:
 *           - busImage
 *           - source
 *           - busName
 *           - averageRating
 *           - numberOfRatings
 *           - departureDay
 *           - departureTime
 *           - estimatedDuration
 *           - numberOfSeats
 *           - remainingSeats
 *           - price
 *         properties:
 *           _id:
 *              type: integer
 *              description: auto-generated id of the bus
 *           busImage:
 *               type: string
 *               description: link of image
 *           source:
 *               type: string
 *               description: name of bus company
 *           busName:
 *               type: string
 *               description: bus manufacturer
 *           averageRating:
 *               type: integer
 *               description: rating from customers
 *           numberOfRatings:
 *               type: integer
 *               description: number of rating from customers
 *          departureDay:
 *               type: date
 *               description: date when bus leaves
 *            departureTime:
 *                type: string
 *                description: time when bus leaves
 *           estimatedDuration:
 *                type: string
 *                description: duration of journey
 *           numberOfSeats:
 *                type: integer
 *                description: seating capacity of bus
 *           remainingSeats:
 *                type: [integer]
 *                description: empty seats
 *               price:
 *                     type: integer
 *                 description: amount for bus ticket
 */

/**
 * @swagger
 * tags:
 *   name: Bus
 *   description: Bus managing API
 */

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
