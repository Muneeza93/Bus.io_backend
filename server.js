const express = require("express");
const mongoose = require("mongoose");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: "Bus.io API's ",
      description: "Bus.io API documented with swagger",
      contact: {
        name: "Bus.io_ReloadlyXFlutterwave",
        url: "https://github.com/Muneeza93/bus.io_backend-ReloadlyXFlutterwave",
        email: "sebagabomuneeza@gmail.com",
      },
      version: "1.0.1",
    },
    server: [
      {
        url: "http://localhost:4000",
        description: "development server",
      },
    ],
  },
  apis: ["./src/controllers/*.js"],
};

const specs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

require("dotenv").config();

const userRoutes = require("./src/routes/user");
const busRoutes = require("./src/routes/bus");
const cityRoutes = require("./src/routes/cities");

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bus";

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
app.use("/cities", cityRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}!!`));
