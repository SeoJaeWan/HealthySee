const PlanLog = require("../../../models").p_log;
const today = require("../../../lib/Date/time");

const loggingExercise = async (req, res, next) => {
  let {
    LO_Time,
    LO_Success_Count,
    LO_Fault_Count,
    Plan_PL_Code,
    LO_Index_Date,
    user,
  } = req.body;

  await PlanLog.create({
    LO_Time,
    LO_Success_Count,
    LO_Fault_Count,
    Plan_PL_Code,
    LO_Player_NickName: user.username,
    LO_Creation_Date: today,
    LO_Index_Date,
  });

  res.status(201).end();
};

module.exports = loggingExercise;
