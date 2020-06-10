const Board = require("../../../models").board;
const B_Comment = require("../../../models").b_comment;

var today = require("../../Date/time");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./upload/",
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000000 },
});

const writePost = async (req, res, next) => {
  console.log(req.body);
  var BO_Category = req.body.BO_Category;
  var BO_Title = req.body.BO_Title;
  var BO_Content = req.body.BO_Content;
  var fileString = ""
  if(req.files){
    for(var i = 0; i < req.files.length; i++){
      fileString = fileString + (req.files[i].filename);
      if( i < req.files.length - 1){
        fileString = fileString + ',';
      }
      
    }
  }
  var BO_File = req.files ? fileString : "";
  var BO_Writer_NickName = req.body.username;
  var BO_Creation_Date = today;

  const board = await Board.create({
    BO_Category,
    BO_Title,
    BO_Content,
    BO_Writer_NickName,
    BO_File,
    BO_Creation_Date
  });

  req.params.BO_Code = board.BO_Code;
  req.body.self = true;
  next();
};

const writeComment = async (req, res, next) => {
  var BC_Content = req.body.BC_Content;
  var BC_Re_Ref = req.body.BC_Re_Ref;
  var Board_BO_Code = req.body.Board_BO_Code;
  var BC_Writer_NickName = req.body.user.username;
  var BC_Creation_Date = today;

  if (BC_Re_Ref === "0")
    await B_Comment.create({
      BC_Content,
      Board_BO_Code,
      BC_Writer_NickName,
      BC_Creation_Date,
    }).then(async (Comment) => {
      await B_Comment.update(
        { BC_Re_Ref: Comment.BC_Code },
        { where: { BC_Code: Comment.BC_Code } }
      );
    });
  else
    await B_Comment.create({
      BC_Content,
      Board_BO_Code,
      BC_Re_Ref,
      BC_Writer_NickName,
      BC_Creation_Date,
    });
  req.params.BO_Code = Board_BO_Code;

  next();
};

module.exports = { writePost, writeComment, upload };
