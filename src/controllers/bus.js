const moment = require("moment");
const busModel = require("../models/bus");

/**
 * @swagger
 * components:
 *    schemas:
 *      Bus:
 *        type: object
 *        required:
 *          - busImage
 *          - source
 *          - busName
 *          - averageRating
 *          - numberOfRatings
 *          - departureDay
 *          - departureTime
 *          - estimatedDuration
 *          - numberOfSeats
 *          - remainingSeats
 *          - price
 *        properties:
 *          _id:
 *             type: integer
 *             description: auto-generated id of the bus operator
 *          busImage:
 *                  type: string
 *                  description: image of bus operator
 *          source:
 *                type: string
 *                description: name of bus operator
 *          busName:
 *                 type: string
 *                 description: name of bus manufacturer
 *          averageRating:
 *                       type: integer
 *                       description: average rating of bus operator from customers
 *          numberOfRatings:
 *                         type: integer
 *                         description: total number of ratings
 *          departureDay:
 *                      type: Date
 *                      description: day bus operator leaves
 *          departureTime:
 *                       type: string
 *                       description: time bus operator leaves for destination
 *          estimatedDuration:
 *                           type: string
 *                           description: hours left from origin to destination
 *          numberOfSeats:
 *                       type: integer
 *                       description: seating capacity of the bus
 *          remainingSeats:
 *                        type: [integer]
 *                        description: vacant seats
 *          price:
 *               type: integer
 *               description: amount for bus ticket
 */

/**
 * @swagger
 * tags:
 *   name: Bus
 *   description: Bus managing API
 */

/**
 * @swagger
 * /buses:
 *  post:
 *   summary: create bus
 *   tags: [Bus]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#components/schemas/Bus'
 *   responses:
 *     "201":
 *       description: success
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/Bus'
 *     "403":
 *       description: bus operator doesnt exist
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

/**
 * @swagger
 * /buses:
 *   get:
 *      description: search for a bus operator
 *      tags: [Bus]
 *      responses:
 *         "200":
 *              description: bus
 *              content:
 *                application/json:
 *                   schema:
 *                     $ref: '#components/schema/Bus'
 */
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

/**
 * @swagger
 * /buses:id:
 *   get:
 *      description: search for a bus by id
 *      tags: [Bus]
 *      responses:
 *         "200":
 *              description: bus
 *              content:
 *                application/json:
 *                   schema:
 *                     $ref: '#components/schema/Bus'
 */
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
