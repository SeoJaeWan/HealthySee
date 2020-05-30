const B_Comment = require("../../models").b_comment;

const readComment = async (req, res, next) => {
  var BO_Code = req.params.BO_Code;
  console.log("작동2");
  var responseData = {};
  comments = await B_Comment.findAll({
    where: { Board_BO_Code: BO_Code },
    order: [
      ["BC_Re_Ref", "ASC"],
      ["BC_Code", "ASC"],
    ],
  });

  responseData.comments = comments;
  console.log("작동3");
  res.json(responseData);

};

module.exports = readComment;
