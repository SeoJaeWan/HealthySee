const checkLogin = (req, res, next) => {
  if (!req.body.user) {
    res.status(401).end();
    return;
  }
  next();
};

const checkOwnBoard = (req, res, next) => {
  const { user, writerNickName } = req.body;
  console.log(req.body);

  if (writerNickName !== user.username) {
    res.status(403).end();
    return;
  }
  next();
};

module.exports = { checkLogin, checkOwnBoard };
