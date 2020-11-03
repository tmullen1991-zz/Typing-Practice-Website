const mongoose = require("mongoose");
const db = require("../models");
const list = require("./json/top_thousand.json");
const fs = require("fs");

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

// Insert into db from  a-z JSON files from (update dependencies above)
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

// Insert into db from  top thousand JSON files from (update dependencies above)
/*
db.TopThousand.insertMany(list)
  .then(() => {
    console.log("updated db should be created");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
*/

// converts large full word list JSON (words_dictionary.json) to include ids and creates new JSON for above code to create new db
/*

// require fs at top
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

//convert text file to json of words with id numbers
/*
var text = fs.readFileSync("./1-1000.txt").toString("utf-8");
var arr = text.split("\n");
var newArr = [];
for (i = 0; i <= 999; i++) {
  var word = {};
  word.name = arr[i];
  word.id = i;
  newArr.push(word);
}
var updatedList = JSON.stringify(newArr);
fs.writeFile("top_thousand.json", updatedList, function (err) {
  console.log(err);
  process.exit(0);
});
*/