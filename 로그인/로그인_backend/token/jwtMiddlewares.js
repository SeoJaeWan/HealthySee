const jwt = require("jsonwebtoken");
const Token = require("../models").token;
var today = require("../Date/time");

const getToken = ({ username, email }) => {
  const token = jwt.sign(
    {
      username: username,
      email: email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "30m" }
  );

  return token;
};

const getRefreshToken = () => {
  const token = jwt.sign({}, process.env.JWT_SECRET, { expiresIn: "30d" });

  return token;
};

const jwtMiddleware = async (req, res, next) => {
  const token = req.cookies.access_token;
  console.dir(req.cookies);
  console.log(token);

  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.body.user = {
      username: decoded.username,
      email: decoded.email,
    };

    const now = Math.floor(Date.now() / 1000);

    if (decoded.exp - now < 60 * 30) {
      console.log('액세스 토큰 재생성');
      const token = getToken(req.body.user);
      console.log("엑세스토큰 재생성 완료");
      const arftoken = getRefreshToken();
      console.log("리프레쉬토큰 재생성 완료");
      res.cookie("access_token", token, {
        maxAge: 1000 * 60 * 30, // 30분
        httpOnly: true,
      });
      console.log("엑세스토큰 쿠키세팅 완료");
      res.cookie("refresh_token", arftoken, {
        maxAge: 1000 * 60 * 30, 
        httpOnly: true,
      });
      console.log("리프레쉬토큰 쿠키세팅 완료");
       await Token.create({
        TK_Refresh_Token : arftoken,
        TK_NickName : req.body.user.username,
        TK_Platform_Account : req.body.user.email,
        TK_Creation_Date : today
      });
      console.log("리프레쉬 디비세팅 완료");
    }

    return next();
  } catch (error) {
    console.log('토큰 생성중 에러발생');
    const rftoken = req.cookies.refresh;
    if (rftoken) {
      const refreshToken = await Token.findOne({
        where: {
          TK_Refresh_Token: rftoken,
        },
      });
      console.log(refreshToken);
      if (refreshToken) {
        console.log("엑세스 토큰 재생성 시작");
        var date =
          ((Date.now() - Date(refreshToken.TK_Creation_Date)) / 24) *
          60 *
          60 *
          1000;
        if (parseInt(date) > 0) {
          req.body.user = {
            username: refreshToken.TK_NickName,
            email: refreshToken.TK_Platform_Account,
          };
          console.log(req.body);

          const token = getToken(req.body.user);
          newRfToken = getRefreshToken();
          await Token.create({
            TK_Refresh_Token : newRfToken,
            TK_NickName : refreshToken.TK_NickName,
            TK_Platform_Account : refreshToken.TK_Platform_Account,
            TK_Creation_Date : today
          });
          res.cookie("access_token", token, {
            maxAge: 1000 * 60 * 30, // 30분
            httpOnly: true,
          });
          res.cookie("refresh_token", newRfToken, {
            maxAge: 1000 * 60 * 30, 
            httpOnly: true,
          });
        } else {
          // 리프레시 토큰기간 만료, db에서 삭제
          Token.destroy({
            where: {
              TK_Refresh_Token: rftoken,
            },
          });
          
          return next();
        }
      } else {
        // 리프레시 토큰 존재x , 다시 로그인
        return next();
      }
    } else {
      return next();
    }
  }
};

module.exports = {
  getToken,
  getRefreshToken,
  jwtMiddleware,
};
