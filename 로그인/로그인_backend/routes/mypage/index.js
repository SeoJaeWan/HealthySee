var express = require("express");
const readMyPage = require("../../lib/sequelize/mypage/readMypage");
const updateMypage = require("../../lib/sequelize/mypage/updateMypage");
var router = express.Router();

// 마이페이지 수정
router.post("/", updateMypage);

// 마이페이지 조회
router.get("/:username", readMyPage);

// 트레이너 등록

// 운동 건의

module.exports = router;
