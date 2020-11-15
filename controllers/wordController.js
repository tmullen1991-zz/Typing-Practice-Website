const db = require("../models");


// Defining methods for the words controller
module.exports = {
  words: function (req, res) {
    var getByIds = [];
    for (i = 1; i <= 100; i++) {
      getByIds.push(Math.floor(Math.random() * 370100));
      if (i === 100) {
        db.Word.find({ id: { $in: getByIds } })
          .then((word) => {
            res.send(word);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  },
  top_thousand: function (req, res) {
    var getByIds = [];
    for (i = 1; i <= 100; i++) {
      getByIds.push(Math.floor(Math.random() * 999));
      if (i === 100) {
        db.TopThousand.find({ id: { $in: getByIds } })
          .then((word) => {
            res.send(word);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }
};
