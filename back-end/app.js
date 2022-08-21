// DEPENDENCIES

const express = require("express");
const cors = require("cors");
const snacksController = require("./controllers/snackController");
const usersController = require("./controllers/userController");
const userSnacksController = require("./controllers/userSnackController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/snacks", snacksController);
app.use("/users", usersController);
app.use("/authenticated", userSnacksController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Get Snack'n at Snack-a-log!");
});

app.get("*", (req, res) => {
  res.status(404).send("Not found!");
});

// EXPORT
module.exports = app;
