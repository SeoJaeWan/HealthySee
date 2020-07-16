const Member_View = require("../../../models").member_view;

const readMyPage = async (req, res, next) => {
  let owner = req.params.owner;
  let user = req.params.username;

  let member = await Member_View.findOne({
    where: { Account_AC_NickName: owner },
  });

  console.log(
    member.ME_Scope === 1 && !user && user !== owner,
    user,
    owner,
    req.params
  );

  if (!member) {
    console.log("DB조회 결과 없음");
    res.status(401).end();
    return;
  } else if (member.ME_Scope === 1 && !user && user !== owner) {
    res.status(406).end();
    return;
  }

  console.log(member);

  res.json(member);
};

// 파일 다운로드

module.exports = readMyPage;
