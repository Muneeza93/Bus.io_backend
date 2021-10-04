const userModel = require("../models/user");

/**
 * @swagger
 * components:
 *    schemas:
 *      User:
 *         type: object
 *         required:
 *           - firstName
 *           - lastName
 *           - email
 *           - phoneNumber
 *           - password
 *         properties:
 *           _id:
 *              type: integer
 *              description: auto-generaed id for user
 *           firstName:
 *                    type: string
 *                    description: user's first name
 *           lastName:
 *                   type: string
 *                   description: user's last name
 *           email:
 *                type: string
 *                description: email address of user
 *           phoneNumber:
 *                      type: string
 *                      description: phone contact of user
 *           password:
 *                   type: string
 *                   description: hashed passowrd for user
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User managing API
 */

/**
 * @swagger
 * /users/register:
 *  post:
 *   summary: create new user
 *   tags: [User]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#components/schemas/User'
 *   responses:
 *     "201":
 *       description: Registration successful
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/User'
 *     "403":
 *       description: User with this email already exists
 */
exports.create = async (req, res) => {
  const user = await userModel(req.body);
  try {
    await user.save();
    res.status(201).json({
      message: "ok",
      user: user,
    });
  } catch (err) {
    res.status(403).send(err);
  }
};

/**
 * @swagger
 * /users:
 *   get:
 *      description: return list of users
 *      tags: [User]
 *      responses:
 *         "200":
 *              description: user
 *              content:
 *                application/json:
 *                   schema:
 *                     $ref: '#components/schemas/User'
 */

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
