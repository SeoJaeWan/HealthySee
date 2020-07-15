const BoardDetail = require("../../../models").boarddetail;
const B_Comment = require("../../../models").b_comment;
const Board = require("../../../models").board;
const B_Healthsee = require("../../../models").b_healthsee;
const B_Reporter = require("../../../models").b_reporter;
const { Op } = require("sequelize");
const FrontComment = require("../../../models").frontcomment;

const readPost = async (req, res, next) => {
  var BO_Code = req.params.BO_Code;

  var self = req.body.self;

  var responseData = {};

  if (!self) Board.increment("BO_Hit", { where: { BO_Code: BO_Code } });

  var BoardD = await BoardDetail.findOne({
    where: { BO_Code },
  });
  if (BoardD.BO_File !== "" && BoardD.BO_File !== null)
    BoardD.BO_File = BoardD.BO_File.split(",");
  else BoardD.BO_File = [];

  console.log(Board.BO_State);
  if (BoardD.BO_State === 1) return res.status(406).end();

  // 댓글 1페이지
  comments = await FrontComment.findAndCountAll({
    where: { Board_BO_Code: BO_Code },
    order: [
      ["BC_Re_Ref", "DESC"],
      ["BC_Code", "ASC"],
    ],
    limit: 20,
  });

  if (req.method === "GET") username = req.body.user.username;
  else username = req.body.username;

  var isHealthsee = await B_Healthsee.count({
    where: {
      [Op.and]: [{ Board_BO_Code: BO_Code }, { BH_Push_NickName: username }],
    },
  });
  var isReport = await B_Reporter.count({
    where: {
      [Op.and]: [
        { Board_BO_Code: BO_Code },
        { BR_Reporter_NickName: username },
      ],
    },
  });

  responseData.boardDetail = BoardD;
  responseData.comments = comments.rows;
  responseData.lastPage =
    Math.ceil(comments.count / 20) == 0 ? 1 : Math.ceil(comments.count / 20);
  responseData.isHealthsee = isHealthsee;
  responseData.isReport = isReport;
  responseData.commentsCount = comments.count;

  return res.json(responseData);
};

const readComment = async (req, res, next) => {
  var BO_Code = req.params.BO_Code;
  var offset = 0;
  var page = req.params.page;

  if (page > 1) offset = (page - 1) * 20;
  else if (page < 1) {
    // 에러 발생
  }

  var responseData = {};
  comments = await FrontComment.findAndCountAll({
    where: { Board_BO_Code: BO_Code },
    order: [
      ["BC_Re_Ref", "DESC"],
      ["BC_Code", "ASC"],
    ],
    limit: 20,
    offset: offset,
  });
  responseData.comments = comments.rows;
  responseData.commentsCount = comments.count;
  responseData.lastPage = Math.ceil(comments.count / 20);
  res.json(responseData);
};

module.exports = { readPost, readComment };
