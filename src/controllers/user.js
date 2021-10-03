const userModel = require("../models/user");

// /**
//  * @swagger
//  * components:
//  *    schemas:
//  *      User:
//  *         type: object
//  *         required:
//  *           - firstName
//  *           - lastName
//  *           - email
//  *           - phoneNumber
//  *           - password
//  *         properties:
//  *           _id:
//  *              type: integer
//  *              description: auto-generated id of the user
//  *         firstName:
//  *               type: string
//  *               description: first name of user
//  *          lastName:
//  *               type: string
//  *               description: last name of user
//  *              email:
//  *               type: string
//  *               description: email address of user
//  *        phoneNumber:
//  *               type: string
//  *               description: phone number of user
//  *           password:
//  *               type: string
//  *               description: password of user
//  */

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
