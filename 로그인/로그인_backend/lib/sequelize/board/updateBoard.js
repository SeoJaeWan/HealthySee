const BoardDetail = require("../../../models").boarddetail;
const B_Comment = require("../../../models").b_comment;
const Board = require("../../../models").board;
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

const updatePost = async (req, res, next) => {
  console.log(req.body);
  var BO_Code = req.params.BO_Code;
  var BO_Category = req.body.BO_Category;
  var BO_Title = req.body.BO_Title;
  var BO_Content = req.body.BO_Content;
  var leaveFile = req.body.leaveFile;
  var fileString = leaveFile
  if(req.files){
    for(var i = 0; i < req.files.length; i++){
      if(fileString !== null && fileString !=="")
      fileString =fileString + "," + (req.files[i].filename);
      else
      fileString = req.files[i].filename;
    }
  }
  var BO_File = req.files ? fileString : "";
  var BO_Writer_NickName = req.body.username;
  var BO_Creation_Date = today;

  const board = await Board.update({
    BO_Category,
    BO_Title,
    BO_Content,
    BO_Writer_NickName,
    BO_File,
    BO_Creation_Date
  },{where:{BO_Code : BO_Code}});

  req.body.self = true;
  next();
};

const updateComment = async (req, res, next) => {
  var BC_Code = req.params.BC_Code;
  var BC_Content = req.body.BC_Content;

  var comment = await B_Comment.findOne({
    where: { BC_Code },
  });
  req.params.BO_Code = comment.Board_BO_Code;
  
  await B_Comment.update(
      {BC_Content},
    {where: { BC_Code: BC_Code },
  });
    next();
};

module.exports = { updatePost, updateComment };
