const Album = require("../../../models").album;
const picture = require("../../../models").picture;
const A_Comment = require("../../../models").a_comment;

const multer = require("multer");
var today = require("../../Date/time");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1000000000 },
});

const writeAlbum = async (req, res, next) =>{
  let {
    Account_AC_NickName,
    AL_Content,
    AL_Scope
  } = req.body;

  let album = await Album.create({
    Account_AC_NickName,
    AL_Content,
    AL_Scope,
    AL_Creation_Date : today
  });

  if(req.files){
    for(var i = 0 ; i < req.files.length; i++){

      await picture.create({
          P_Picture : req.files[i].buffer,
          Album_AL_Code: album.AL_Code
      });

    }
  }

  req.params.AL_Code = album.AL_Code;
  req.body.self = true;
  next();
  // res.end();
}
module.exports = { writeAlbum, upload };
