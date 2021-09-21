const express = require("express");
const router = express.Router();
const City = require("../controllers/cities");

router.post("/", City.create);
router.get("/", City.findAll);
router.get("/:id", City.findById);

module.exports = router;
