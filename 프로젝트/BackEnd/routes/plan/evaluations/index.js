var express = require("express");
var router = express.Router();
const writeEvaluation = require("../../../lib/sequelize/plan/writePlan")
  .writeEvaluation;
const readEvaluation = require("../../../lib/sequelize/plan/readPlan")
  .readEvaluation;
const checkLogin = require("../../../lib/check/checkData").checkLogin;
const checkOwnBoard = require("../../../lib/check/checkData").checkOwnBoard;
const checkEvaluation = require("../../../lib/check/plan").checkEvaluation;
const deleteEvaluation = require("../../../lib/sequelize/plan/deletePlan")
  .deleteEvaluation;
const updateEvaluation = require("../../../lib/sequelize/plan/updatePlan")
  .updateEvaluation;
const reportEvaluation = require("../../../lib/sequelize/plan/reportPlanEvaluation");
// 댓글 작성
router.post("/", writeEvaluation, readEvaluation);

router.post("/report", reportEvaluation, readEvaluation);

// 해당 BO_CODE의 댓글 조회
router.get("/:PL_Code&:page", readEvaluation);

router.patch(
  "/",
  checkEvaluation,
  checkLogin,
  checkOwnBoard,
  updateEvaluation,
  readEvaluation
);

//router.delete("/:BC_Code",deleteComment, readComment);
router.delete(
  "/:PEV_Code&:page",
  checkEvaluation,
  checkLogin,
  checkOwnBoard,
  deleteEvaluation,
  readEvaluation
);

module.exports = router;
