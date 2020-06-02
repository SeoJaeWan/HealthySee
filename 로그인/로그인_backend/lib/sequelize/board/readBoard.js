const BoardDetail = require("../../../models").boarddetail;
const B_Comment = require("../../../models").b_comment;
const Board = require("../../../models").board;

const readPost = async (req, res, next) => {
  var BO_Code = req.params.BO_Code;

  var self = req.body.self;

  var responseData = {};

  if (!self) Board.increment("BO_Hit", { where: { BO_Code: BO_Code } });

  var BoardD = await BoardDetail.findOne({
    where: { BO_Code },
  });
  var comments = await B_Comment.findAll({
    where: { Board_BO_Code: BO_Code },
  });
  responseData.boardDetail = BoardD;
  responseData.comments = comments;

  return res.json(responseData);
};

const readComment = async (req, res, next) => {
  var BO_Code = req.params.BO_Code;

  var responseData = {};
  comments = await B_Comment.findAll({
    where: { Board_BO_Code: BO_Code },
    order: [
      ["BC_Re_Ref", "ASC"],
      ["BC_Code", "ASC"],
    ],
  });

  responseData.comments = comments;

  res.json(responseData);
};

module.exports = { readPost, readComment };
