const express = require("express");
const user = express.Router();

const {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
  checkIfEmailExists,
} = require("../queries/users");

const { checkValues } = require("../validation/userValidation");

user.get("/", async (req, res) => {
  const allUsers = await getAllUsers();

  if (allUsers) {
    console.log("=== GET Users", allUsers, "===");
    res.status(200).json(allUsers);
  } else {
    res.status(404).send("Cannot find any users");
  }
});

user.get("/:id", async (req, res) => {
  const { id } = req.params;
  const getAUser = await getUserByID(id);

  if (getAUser.length > 0) {
    console.log("=== GET user by ID", getAUser, "===");
    res.status(200).json(getAUser);
  } else {
    res.status(404).send("user not found");
  }
});

user.post("/", checkValues, async (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  };

  const checkEmail = await checkIfEmailExists(newUser.email);

  if (checkEmail) {
    res.status(400).send("Email already exists!");
  } else {
    const createdUser = await createUser(
      newUser.username,
      newUser.password,
      newUser.email
    );
    console.log("=== POST user", createdUser, "===");

    if (createdUser) {
      res.status(201).json(createdUser);
    } else {
      res.status(404).send("user not created");
    }
  }
});

user.put("/:id", checkValues, async (req, res) => {
  const { id } = req.params;

  const updatedUserData = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  };

  const updatedUser = await updateUser(
    id,
    updatedUserData.username,
    updatedUserData.password,
    updatedUserData.email
  );

  if (updatedUser) {
    console.log("=== PUT user", updatedUser, "===");
    res.status(200).json(updatedUser);
  } else {
    res.status(404).send("user not found");
  }
});

user.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedUser = await deleteUser(id);
  console.log("=== DELETE user", deletedUser, "===");

  if (deletedUser.id) {
    res.status(200).json(deletedUser);
  } else {
    res.status(404).send("user not found");
  }
});

module.exports = user;
