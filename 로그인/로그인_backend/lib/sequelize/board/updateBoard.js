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
  let BO_Code = req.params.BO_Code;
  let BO_Category = req.body.BO_Category;
  let BO_Title = req.body.BO_Title;
  let BO_Content = req.body.BO_Content;
  let leaveFile = req.body.leaveFile;
  let fileString = leaveFile;
  if (req.files) {
    for (let i = 0; i < req.files.length; i++) {
      if (fileString !== null && fileString !== "")
        fileString = fileString + "," + req.files[i].filename;
      else fileString = req.files[i].filename;
    }
  }
  let BO_File = req.files ? fileString : "";
  let BO_Writer_NickName = req.body.username;
  let BO_Creation_Date = today;
  const board = await Board.update(
    {
      BO_Code,
      BO_Category,
      BO_Title,
      BO_Content,
      BO_Writer_NickName,
      BO_File,
      BO_Creation_Date,
    },
    { where: { BO_Code } }
  );

  req.body.self = true;
  next();
};

const updateComment = async (req, res, next) => {
  var BC_Code = req.body.BC_Code;
  var BC_Content = req.body.BC_Content;

  var comment = await B_Comment.findOne({
    where: { BC_Code },
  });
  req.params.BO_Code = comment.Board_BO_Code;

  await B_Comment.update({ BC_Content }, { where: { BC_Code: BC_Code } });
  req.params.page = req.body.page;
  console.log("asdasd", req.body.page);
  next();
};

module.exports = { updatePost, updateComment };
