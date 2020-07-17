var express = require("express");
var router = express.Router();


router.get("/", readList);

module.exports = router;