const Album = require("../../models").album;

const checkLogin = (req, res, next) => {
  if (!req.body.user) {
    res.status(401).end();
    return;
  }
  next();
};

const checkToken = (req, res, next) => {
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

const checkOwnAlbum = async (req, res, next)  => {
  const { user, writerNickName ,AL_Code } = req.body;
  console.log(req.body);
  if(req.method === "POST"){
    let album = await Album.findOne({
      where : {AL_Code}
    });
    if(album.Account_AC_NickName !== user.username){
      res.status(403).end();
      return;
    }
  }else if (writerNickName !== user.username) {
    res.status(403).end();
    return;
  }
  next();
};

module.exports = { checkLogin, checkOwnBoard, checkOwnAlbum, checkToken };

