var express = require("express");
var router = express.Router();
const writeComment = require("../../../lib/sequelize/board/writeBoard")
  .writeComment;
const readComment = require("../../../lib/sequelize/board/readBoard")
  .readComment;
const checkLogin = require("../../../lib/check/checkData").checkLogin;
const checkOwnBoard = require("../../../lib/check/checkData").checkOwnBoard;
const checkComment = require("../../../lib/sequelize/board/checkBoard").checkComment;
const deleteComment = require("../../../lib/sequelize/board/deleteComment");
const updateComment = require("../../../lib/sequelize/board/updateBoard").updateComment

// 댓글 작성
router.post("/", writeComment,readComment);


// 해당 BO_CODE의 댓글 조회
router.get("/:BO_Code", readComment);

router.patch("/:BC_Code",checkComment,checkLogin,checkOwnBoard, updateComment,readComment);

//router.delete("/:BC_Code",deleteComment, readComment);
router.delete(
    "/:BC_Code",
    checkComment,
    checkLogin,
    checkOwnBoard,
    deleteComment,
    readComment
  );


module.exports = router;