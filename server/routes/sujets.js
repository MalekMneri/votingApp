var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
// create a new sujet
router.post("/", function (req, res, next) {
  const sujet = new Sujet({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    sujet.save();
    res.send("Sujet created successfully");
  } catch (err) {
    res.send("Error" + err);
  }
});

// get all sujets
router.get("/", function (req, res, next) {
  Sujet.find({}, function (err, sujets) {
    if (err) {
      res.send("Error" + err);
    }
    res.send(sujets);
  });
});

//get sujet by id
router.get("/:id", function (req, res, next) {
  Sujet.findById(req.params.id, function (err, sujet) {
    if (err) {
      res.send("Error" + err);
    }
    res.send(sujet);
  });
});

module.exports = router;
