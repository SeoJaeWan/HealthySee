var express = require("express");
var router = express.Router();
const B_Comment = require("../../../models").b_comment;

// 댓글 작성
router.post("/", async function (req, res) {
  var responseData = {};

  var BC_Content = req.body.BC_Content;
  var BC_RE_REF = req.body.BC_RE_REF;
  var Board_BO_CODE = req.body.Board_BO_CODE;

  if (BC_RE_REF === "0")
    await B_Comment.create({
      BC_Content: BC_Content,
      Board_BO_Code: Board_BO_CODE,
    }).then(async (Comment) => {
      B_Comment.update(
        { BC_RE_REF: Comment.BC_Code },
        { where: { BC_Code: Comment.BC_Code } }
      );
    });
  else
    await B_Comment.create({
      BC_Content: BC_Content,
      Board_BO_Code: Board_BO_CODE,
      BC_RE_REF: BC_RE_REF,
    });

  comments = await B_Comment.findAll({
    where: { Board_BO_Code: Board_BO_CODE },
    order: [
      ["BC_RE_REF", "ASC"],
      ["BC_Code", "ASC"],
    ],
  });

  responseData.comments = comments;
  res.json(responseData);
});

// 해당 BO_CODE의 댓글 조회
router.get("/:BO_CODE", async function (req, res) {
  var BO_CODE = req.params.BO_CODE;

  var responseData = {};
  comments = await B_Comment.findAll({
    where: { Board_BO_Code: BO_CODE },
    order: [
      ["BC_RE_REF", "ASC"],
      ["BC_Code", "ASC"],
    ],
  });

  responseData.comments = comments;
  res.json(responseData);
});

// 해당 BO_CODE의 게시글 삭제
router.delete("/:BC_Code", async function (req, res) {
  var BC_Code = req.params.BC_Code;
  var responseData = {};

  await B_Comment.destroy({ where: { BC_Code: BC_Code } })
    .then((result) => {
      res.json({ result: 1 });
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
