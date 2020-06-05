const B_Healthsee = require("../../../models").b_reporter;
const BoardList = require("../../../models").boardlist;
var today = require("../../Date/time");

const unDoReportPost = async (req, res) => {
  var Board_BO_Code = req.params.BO_Code;
  var BR_Reporter_NickName = req.body.user.username;
  var response = {};
  await B_Healthsee.destroy({
    where: {
      Board_BO_Code: Board_BO_Code,
      BR_Reporter_NickName: BR_Reporter_NickName,
    },
  });

  var boardList = await BoardList.findOne({
    where: { BO_Code: Board_BO_Code },
  });
  response.isReport = false;
  response.BO_Report_Count = boardList.BO_Report_Count;

  console.log(response);

  res.json(response);
};

module.exports = unDoReportPost;
