var express = require("express");
var router = express.Router();
const writeComment = require("../../../sequelize/board/writeComment");
const readComment = require("../../../sequelize/board/readComment");

// 댓글 작성
router.post("/", writeComment,readComment);


// 해당 BO_CODE의 댓글 조회
router.get("/:BO_Code", readComment);

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
