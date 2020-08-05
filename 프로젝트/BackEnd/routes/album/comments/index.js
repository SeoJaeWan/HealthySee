var express = require("express");
var router = express.Router();
const writeComment = require("../../../lib/sequelize/album/writeAlbum").writeComment;
const readComment = require("../../../lib/sequelize/album/readAlbum").readComment;
const reportComment = require("../../../lib/sequelize/album/reportAlbumComment");
const checkComment = require("../../../lib/sequelize/album/checkAlbum").checkComment;
const checkOwnAlbum = require("../../../lib/check/checkData").checkOwnAlbum;
const deleteComment = require("../../../lib/sequelize/album/deleteAlbum").deleteComment;
const updateComment = require("../../../lib/sequelize/album/updateAlbum").updateComment;
const checkLogin = require("../../../lib/check/checkData").checkLogin;

//댓글 쓰기
router.post("/", writeComment,readComment);

//댓글 가져오기
router.get("/:AL_Code&:page", readComment);

//댓글 수정
router.patch(
  "/",
  checkComment,
  checkLogin,
  checkOwnAlbum,
  updateComment,
  readComment
);

//댓글 차단
router.post(
  "/report",
  checkComment,
  checkOwnAlbum,
  reportComment,
  readComment
);

//댓글 삭제
router.delete(
    "/:ACO_Code&:page",
    checkLogin,
    checkComment,
    checkOwnAlbum,
    deleteComment,
    readComment
  );

module.exports = router;