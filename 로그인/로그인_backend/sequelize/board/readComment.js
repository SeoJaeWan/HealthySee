const B_Comment = require("../../../models").b_comment;

const readComment = async (req, res) => {
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
};

module.exports = readComment;
