const citiesModel = require("../models/cities");

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
