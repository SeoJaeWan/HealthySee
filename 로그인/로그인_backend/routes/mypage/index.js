var express = require("express");
const readMyPage = require("../../lib/sequelize/mypage/readMypage");
const updateMypage = require("../../lib/sequelize/mypage/updateMypage")
  .updateMypage;
const upload = require("../../lib/sequelize/mypage/updateMypage").upload;
var router = express.Router();

// 마이페이지 수정
router.post("/", upload.array("ME_Profile_Photo"), updateMypage);

// 마이페이지 조회
router.get("/:username", readMyPage);

// 트레이너 등록

// 운동 건의

module.exports = router;
