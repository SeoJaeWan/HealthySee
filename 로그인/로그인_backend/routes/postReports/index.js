var express = require("express");
var router = express.Router();
const reportPost = require("../../../sequelize/board/reportPost");
const unDoReportPost = require("../../../sequelize/board/unDoReportPost");
const { Op } = require("sequelize");


router.post("/", reportPost);

router.delete("/:BO_Code", unDoReportPost);

module.exports = router;