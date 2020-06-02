const checkLogin = (req, res, next) => {
  console.log("여기오ㅓㅏ써용2", req.body.user);
  if (!req.body.user) {
    res.status(401).end();
    return;
  }
  next();
};

const checkOwnPost = (req, res, next) => {
  console.log("여기오ㅓㅏ써용3");
  const { user, code } = req.body;
  console.log(req.body);

  if (code !== user.username) {
    res.status(403).end();
    return;
  }
  next();
};

module.exports = checkOwnPost;

module.exports = { checkLogin, checkOwnPost };
