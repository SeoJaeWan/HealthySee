var express = require("express");
var router = express.Router();
const BoardList = require("../../../models").boardlist;
const { Op } = require("sequelize");

// 1. /search 게시글 전체 검색
// 반환 값 -> 게시글 20개 { BO_CODE, BO_TITLE, BO_HIT, 해당 BO_CODE와 관련된 댓글 수, 추천 수 등등 }

router.get("/", async function (req, res) {
  var responseData = {};

  var boardList = await BoardList.findAll({ limit: 10 });

  responseData.boardList = boardList;
  res.json(responseData);
});

router.get("/:BO_CODE", async function (req, res) {
  var responseData = {};
  var BO_CODE = req.params.BO_CODE;

  var boardList = await BoardList.findAll({
    where: {
      BO_CODE: { [Op.lt]: BO_CODE },
    },
    limit: 10,
  });

  responseData.boardList = boardList;
  res.json(responseData);
  var responseData = {};
});

module.exports = router;
