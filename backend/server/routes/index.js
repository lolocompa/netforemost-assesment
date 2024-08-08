var express = require('express');
var router = express.Router();
var articleController = require("../controller/articleController.")

/* GET articles. */
router.get('/articles', articleController.get_articles);

module.exports = router;
