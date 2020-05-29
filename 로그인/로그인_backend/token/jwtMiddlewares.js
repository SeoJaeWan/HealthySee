const jwt = require("jsonwebtoken");
const Token = require('../models').token;

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
  console.log(req.cookies.access_token);
  console.log('asdf', token);
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
      const token = getToken(req.body.user);

      res.cookie("access_token", token, {
        maxAge: 1000 * 60 * 30, // 30분
        httpOnly: true,
      });
    }

    return next();
  } catch (error) {
    console.log(error);
    const rftoken = req.cookies.refresh;
    if (rftoken) {
      const refreshToken = await Token.findOne({
        where: {
          TK_Refresh_Token: rftoken,
        },
      });
      if (refreshToken) {
        console.log('엑세스 토큰 재생성 시작');
        var date = (Date.now() - Date(refreshToken.TK_Creation_Date)) / 24 * 60 * 60 * 1000;
        if (parseInt(date) > 0) {

            req.body.user = {
              username: refreshToken.TK_NickName,
              email: refreshToken.TK_Platform_Account,
            };

            const token = getToken(req.body.user);

            res.cookie("access_token", token, {
              maxAge: 1000 * 60 * 30, // 30분
              httpOnly: true,
            });        

        }else{
          // 리프레시 토큰기간 만료, db에서 삭제
          User.delete({
            where: {
              TK_Refresh_Token: rftoken,
            }
          });

          return next();
        }
      } else {
        // 리프레시 토큰 존재x , 다시 로그인
        return next();
      }
    }
    //쿠키에 존재x
    return next();
  }
};

module.exports = {
  getToken,
  getRefreshToken,
  jwtMiddleware,
};
