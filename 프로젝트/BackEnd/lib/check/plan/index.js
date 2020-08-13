const plan = require("../../../models").plan;

const checkOwnPlan = async (req, res, next) => {
  const { Plan_PL_Code } = req.body;

  if (!Plan_PL_Code) {
    res.status(400).end();
    return;
  }
  console.log(Plan_PL_Code);

  try {
    let Plan = await plan.findOne({
      where: { Plan_PL_Code },
    });

    if (!Plan) {
      res.status(404).end();
      return;
    }
    console.log(Plan);

    req.body.LO_Time = plan.LO_Time;
    next();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

module.exports = {
  checkOwnPlan,
};
