var express = require("express");
var router = express.Router();

const writePost = require("../../../lib/sequelize/board/writeBoard").writePost;
const upload = require("../../../lib/sequelize/board/writeBoard").upload;
const readPost = require("../../../lib/sequelize/board/readBoard").readPost;
const deletePost = require("../../../lib/sequelize/board/deletePost");
const checkLogin = require("../../../lib/check/checkData").checkLogin;
const checkOwnPost = require("../../../lib/check/checkData").checkOwnPost;
const checkPost = require("../../../lib/sequelize/board/checkBoard").checkPost;
const reportPost = require("../../../lib/sequelize/board/reportPost");
const unDoReportPost = require("../../../lib/sequelize/board/unDoReportPost");
const pushHealthsee = require("../../../lib/sequelize/board/pushHealthsee");
const unDoPushHealthsee = require("../../../lib/sequelize/board/unDoPushHealthsee");

// 게시글 작성
router.post("/", checkLogin, upload.single("file"), writePost, readPost);

// 해당 BO_CODE의 게시글 조회
router.get("/:BO_Code", readPost);

// 해당 BO_CODE의 게시글 삭제
router.delete("/:BO_Code", checkPost, checkLogin, checkOwnPost, deletePost);

// 신고
router.post("/report", checkPost, checkLogin, reportPost);

router.delete("/report/:BO_Code", checkPost, checkLogin, unDoReportPost);

// 추천
router.post("/health", checkPost, checkLogin, pushHealthsee);

router.delete("/health/:BO_Code", checkPost, checkLogin, unDoPushHealthsee);

module.exports = router;
