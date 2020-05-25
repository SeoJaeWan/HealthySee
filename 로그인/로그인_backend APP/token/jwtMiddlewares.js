const jwt = require("jsonwebtoken");

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

const jwtMiddleware = async (req, res, next) => {
  const token = req.cookies.access_token;

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
    return next();
  }
};

module.exports = {
  getToken: getToken,
  jwtMiddleware: jwtMiddleware,
};
