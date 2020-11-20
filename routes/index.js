// dependencies
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.get("*", (req, res) => {
  res.status().send(path.resolve('index.html', path.join(__dirname, "../client", "build")));
})

module.exports = router;



