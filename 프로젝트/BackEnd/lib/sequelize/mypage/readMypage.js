const Member_View = require("../../../models").member_view;
const { Op } = require("sequelize");

const readMyPage = async (req, res, next) => {
  let owner = req.params.owner;
  let user = req.body.user.username;

  let member = await Member_View.findOne({
    where: { Account_AC_NickName: owner },
  });

  if (!member) {
    console.log("DB조회 결과 없음");
    res.status(401).end();
    return;
  } else if (member.ME_Scope === 1 && user !== owner) {
    res.status(406).end();
    return;
  }

  res.json(member);
};

/**
 * 사람을 검색할 때 프로필 사진, 이름을 받아오는 메소드.
 */
const readMyPages = async (req, res, next) => {
  let user = req.body.user.username;
  let keyword = req.query.keyword;
  let ME_Code = req.query.ME_Code;
  let responseData = {}
  console.log(user, keyword, ME_Code);
  let condition = {
    where: {
      [Op.and]: [
        { Account_AC_NickName : {  [Op.like]: "%" + keyword + "%" },},
        {Account_AC_NickName : {[Op.ne]: user }},
        ME_Code && { ME_Code: { [Op.lt]: BO_Code } },
      ],
    }, 
    order: [ ["ME_Code", "DESC"],],
    limit: 10,
  };

  let member = await Member_View.findAndCountAll(condition);

  responseData.userList = member.rows;
  responseData.userCount = member.count;

  res.json(responseData);
}

module.exports = {readMyPage, readMyPages};
