const router = require("express").Router();
const wordsController = require("../../controllers/wordController");

// change home to any extension, use whatever is used on front end for page redirect, also change home in client/src/utils/api.js
router.route("/words").get(wordsController.words);

router.route("/top_thousand").get(wordsController.top_thousand);


module.exports = router;