const checkValues = (req, res, next) => {
  if (req.body.username && req.body.password && req.body.email) {
    next();
  } else {
    res.status(400).json({
      error:
        "You are missing required keys. Please make sure you have: username, password, email",
    });
  }
};

module.exports = {
  checkValues,
};
