var express = require("express");
var router = express.Router();

const writePost = require("../../../sequelize/board/writePost");
const readPost = require("../../../sequelize/board/readPost");
const deletePost = require("../../../sequelize/board/deletePost");

// 게시글 작성
router.post("/", writePost,readPost);

// 해당 BO_CODE의 게시글 조회
router.get("/:BO_Code", readPost);

// 해당 BO_CODE의 게시글 삭제
router.delete("/:BO_Code", deletePost);

module.exports = router;
