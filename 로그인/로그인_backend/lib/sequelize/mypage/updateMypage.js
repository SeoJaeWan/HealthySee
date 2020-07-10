const Member = require("../../../models").member;

const updateMypage = async (req, res, next) => {
  let {
    ME_Scope,
    ME_Weight,
    ME_Height,
    ME_Birth,
    ME_Gender,
    Account_AC_NickName,
  } = req.body;

  let mypage = await Member.update(
    {
      ME_Scope,
      ME_Weight,
      ME_Height,
      ME_Birth,
      ME_Gender,
    },
    { where: { Account_AC_NickName } }
  );

  res.json(mypage);
};

module.exports = updateMypage;
