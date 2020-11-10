const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

// Routes
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Connect to the Mongo DB
mongoose.connect(
  "mongodb+srv://dBManage:" +
    process.env.password +
    "@typing-words.8e9eo.mongodb.net/wordDB?retryWrites=true&w=majority" ||
    "mongodb://localhost/wordDB",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:` + PORT);
});
