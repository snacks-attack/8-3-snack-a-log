const express = require("express");
const snack = express.Router();

const {
  getAllSnacks,
  getSnackByID,
  createSnack,
  updateSnack,
  deleteSnack,
} = require("../queries/snacks");

const confirmHealth = require("../confirmHealth");

const {
  checkValues,
  checkBoolean,
  capitalizeName,
} = require("../validation/snackValidation");

snack.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  console.log("=== GET Snacks", allSnacks, "===");

  if (allSnacks) {
    res.status(200).json({ success: true, payload: allSnacks });
  } else {
    res.status(404).json({ success: false, message: "Cannot find any snacks" });
  }
});

snack.get("/:id", async (req, res) => {
  const { id } = req.params;
  const getASnack = await getSnackByID(id);
  console.log("=== GET snack by ID", getASnack, "===");

  if (getASnack.length > 0) {
    res.status(200).json({ success: true, payload: getASnack[0] });
  } else {
    res.status(404).json({ success: false, payload: `/not found/` });
  }
});

snack.post("/", checkValues, checkBoolean, async (req, res) => {
  const newSnack = {
    name: req.body.name,
    fiber: req.body.fiber,
    protein: req.body.protein,
    added_sugar: req.body.added_sugar,
    is_healthy: req.body.is_healthy,
    image: req.body.image,
  };

  newSnack.name = capitalizeName(newSnack.name);
  newSnack.is_healthy = confirmHealth(newSnack);

  const createdSnack = await createSnack(
    newSnack.name,
    newSnack.fiber,
    newSnack.protein,
    newSnack.added_sugar,
    newSnack.is_healthy,
    newSnack.image
  );

  console.log("=== CREATE snack", createdSnack, "===");

  if (createdSnack) {
    res.status(200).json({ success: true, payload: createdSnack });
  } else {
    res.status(404).json({ success: false, payload: "Something went wrong." });
  }
});

snack.put("/:id", checkValues, checkBoolean, async (req, res) => {
  const { id } = req.params;

  const updatedSnackData = {
    name: req.body.name,
    fiber: req.body.fiber,
    protein: req.body.protein,
    added_sugar: req.body.added_sugar,
    is_healthy: req.body.is_healthy,
    image: req.body.image,
  };

  updatedSnackData.name = capitalizeName(updatedSnackData.name);
  updatedSnackData.is_healthy = confirmHealth(updatedSnackData);

  const updatedSnack = await updateSnack(
    id,
    updatedSnackData.name,
    updatedSnackData.fiber,
    updatedSnackData.protein,
    updatedSnackData.added_sugar,
    updatedSnackData.is_healthy,
    updatedSnackData.image
  );

  console.log("=== UPDATE snack", updatedSnack, "===");

  if (updatedSnack) {
    res.status(200).json({ success: true, payload: updatedSnack });
  } else {
    res.status(404).json({
      success: false,
      payload: `Could not update the snack at the ID:${id}.`,
    });
  }
});

snack.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);

  console.log("=== DELETE snack", deletedSnack, "===");

  if (deletedSnack.id) {
    res.status(200).json({ success: true, payload: deletedSnack });
  } else {
    res.status(404).json({ success: false, payload: "unable to delete!" });
  }
});

module.exports = snack;
