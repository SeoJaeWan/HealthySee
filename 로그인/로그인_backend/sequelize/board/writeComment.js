const B_Comment = require("../../models").b_comment;
var today = require("../../Date/time");

const writeComment = async (req, res, next) => {
  var BC_Content = req.body.BC_Content;
  var BC_Re_Ref = req.body.BC_Re_Ref;
  var Board_BO_Code = req.body.Board_BO_Code;
  var BC_Writer_NickName = req.body.user.username;
  var BC_Creation_Date = today;
  if (BC_Re_Ref === "0")
    await B_Comment.create({
      BC_Content,
      Board_BO_Code,
      BC_Writer_NickName,
      BC_Creation_Date
    }).then(async (Comment) => {
      await B_Comment.update(
        { BC_Re_Ref: Comment.BC_Code },
        { where: { BC_Code: Comment.BC_Code } }
      );
    });
  else
    await B_Comment.create({
      BC_Content,
      Board_BO_Code,
      BC_Re_Ref,
      BC_Writer_NickName,
      BC_Creation_Date
    });
    req.params.BO_Code = Board_BO_Code;
    console.log("작동");
  next();
};

module.exports = writeComment;
