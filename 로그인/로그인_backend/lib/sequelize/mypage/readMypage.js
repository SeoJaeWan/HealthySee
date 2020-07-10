const Member = require("../../../models").member;
var path = require("path");
const fs = require("fs");

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
  console.log(member);

  var file = path.join(
    __dirname,
    "../../../upload/profile/1594363572443sque - 복사본.jpg"
  );

  // fs.readFile(file, (err, data) => {
  //   res.writeHead(200, { "Content-Type": "image/jpg" });
  //   res.write(data);
  //   res.end();
  // });
  res.json(member);
};

// 파일 다운로드

module.exports = readMyPage;
