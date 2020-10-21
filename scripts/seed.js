const mongoose = require("mongoose");
const db = require("../models");
const list = require("./json/v_to_z_words.json");

mongoose.connect("mongodb://localhost/wordDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// delete all before updating
/*
db.Word.deleteMany({})
  .then(() => {
    console.log("db should be cleared");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
*/
// update db from JSON
/*
db.Word.insertMany(list)
  .then(() => {
    console.log("updated db should be created");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
*/
// converts giant JSON to include ids and creates new JSON for above code to creat new db
/*
var fs = require("fs");

var changeNum = function (obj) {
  var newArr = [];
  Object.keys(obj).forEach(function (key, i) {
    // copy paste letter ranges: IE a through f, g thorugh l... and change new json filename for new range
    if(key.charAt(0) === "v" || key.charAt(0) === "w" || key.charAt(0) === "x" || key.charAt(0) === "y" || key.charAt(0) === "z"){
      i = i + 1;
      var newWord = {};
      newWord.name = key;
      newWord.id = i;
      newArr.push(newWord);
    }
  });

  var updatedList = JSON.stringify(newArr);
  fs.writeFile("v_to_z_words.json", updatedList, function (err) {
    console.log(err);
    process.exit(0);
  });
};
changeNum(list);
*/
