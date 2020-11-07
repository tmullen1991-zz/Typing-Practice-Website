const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
var PORT = process.env.PORT || 8080;


// Serve static content for the app from the "public" directory in the application directory.

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI  || "mongodb://localhost/wordDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Routes
app.use(routes);

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
}

app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:` + PORT);
});
