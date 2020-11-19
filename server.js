const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;
const root = require("path").join(__dirname, "client", "build");
const cors = require("cors");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use(express.static(root));
  app.get("*", (req, res) => {
    res.send("index.html", { root });
  });
}

// Routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wordDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:` + PORT);
});
