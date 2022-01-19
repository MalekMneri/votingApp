var express = require("express");
var router = express.Router();
var User = require("../models/User");

/* GET users listing. */
router.get("/register", function (req, res, next) {
  const user = new User({
    Username: req.body.Username,
    Password: hashedPassword,
  });
  try {
    user.save();
    res.send("User created successfully");
  } catch (err) {
    res.send("Error" + err);
  }
});

// login route
router.post("/login", function (req, res, next) {
  User.findOne({ Username: req.body.Username }, function (err, user) {
    if (err) {
      res.send("Error" + err);
    }
    if (!user) {
      res.send("User not found");
    }
    if (user.Password === req.body.Password) {
      res.send("Login successful");
    } else {
      res.send("Incorrect password");
    }
  });
});

router.get("/:id", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
