const express = require("express");
const router = express.Router();
const Bus = require("../controllers/bus");

router.post("/", Bus.create);
router.get("/", Bus.findAll);
router.get("/:id", Bus.findOne);

module.exports = router;
