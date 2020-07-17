var express = require("express");
var router = express.Router();
const writePost = require("../../../lib/sequelize/board/writeBoard").writePost;
const upload = require("../../../lib/sequelize/board/writeBoard").upload;
const readPost = require("../../../lib/sequelize/board/readBoard").readPost;
const deletePost = require("../../../lib/sequelize/board/deleteBoard")
  .deletePost;
const checkLogin = require("../../../lib/check/checkData").checkLogin;
const checkOwnBoard = require("../../../lib/check/checkData").checkOwnBoard;
const checkPost = require("../../../lib/sequelize/board/checkBoard").checkPost;
const reportPost = require("../../../lib/sequelize/board/reportPost");
const pushHealthsee = require("../../../lib/sequelize/board/pushHealthsee");
const updatePost = require("../../../lib/sequelize/board/updateBoard")
  .updatePost;

// 게시글 작성
router.post("/", checkLogin, upload.array("files"), writePost, readPost);

// 해당 BO_CODE의 게시글 조회
router.get("/:BO_Code", readPost);

// 해당 BO_CODE의 게시글 삭제
router.delete("/:BO_Code", checkPost, checkLogin, checkOwnBoard, deletePost);
router.patch(
  "/:BO_Code",
  checkPost,
  checkOwnBoard,
  upload.array("files"),
  updatePost,
  readPost
);

// 신고
router.post("/report", checkPost, checkLogin, reportPost);

// 추천
router.post("/health", checkPost, checkLogin, pushHealthsee);

module.exports = router;
