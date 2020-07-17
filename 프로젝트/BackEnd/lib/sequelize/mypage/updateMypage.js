const Member = require("../../../models").member;
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
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

  console.log(req.body);

  let { buffer, mimetype } = req.file
    ? req.file
    : { buffer: null, mimetype: null };

  console.log("dsasadsadsadsda", buffer, mimetype);
  let mypage = await Member.update(
    {
      ME_Scope,
      ME_Weight,
      ME_Height,
      ME_Birth,
      ME_Gender,
      ME_Profile_Photo: buffer,
      ME_Profile_Type: mimetype,
    },
    { where: { Account_AC_NickName } }
  );
  req.params.username = req.body.Account_AC_NickName;
  req.params.owner = req.body.Account_AC_NickName;
  next();
};

module.exports = { updateMypage, upload };
