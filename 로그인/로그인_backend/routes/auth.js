var express = require("express");
var router = express.Router();

var today = require("../Date/time");
var passport = require("passport");
const Account = require("../models").account;
const Token = require('../models').token;

const getToken = require("../token/jwtMiddlewares").getToken;
const getRefresh = require("../token/jwtMiddlewares").getRefreshToken;

const platforms = {
  kakao: 1,
  naver: 2,
  google: 3,
};

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/check",
  passport.authenticate("kakao", {
    successRedirect: "/auth",
    failureRedirect: "/login/kakao",
  })
);

router.post("/login", async (req, res) => {
  const profile = {
    name: req.body.name,
    platform: req.body.platform,
    email: req.body.plaform,
  };

  console.log(platform);

  const user = await Account.findOne({
    where: {
      AC_Platform: platforms[profile.platform],
      AC_Platform_Account: profile.email,
    },
  });

  if (!user) {
    console.log("DB 조회 결과 없음!");
    res.redirect("http://localhost:3000/Signup");
  }

  const tokenInfo = {
    username: user.AC_NickName,
    email: user.AC_Platform_Account,
  };

  const token = getToken(tokenInfo);
  const refresh = getRefresh();

  res.cookie("access_token", token, {
    maxAge: 1000 * 60 * 30, // 30분
    httpOnly: true,
  });
if(res.cookies.profile.A_type){
  res.cookie("refresh_token", refresh, {
    maxAge: 1000 * 60 * 30, // 30분 쿠키에 제한 시간을 주어 웹에서는 리플레시토큰을 사용하지 못하게 하였다.
    httpOnly: true,
  });
}
  res.redirect("http://localhost:3000/");
});

router.post("/register", async (req, res) => {

  console.dir(req.cookies);
  console.log(req.body);
  const {nickname, gender, weight, scope, name, platform, email, type} = req.body;
    //{ name, platform, email} = req.session.info; 쿠키 같이 쓰기로

  const user = await Account.findOne({
    where: {
      AC_NickName: nickname,
    },
  });

  if (user) {
    console.log("닉네임 중복");
    res.status(409).send("Conflict!");
  } else {
    await Account.create({
      AC_NickName: nickname,
      AC_Gender: gender,
      AC_Weight: weight,
      AC_Scope: scope,
      AC_Name: name,
      AC_Platform: platforms[platform],
      AC_Platform_Account: email,
      AC_Creation_Date: today,
      AC_Last_Access_Date: today,
    });
  }
  const tokenInfo = {
    username: nickname,
    email: email,
  };

  const accesstoken = getToken(tokenInfo);//token -> accesstoken
  const refresh = getRefresh();
  
  await Token.create({
    TK_Refresh_Token : refresh,
    TK_NickName : nickname,
    TK_Platform_Account : tokenInfo.email,
    TK_Creation_Date : today
  });

  res.cookie("access_token", accesstoken, {
    maxAge: 1000 * 60 * 30, // 30분
    httpOnly: true,
  });
  if(type){
    res.cookie("refresh_token", refresh, {
    maxAge: 1000 * 60 * 30, // 30분
    httpOnly: true,
  });
}
  

  res.json(tokenInfo);
});

router.get("/check", async (req, res) => {
  const { user } = req.body;
  // console.log(req.cookies.access_token);
  // console.log(req.cookies.refresh);
 
  if (!user) {
    res.status(401).send("Not Login");
    return;
  }
  res.json(user);
});

module.exports = router;
