const LevelOfDifficulty = require("../../../models").levelOfDifficulty;

const checkOwnPlan = async (req, res, next) => {
  const { LOD_Code } = req.body;

  if (!LOD_Code) {
    res.status(400).end();
    return;
  }
  console.log(LOD_Code);

  try {
    let LOD = await LevelOfDifficulty.findOne({
      where: { LOD_Code },
    });

    if (!LOD) {
      res.status(404).end();
      return;
    }
    console.log(LOD);

    req.body.LO_Time = LOD.LO_Time;
    next();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

module.exports = {
  checkOwnPlan,
};
