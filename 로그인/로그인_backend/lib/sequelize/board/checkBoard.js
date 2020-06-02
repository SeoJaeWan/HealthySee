const BoardDetail = require("../../../models").boarddetail;
const B_Comment = require("../../../models").b_comment;

const checkPost = async (req, res, next) => {
  const BO_Code = req.params.BO_Code;
  console.log("여기 와ㅣㅆ어용1");

  if (!BO_Code) {
    res.status(400).end();
    return;
  }
  console.log(BO_Code);

  try {
    const post = await BoardDetail.findOne({ where: { BO_Code } });

    if (!post) {
      res.status(404).end();
      return;
    }
    console.log(post);

    req.body.code = post.BO_Writer_NickName;
    next();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

const checkComment = async (req, res, next) => {
  const BC_Code = req.params.BC_Code;

  if (!BC_Code) {
    res.status(400).end();
    return;
  }

  try {
    const comment = await B_Comment.findOne({ where: BC_Code });

    if (!comment) {
      res.status(404).end();
      return;
    }

    req.body.code = comment.BC_Writer_NickName;
    next();
  } catch (error) {
    res.status(500).end();
  }
};

module.exports = { checkPost, checkComment };
