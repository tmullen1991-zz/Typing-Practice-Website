// dependencies
const router = require("express").Router();
const path = require("path");
const db = require("../models");

//default to home
router.get("/", function (req, res) {
  //console.log(req)
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.get("/api/words", function (req, res) {
  var getByIds = []
  for (i = 1; i <= 100; i++) {
     getByIds.push(Math.floor(Math.random() * 370100))
    if (i === 100) {
      db.Word.find({ id: {$in:getByIds} })
        .then((word) => {
          res.send(word)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
});

module.exports = router;
