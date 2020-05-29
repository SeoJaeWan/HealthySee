const getToken = require("../../token/jwtMiddlewares").getToken;
const getRefresh = require("../../token/jwtMiddlewares").getRefreshToken;

const sendToken = (req, res) => {
  const { nickname, email } = req.body;
  const tokenInfo = {
    username: nickname,
    email: email,
  };

  const token = getToken(tokenInfo);
  res.cookie("access_token", token, {
    maxAge: 1000 * 60 * 30, // 30분
    httpOnly: true,
  });

  const refresh = getRefresh();
  if (req.body.type) {
    res.cookie("refresh_token", refresh, {
      maxAge: 1000 * 60 * 30, // 30분 쿠키에 제한 시간을 주어 웹에서는 리플레시토큰을 사용하지 못하게 하였다.
      httpOnly: true,
    });
  }

  res.json(tokenInfo);
};

module.exports = sendToken;
