const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

const userRoutes = require("./src/routes/user");
const busRoutes = require("./src/routes/bus");

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/bus";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

app.use("/users", userRoutes);
app.use("/buses", busRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}!!`));
