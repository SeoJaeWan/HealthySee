const P_Log = require("../../../models").p_log;
const today = require("../../../lib/Date/time");

const loggingExercise = async (req, res, next) => {
  let {
    LO_Time,
    LO_Success_Count,
    LO_Fault_Count,
    LO_Re_Ref, // 하나의 로그에 ref를 추가하여 댓글과 대댓글처럼 DB에 저장
    Plan_PL_Code,
    user,
  } = req.body;

  if (LO_Re_Ref === "0")
    await P_Log.create({
      LO_Time,
      LO_Success_Count,
      LO_Fault_Count,
      Plan_PL_Code,
      LO_Player_NickName: user.username,
      LO_Creation_Date: today,
    }).then(async (log) => {
      await P_Log.update(
        { BC_Re_Ref: log.LO_Code },
        { where: { LO_Code: log.LO_Code } }
      );
    });
  else
    await P_Log.create({
      LO_Time,
      LO_Success_Count,
      LO_Fault_Count,
      Plan_PL_Code,
      LO_Player_NickName: user.username,
      LO_Re_Ref,
      LO_Creation_Date: today,
    });

  res.status(201).end();
};

module.exports = loggingExercise;
