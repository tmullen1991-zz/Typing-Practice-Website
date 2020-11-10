const router = require("express").Router();
const db = require("../../models");

router.get("/api/words",function (req, res) {
    var getByIds = []
    for (i = 1; i <= 100; i++) {
       getByIds.push(Math.floor(Math.random() * 370100))
       
      if (i === 100) {
        db.Word.find({ id: {$in:getByIds} })
          .then((word) => {
            res.send(word)
            //console.log(word)
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  });
  
  router.get("/api/top_thousand", function (req, res) {
    var getByIds = []
    for (i = 1; i <= 100; i++) {
       getByIds.push(Math.floor(Math.random() * 999))
      if (i === 100) {
        db.TopThousand.find({ id: {$in:getByIds} })
          .then((word) => {
            console.log(word)
            res.send(word)
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  });

module.exports = router;