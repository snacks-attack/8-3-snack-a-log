const db = require("../db/dbConfig.js");

const getAllUserSnacks = async (userID) => {
  try {
    const snacks = await db.any(
      "SELECT * FROM userSnacks WHERE userID = $1",
      userID
    );
    return snacks;
  } catch (err) {
    return err;
  }
};

const getUserSnackByID = async (userID, id) => {
  try {
    const snack = await db.any(
      "SELECT * FROM userSnacks WHERE userID = $1 AND id = $2",
      [userID, id]
    );
    return snack;
  } catch (err) {
    return err;
  }
};

const createUserSnack = async (
  userID,
  name,
  fiber,
  protein,
  added_sugar,
  is_healthy,
  image
) => {
  try {
    const newSnack = await db.one(
      "INSERT INTO userSnacks (userID, name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [userID, name, fiber, protein, added_sugar, is_healthy, image]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};

const updateUserSnack = async (
  userID,
  id,
  name,
  fiber,
  protein,
  added_sugar,
  is_healthy,
  image
) => {
  try {
    const updateSnack = await db.one(
      "UPDATE userSnacks SET name=$2, fiber=$3, protein=$4, added_sugar=$5, is_healthy=$6, image=$7 WHERE userID=$1 AND id=$8 RETURNING *",
      [userID, name, fiber, protein, added_sugar, is_healthy, image, id]
    );
    return updateSnack;
  } catch (error) {
    return error;
  }
};

const deleteUserSnack = async (userID, id) => {
  try {
    if (
      id === null ||
      id === undefined ||
      userID === null ||
      userID === undefined
    ) {
      return false;
    }
    const deletedSnack = await db.one(
      "DELETE FROM userSnacks WHERE userID = $1 AND id = $2 RETURNING *",
      [userID, id]
    );
    return deletedSnack;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUserSnacks,
  getUserSnackByID,
  createUserSnack,
  updateUserSnack,
  deleteUserSnack,
};
