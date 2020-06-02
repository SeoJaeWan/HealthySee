const jwt = require("jsonwebtoken");
const Token = require("../../models").token;
var today = require("../Date/time");
var moment = require('moment');

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
  console.log('쿠키 조회 결과 아래에');
  console.dir(req.cookies);
  console.log(token);

  if (!token) {
    console.log('토큰 없음!');
    return next();
  }

  try {
    console.log('토큰 발견!');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('엑세스 토큰 유효함')
    req.body.user = {
      username: decoded.username,
      email: decoded.email,
    };

    const now = Math.floor(Date.now() / 1000);

    if (decoded.exp - now < 60 * 25) {
      console.log('액세스 토큰 재생성');
      const token = getToken(req.body.user);
      console.log("엑세스토큰 재생성 완료");
      res.cookie("access_token", token, {
        maxAge: 1000 * 60 * 30, // 30분
        httpOnly: true,
      });
      console.log("엑세스토큰 쿠키세팅 완료");
      res.cookie("refresh_token", req.cookies.refresh, {
        maxAge: 1000 * 60 * 30, 
        httpOnly: true,
      });
      console.log("리프레쉬토큰 쿠키세팅 완료");
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
      console.log('리프레쉬 토큰 아래에 조회결과');
      console.log(refreshToken);
      if (refreshToken) {
        console.log("리프레쉬 토큰 & 엑세스 토큰 재생성 시작");
        console.log('시간 체크');
        
        if (moment.duration(moment().diff(moment(refreshToken.TK_Creation_Date).format('YYYY-MM-DD HH:mm:ss'))).asMilliseconds() < 60*60*24*25) {
          req.body.user = {
            username: refreshToken.TK_NickName,
            email: refreshToken.TK_Platform_Account,
          };
          console.log(req.body);

          const token = getToken(req.body.user);
          console.log("리프레쉬 토큰 & 엑세스 토큰 재생성 완료");
          res.cookie("access_token", token, {
            maxAge: 1000 * 60 * 30, // 30분
            httpOnly: true,
          });
          res.cookie("refresh_token", req.cookies.refresh, {
            maxAge: 1000 * 60 * 30, 
            httpOnly: true,
          });
        } else {
          // 리프레시 토큰기간 만료, db에서 삭제
          console.log('토큰 기간 만료, 디비 삭제 조치');
          Token.destroy({
            where: {
              TK_Refresh_Token: rftoken,
            },
          });
          req.body.user = {
            username: refreshToken.TK_NickName,
            email: refreshToken.TK_Platform_Account,
          };
          console.log(req.body);

          const token = getToken(req.body.user);
          const newRfToken = getRefreshToken();
          console.log("리프레쉬 토큰 & 엑세스 토큰 삭제후 재생성 완료");
          console.log('기간 체크');
          console.log(today);
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
          return next();
        }
      } else {
        // 리프레시 토큰 존재x , 다시 로그인
        console.log('DB에 토큰 존재 x 다시 로그인하시오');
        return next();
      }
    } else {
      console.log('쿠키에 토큰이 없음, 클라이언드에 headers 다시 한번 확인바람');
      return next();
    }
  }
};

module.exports = {
  getToken,
  getRefreshToken,
  jwtMiddleware,
};