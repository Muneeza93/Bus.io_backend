const citiesModel = require("../models/cities");

/**
 * @swagger
 * components:
 *    schemas:
 *      City:
 *           type: object
 *           required:
 *             - cityName
 *             - countryName
 *           properties:
 *             _id:
 *                type: integer
 *                description: auto-generated id for the city
 *             cityName:
 *                     type: string
 *                     description: city for bus routes
 *             countryName:
 *                        type: string
 *                        description: country representing each city
 */

/**
 * @swagger
 * tags:
 *   name: City
 *   description: City managing API
 */

/**
 * @swagger
 * /cities:
 *  post:
 *   summary: create city
 *   tags: [City]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#components/schemas/City'
 *   responses:
 *     "201":
 *       description: success
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/City'
 *     "403":
 *       description: city doesnt exist
 */
exports.create = async (req, res) => {
  try {
    const city = await citiesModel({
      cityName: req.body.cityName,
      countryName: req.body.countryName,
    });
    await city.save();
    res.status(201).json({
      city: city,
      message: "ok",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

/**
 * @swagger
 * /cities:
 *   get:
 *      description: search for a city
 *      tags: [City]
 *      responses:
 *         "200":
 *              description: city
 *              content:
 *                application/json:
 *                   schema:
 *                     $ref: '#components/schema/City'
 */
exports.findAll = async (req, res) => {
  try {
    const getCities = await citiesModel.find(req.query);
    console.log(req.query);
    return res.status(200).json({
      status: "success",
      results: getCities.length,
      data: { getCities },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

/**
 * @swagger
 * /cities:id:
 *   get:
 *      description: search for a city by id
 *      tags: [City]
 *      responses:
 *         "200":
 *              description: city
 *              content:
 *                application/json:
 *                   schema:
 *                     $ref: '#components/schema/City'
 */
exports.findById = async (req, res) => {
  try {
    const city = await citiesModel.findById({ _id: req.params.id });
    return res.status(200).json({
      success: true,
      city,
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};
