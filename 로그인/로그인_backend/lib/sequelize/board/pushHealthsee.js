const B_Healthsee = require("../../../models").b_healthsee;
const BoardList = require("../../../models").boardlist;
var today = require("../../Date/time");

const pushHealthsee = async (req, res) => {
  var Board_BO_Code = req.body.BO_Code;
  var BH_Push_NickName = req.body.user.username;
  var response = {};
  await B_Healthsee.create({
    BH_Push_NickName: BH_Push_NickName,
    BH_Creation_Date: today,
    Board_BO_Code: Board_BO_Code,
  });

  var boardList = await BoardList.findOne({
    where: { BO_Code: Board_BO_Code },
  });
  response.isHealthsee = true;
  response.BO_Healthsee_Count = boardList.BO_Healthsee_Count;

  console.log(response, "여기다씨발");

  res.json(response);
};

module.exports = pushHealthsee;
