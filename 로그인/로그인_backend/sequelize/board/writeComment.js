const B_Comment = require("../../models").b_comment;

const writeComment = async (req, res, next) => {
  var BC_Content = req.body.BC_Content;
  var BC_RE_REF = req.body.BC_RE_REF;

  if (BC_RE_REF === "0")
    await B_Comment.create({
      BC_Content,
      Board_BO_Code,
    }).then(async (Comment) => {
      B_Comment.update(
        { BC_RE_REF: Comment.BC_Code },
        { where: { BC_Code: Comment.BC_Code } }
      );
    });
  else
    await B_Comment.create({
      BC_Content,
      Board_BO_Code,
      BC_RE_REF,
    });

  next();
};

module.exports = writeComment;
