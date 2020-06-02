const B_Comment = require("../../../models").b_comment;

const deleteComment = async (req, res, next) => {
  var BC_Code = req.params.BC_Code;
  var comment = await B_Comment.findOne({
    where: { BC_Code },
  });

  req.params.BO_Code = comment.Board_BO_Code;
  console.log(req.params.BO_Code);

  B_Comment.destroy({ where: { BC_Code } })
    .then((affectedRows) => {
      if (affectedRows === 1) {
        // req.params.result = 1;
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(401).end();
    });
};

module.exports = deleteComment;
