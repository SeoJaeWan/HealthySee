var express = require("express");
var router = express.Router();
const writeComment = require("../../../lib/sequelize/board/writeBoard")
  .writeComment;
const readComment = require("../../../lib/sequelize/board/readBoard")
  .readComment;
const checkLogin = require("../../../lib/check/checkData").checkLogin;
const checkOwnBoard = require("../../../lib/check/checkData").checkOwnBoard;
const checkComment = require("../../../lib/sequelize/board/checkBoard")
  .checkComment;
const deleteComment = require("../../../lib/sequelize/board/deleteComment");

// 댓글 작성
router.post("/", checkLogin, writeComment, readComment);

// 해당 BO_CODE의 댓글 조회
router.get("/:BO_Code", readComment);

router.delete(
  "/:BC_Code",
  checkComment,
  checkLogin,
  checkOwnBoard,
  deleteComment,
  readComment
);

// 해당 BO_CODE의 게시글 삭제

// router.delete("/:BC_Code", async function (req, res) {
//   var BC_Code = req.params.BC_Code;
//   var responseData = {};

//   await B_Comment.destroy({ where: { BC_Code: BC_Code } })
//     .then((result) => {
//       res.json({ result: 1 });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// });

module.exports = router;
