const userModel = require("../models/user");

exports.create = async (req, res) => {
  const user = await userModel(req.body);
  try {
    await user.save();
    res.status(201).json({
      message: "ok",
      user: user,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.findAll = async (req, res) => {
  try {
    const getUsers = await userModel.find();
    return res.status(200).json({
      getUsers,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
