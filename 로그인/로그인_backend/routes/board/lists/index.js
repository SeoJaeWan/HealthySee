var express = require("express");
var router = express.Router();
const readGeneralList = require("../../../lib/sequelize/board/readList").readGeneralList;
const readHealthList = require("../../../lib/sequelize/board/readList").readHealthList;
const { Op } = require("sequelize");

// 1. /search 게시글 전체 검색
// 반환 값 -> 게시글 20개 { BO_CODE, BO_TITLE, BO_HIT, 해당 BO_CODE와 관련된 댓글 수, 추천 수 등등 }

router.get("/1/", readHealthList);
router.get("/0/", readGeneralList);

router.get("/0/:BO_Code", readGeneralList);
router.get("/1/:BO_Code", readHealthList);

module.exports = router;
