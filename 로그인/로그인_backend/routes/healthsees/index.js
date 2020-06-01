var express = require("express");
var router = express.Router();
const pushHealthsee = require("../../../sequelize/board/pushHealthsee");
const unDoPushHealthsee = require("../../../sequelize/board/unDoPushHealthsee");
const { Op } = require("sequelize");


router.post("/", pushHealthsee);

router.delete("/:BO_Code", unDoPushHealthsee);

module.exports = router;