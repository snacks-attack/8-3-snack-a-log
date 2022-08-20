const express = require("express");
const userSnack = express.Router();

const {
  getAllUserSnacks,
  getUserSnackByID,
  createUserSnack,
  updateUserSnack,
  deleteUserSnack,
} = require("../queries/userSnacks");

const {
  checkValues,
  checkBoolean,
  capitalizeName,
} = require("../validation/snackValidation");

const confirmHealth = require("../confirmHealth");

userSnack.get("/:userID/snacks", async (req, res) => {
  const { userID } = req.params;

  const allUserSnacks = await getAllUserSnacks(userID);

  if (allUserSnacks.length > 0) {
    console.log("=== GET User Snacks", allUserSnacks, "===");
    res.status(200).json(allUserSnacks);
  } else {
    res.status(404).send(`No snacks found for user with the ID: ${userID}.`);
  }
});

userSnack.get("/:userID/snacks/:snackID", async (req, res) => {
  const { userID, snackID } = req.params;

  const userSnack = await getUserSnackByID(userID, snackID);

  if (userSnack) {
    console.log("=== GET User Snack by ID", userSnack, "===");
    res.status(200).json(userSnack[0]);
  } else {
    res.status(404).send(`Cannot find user snack with the ID: ${snackID}.`);
  }
});

userSnack.post(
  "/:userID/snacks",
  checkValues,
  checkBoolean,
  async (req, res) => {
    const { userID } = req.params;
    const newUserSnack = {
      userID: userID,
      name: req.body.name,
      fiber: req.body.fiber,
      protein: req.body.protein,
      added_sugar: req.body.added_sugar,
      is_healthy: req.body.is_healthy,
      image: req.body.image,
    };

    newUserSnack.name = capitalizeName(newUserSnack.name);
    newUserSnack.is_healthy = confirmHealth(newUserSnack);

    const userSnack = await createUserSnack(
      newUserSnack.userID,
      newUserSnack.name,
      newUserSnack.fiber,
      newUserSnack.protein,
      newUserSnack.added_sugar,
      newUserSnack.is_healthy,
      newUserSnack.image
    );

    if (userSnack) {
      console.log("=== CREATE User Snack", userSnack, "===");
      res.status(201).json(userSnack);
    } else {
      res.status(404).send("Cannot create user snack.");
    }
  }
);

userSnack.put(
  "/:userID/snacks/:snackID",
  checkValues,
  checkBoolean,
  async (req, res) => {
    const { userID, snackID } = req.params;
    const updatedUserSnack = {
      name: req.body.name,
      fiber: req.body.fiber,
      protein: req.body.protein,
      added_sugar: req.body.added_sugar,
      is_healthy: req.body.is_healthy,
      image: req.body.image,
    };

    updatedUserSnack.name = capitalizeName(updatedUserSnack.name);
    updatedUserSnack.is_healthy = confirmHealth(updatedUserSnack);

    const userSnack = await updateUserSnack(
      userID,
      snackID,
      updatedUserSnack.name,
      updatedUserSnack.fiber,
      updatedUserSnack.protein,
      updatedUserSnack.added_sugar,
      updatedUserSnack.is_healthy,
      updatedUserSnack.image
    );

    if (userSnack) {
      console.log("=== UPDATE User Snack", userSnack, "===");
      res.status(200).json(userSnack);
    } else {
      res.status(404).send("Cannot update user snack.");
    }
  }
);

userSnack.delete("/:userID/snacks/:snackID", async (req, res) => {
  const { userID, snackID } = req.params;

  const userSnack = await deleteUserSnack(userID, snackID);

  if (userSnack.id) {
    console.log("=== DELETE User Snack", userSnack, "===");
    res.status(200).json(userSnack);
  } else {
    res
      .status(404)
      .send(
        `Cannot delete user snack with the ID: ${snackID}, It may have already been deleted.`
      );
  }
});

module.exports = userSnack;
