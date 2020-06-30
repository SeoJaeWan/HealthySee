const B_Reporter = require("../../../models").b_reporter;
const BoardList = require("../../../models").boardlist;
const Board = require("../../../models").board;
var today = require("../../Date/time");

const reportPost = async (req, res) => {
  var Board_BO_Code = req.body.BO_Code;
  var BR_Reporter_NickName = req.body.user.username;
  var response = {};
  await B_Reporter.create({
    BR_Reporter_NickName: BR_Reporter_NickName,
    BR_Creation_Date: today,
    Board_BO_Code: Board_BO_Code,
  });

  var boardList = await BoardList.findOne({
    where: { BO_Code: Board_BO_Code },
  });
  response.isReport = true;
  response.BO_Report_Count = boardList.BO_Report_Count;

  // 테스트를 위해 1개만 올려도 블라인드 처리
  if(boardList.BO_Report_Count > 0){
   await Board.update({BO_State:1},{where:{BO_Code : Board_BO_Code}});
   res.status(406).end();
  }
  else
    res.json(response);
};

module.exports = reportPost;
