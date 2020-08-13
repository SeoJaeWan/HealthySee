const Album = require("../../models").album;
const Plan = require("../../models").plan;

const checkUser = (req, res) => {
  const { user } = req.body;

  res.json(user);
};

const checkLogin = (req, res, next) => {
  if (!req.body.user) {
    res.status(401).end();
    return;
  }
  next();
};

const checkToken = (req, res, next) => {
  next();
};

const checkOwnBoard = (req, res, next) => {
  const { user, writerNickName } = req.body;
  console.log(req.body);

  if (writerNickName !== user.username) {
    res.status(403).end();
    return;
  }
  next();
};

const checkOwnAlbum = async (req, res, next) => {
  const { user, writerNickName, AL_Code } = req.body;
  console.log(req.body);

  let album = await Album.findOne({
    where: { AL_Code },
  });
  if (album.Account_AC_NickName !== user.username) {
    res.status(403).end();
    return;
  }

  next();
};

const checkOwnPlan = async (req, res, next) => {
  const { Plan_PL_Code } = req.body;

  if (!Plan_PL_Code) {
    res.status(400).end();
    return;
  }
  console.log(Plan_PL_Code);

  try {
    let plan = await Plan.findOne({
      where: { Plan_PL_Code },
    });

    if (!plan) {
      res.status(404).end();
      return;
    }
    console.log(plan);

    next();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

module.exports = {
  checkUser,
  checkLogin,
  checkOwnBoard,
  checkOwnAlbum,
  checkToken,
  checkOwnPlan,
};
