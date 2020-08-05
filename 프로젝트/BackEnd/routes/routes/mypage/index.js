var express = require("express");
const readMyPage = require("../../lib/sequelize/mypage/readMypage").readMyPage;
const updateMypage = require("../../lib/sequelize/mypage/updateMypage")
  .updateMypage;
const upload = require("../../lib/sequelize/mypage/updateMypage").upload;

var router = express.Router();

// 마이페이지 수정
router.post("/", upload.single("files"), updateMypage, readMyPage);

// 마이페이지 조회
router.get("/:owner&:username", readMyPage);

// 트레이너 등록

// 운동 건의

module.exports = router;
