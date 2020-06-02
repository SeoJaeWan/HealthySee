const B_Reporter = require("../../../models").b_reporter;
const BoardList = require("../../../models").boardlist;
var today = require("../../Date/time");

const pushHealthsee = async (req, res) => {
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

  console.log(response);

  res.json(response);
};

module.exports = pushHealthsee;
