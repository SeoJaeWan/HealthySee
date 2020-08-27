const Plan = require("../../../models").plan;

// Plan Code가 존재하는지 확인
const checkOwnPlan = async (req, res, next) => {
  const { plan } = req.body;

  if (!plan) {
    next();
  }

  try {
    let plan = await Plan.findOne({
      where: { PL_Code: plan },
    });

    if (!plan) {
      res.status(404).end();
      return;
    }

    next();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

module.exports = {
  checkOwnPlan,
};
