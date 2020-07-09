const Member = require("../../../models").member;
var today = require("../../../lib/Date/time");
const updateMypage = async (req, res, next) => {
  console.log(req.body);

  let {
    ME_Scope,
    ME_Weight,
    ME_Height,
    ME_Birth,
    Account_AC_NickName,
  } = req.body;

  let mypage = Member.update(
    {
      ME_Scope,
      ME_Weight,
      ME_Height,
      ME_Birth,
    },
    { where: { Account_AC_NickName } }
  );
  console.log(mypage);
  res.json(mypage);
};

module.exports = updateMypage;
