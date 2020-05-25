var express = require("express");
var router = express.Router();

var today = require("../Date/time");
var passport = require("passport");
const Account = require("../models").account;

const getToken = require("../token/jwtMiddlewares").getToken;
const requestIp = require("request-ip");

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

router.get("/", async (req, res) => {
  const platform = req.session.passport.user.profile;
  const kakaoAccount = JSON.parse(platform._raw);
  const profile = {
    name: platform.username,
    platform: platform.provider,
    email: kakaoAccount.kakao_account.email,
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
    req.session.info = profile;
    // console.log(req.session);
    res.redirect("http://localhost:3000/Signup");
  }

  const tokenInfo = {
    username: user.AC_NickName,
    email: user.AC_Platform_Account,
  };

  const token = getToken(tokenInfo);

  res.cookie("access_token", token, {
    // maxAge: 1000 * 60 * 30, // 30분
    httpOnly: true,
  });

  res.redirect("http://localhost:3000/");
});

router.post("/register", async (req, res) => {
  const {
      nickname,
      gender,
      weight,
      scope,
      A_name,
      A_platform,
      A_email,
    } = req.body,
    { name, platform, email } = req.session.info;

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
      AC_Name: A_name ? A_name : name,
      AC_Platform: A_platform ? platforms[A_platform] : platforms[platform],
      AC_Platform_Account: A_email ? A_email : email,
      AC_Creation_Date: today,
      AC_Last_Access_Date: today,
    });
  }
  const tokenInfo = {
    username: nickname,
    email: A_email ? A_email : email,
  };

  const token = getToken(tokenInfo);

  res.cookie("access_token", token, {
    maxAge: 1000 * 60 * 30, // 30분
    httpOnly: true,
  });

  res.json(tokenInfo);
});

router.get("/check", async (req, res) => {
  const { user } = req.body;

  if (!user) {
    res.status(401).send("Not Login");
    return;
  }
  res.json(user);
});

module.exports = router;
