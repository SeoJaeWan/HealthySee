const Member = require("../../../models").member;
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./upload/profile",
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000000 },
});

const updateMypage = async (req, res, next) => {
  let {
    ME_Scope,
    ME_Weight,
    ME_Height,
    ME_Birth,
    ME_Gender,
    Account_AC_NickName,
  } = req.body;

  console.log("asdasdasdasdsaddsaaaaaa", req.body, req.files);
  let fileString = "";
  if (req.files.length > 0) {
    fileString = req.files[0].filename;
  }

  let ME_Profile_Photo = fileString;

  console.log(ME_Profile_Photo);
  let mypage = await Member.update(
    {
      ME_Scope,
      ME_Weight,
      ME_Height,
      ME_Birth,
      ME_Gender,
      ME_Profile_Photo,
    },
    { where: { Account_AC_NickName } }
  );

  res.json(mypage);
};

module.exports = { updateMypage, upload };
