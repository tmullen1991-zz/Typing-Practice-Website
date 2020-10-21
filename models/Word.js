const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WordSchema = new Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },
});

const Word = mongoose.model("Word", WordSchema);

module.exports = Word;
