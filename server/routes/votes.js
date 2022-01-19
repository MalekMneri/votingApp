var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// add a new vote using user id and sujet id
router.post("/", function (req, res, next) {
  const vote = new Vote({
    user: req.body.user,
    sujet: req.body.sujet,
    vote: req.body.vote,
  });
  try {
    vote.save();
    res.send("Vote created successfully");
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = router;
