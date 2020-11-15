const router = require("express").Router();
const wordRoutes = require("./words");

// Book routes
router.use(wordRoutes);

module.exports = router;