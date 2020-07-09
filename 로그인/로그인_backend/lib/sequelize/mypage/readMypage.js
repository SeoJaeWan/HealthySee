const Member = require("../../../models").member;

const readMyPage = async (req, res, next) => {
  let user = req.params.username;

  let member = await Member.findOne({
    where: { Account_AC_NickName: user },
  });

  if (!member) {
    console.log("DB조회 결과 없음");
    res.status(401).end();
    return;
  }

  res.json(member);
};

module.exports = readMyPage;
