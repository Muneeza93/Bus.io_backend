const express = require("express");
const router = express.Router();
const User = require("../controllers/user");

router.post("/register", User.create);
router.get("/", User.findAll);

module.exports = router;
