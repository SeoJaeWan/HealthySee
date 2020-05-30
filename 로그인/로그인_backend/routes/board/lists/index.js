var express = require("express");
var router = express.Router();
const readList = require("../../../sequelize/board/readList");
const { Op } = require("sequelize");

// 1. /search 게시글 전체 검색
// 반환 값 -> 게시글 20개 { BO_CODE, BO_TITLE, BO_HIT, 해당 BO_CODE와 관련된 댓글 수, 추천 수 등등 }


router.get("/", readList);

router.get("/:BO_Code", readList);

module.exports = router;
