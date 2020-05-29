var express = require("express");
var router = express.Router();

const BoardDetail = require("../../../models").boarddetail;
const Board = require("../../../models").board;
const B_Comment = require("../../../models").b_comment;

// 게시글 작성
// 게시글 작성이 되면
router.post("/", async function (req, res) {
  //REQUEST의 BODY로 부터 BO_TITLE와 BO_CONTENT를 가져옴
  var BO_TITLE = req.body.BO_TITLE;
  var BO_CONTENT = req.body.BO_CONTENT;
  var boardDetail;
  var responseData = {};
  var comments;
  await Board.create({
    BO_TITLE: BO_TITLE,
    BO_CONTENT: BO_CONTENT,
  }).then(async (board) => {
    boardDetail = await BoardDetail.findOne({
      where: { BO_CODE: board.BO_CODE },
    });
    comments = await B_Comment.findAll({
      where: { Board_BO_Code: board.BO_CODE },
    });
    responseData.boardDetail = boardDetail;
    responseData.comments = comments;
  });
  return res.json(responseData);
});

// 해당 BO_CODE의 게시글 조회
router.get("/:BO_CODE", async function (req, res) {
  var BO_CODE = req.params.BO_CODE;
  console.log(req.params.BO_CODE);

  var responseData = {};
  Board.increment("BO_HIT", { where: { BO_CODE: BO_CODE } });
  var BoardD = await BoardDetail.findOne({
    where: { BO_CODE: BO_CODE },
  });
  var comments = await B_Comment.findAll({
    where: { Board_BO_Code: BO_CODE },
  });
  responseData.boardDetail = BoardD;
  responseData.comments = comments;
  return res.json(responseData);
});

// 해당 BO_CODE의 게시글 삭제
router.delete("/:BO_CODE", async function (req, res) {
  var BO_CODE = req.params.BO_CODE;
  var responseData = {};

  await Board.destroy({ where: { BO_CODE: BO_CODE } })
    .then((result) => {
      res.json({ result: 1 });
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
