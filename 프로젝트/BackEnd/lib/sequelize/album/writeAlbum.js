const Album = require("../../../models").album;
const picture = require("../../../models/picture").picture;
const A_Comment = require("../../../models").a_comment;

const multer = require("multer");
var today = require("../../Date/time");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1000000000 },
});

const writeAlbum = async (req, res, next) => {
  let { Account_AC_NickName, AL_Content, AL_Scope } = req.body;
  console.log("이거왜 안돼");
  console.log("adssadsadsadsdadsasda", req.file);
  console.log("adssadsadsadsdadsasda", req.files);
  let { buffer, mimetype } = req.files
    ? req.file
    : { buffer: null, mimetype: null };
  // let Album = await Member.create(
  //   {
  //     AL_Picture : buffer,
  //     AL_Content,
  //     AL_Creation_Date : today,
  //     AL_Scope,
  //     Account_AC_NickName
  //   }
  // );
  // let pictures = picture.create({
  //   P_Picture =
  // });
  // req.params.username = Album.Account_AC_NickName;
  // req.body.self = true;
  // next();
  res.end();
};
module.exports = { writeAlbum, upload };
