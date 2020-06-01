var express = require("express");
var router = express.Router();

// 글쓰기 페이지

var list = require("./lists/index");
var post = require("./posts/index");
var comment = require("./comments/index");
var healthsee = require("./healthsees/index");
var report = require("./postReports/index")

router.use("/lists", list);
router.use("/posts", post);
router.use("/comments", comment);
router.use("/healthsees", healthsee);
router.use("/postReports",report);

module.exports = router;
