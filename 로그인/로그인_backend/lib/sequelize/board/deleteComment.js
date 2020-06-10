const B_Comment = require("../../../models").b_comment;

const deleteComment = async (req, res, next) => {
  var BC_Code = req.params.BC_Code;
  var comment = await B_Comment.findOne({
    where: { BC_Code },
  });

  req.params.BO_Code = comment.Board_BO_Code;
  console.log(req.params.BO_Code);
  await B_Comment.update({BC_Content : "삭제된 댓글 입니다."},{where : {BC_Code}})
    .catch((err) => {
      console.error(err);
      res.status(401).end();
    });
    next();
};

module.exports = deleteComment;
