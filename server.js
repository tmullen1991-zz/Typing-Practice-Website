const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;
//const root = require("path").join(__dirname, "client", "build");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use(routes);
// log errors
app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.render('error');
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || process.env.URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});


app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:` + PORT);
});
