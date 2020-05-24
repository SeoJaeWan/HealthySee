var express = require("express");
var router = express.Router();
var passport = require("passport");
const Account = require("../models").account;
const jwt = require('jsonwebtoken');

const key = 'default_key';

router.post("/register", async (req, res) => {
  console.log(req.body.sid);
  req.sessionID = req.body.sid;
  console.log(req.session);
  const acc = {
    "paramNickName": req.body.nickname || req.query.nickname,
    "paramScope": req.body.scope || req.query.scope,
    "paramWeight": req.body.weight.toString(),
    "paramGender": req.body.gender.toString(),
    "paramPlatform": req.body.platform || req.query.platform,
    "paramName": req.body.username || req.query.username,
    "paramEmail": req.body.Email || req.query.Email,
    "paramReportedCount": '0',
    "paramState": '0'
  };

  console.log('요청 파라미터 : ' + acc.paramNickName + " + " +
    acc.paramScope + " + " + acc.paramWeight + " + " + acc.paramGender + " + " + acc.paramName + " + " +
    acc.paramPlatform + " + " + acc.paramEmail + " + " + acc.paramReportedCount + " + " + acc.paramState);

  const user = await Account.findOne({
    where: {
      AC_NickName: acc.paramNickName,
    },
  });
  if(user) {
    console.log('닉네임중복 발생');
    res.sendStatus(400);
  } else {
    await Account.create({
      AC_NickName: acc.paramNickName,
      AC_Name: acc.paramName,
      AC_Platform: acc.paramPlatform,
      AC_Platform_Account: acc.paramEmail,
      AC_Creation_Date: Date.now(),
      AC_Last_Access_Date: Date.now(),
      AC_Reported_Count: acc.paramReportedCount,
      AC_Scope: acc.paramScope,
      AC_Weight: acc.paramWeight,
      AC_State: acc.paramState,
      AC_Gender: acc.paramGender,
    }).then((result) => { res.sendStatus(200);})
    .catch((err) => console.log(err));
  }
});

router.get("/kakaologin", passport.authenticate("kakao"));

router.get(
  "/kakaoAuth/callback", //callback uri modified
  passport.authenticate("kakao", {
    successRedirect: "/auth",
    failureRedirect: "/login/kakao",
  })
);

router.get("/", async (req, res) => {
  const platform = req.session.passport.user.profile;
  const profile = JSON.parse(platform._raw);
  // const token = jwt.sign({id : platform.username,
  //                  email : profile.kakao_account.email},);
  //console.log(process.env.MYSQL_HOST);
  const user = await Account.findOne({
    where: {
      AC_Platform: platform.provider,
      AC_Platform_Account: profile.kakao_account.email,
    },
  });
  // const token = jwt.sign({id : user.AC_NickName,
  //   email : user.AC_Platform_Account},key);
  //console.log(token);
  console.log(user);
  if (!user) {
    console.log("DB 조회 결과 없음!");
    req.session.info = platform;
    console.log(platform.username);

    res.send(platform.username + ":" + profile.kakao_account.email + ":" + platform.provider);
    //res.redirect("/");
  }
});
module.exports = router;
