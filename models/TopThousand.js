const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TopThousandSchema = new Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },
});

const TopThousand = mongoose.model("TopThousand", TopThousandSchema);

module.exports = TopThousand;
