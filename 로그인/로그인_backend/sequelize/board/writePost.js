const Board = require("../../models").board;

const writePost = (req,res,next) => {
    var BO_TITLE = req.body.BO_TITLE;
    var BO_CONTENT = req.body.BO_CONTENT;
    var BO_Writer_NickName = req.body.user.username;
 
    const board = await Board.create({
      BO_TITLE,
      BO_CONTENT,
      BO_Writer_NickName
    })   

    req.params.BO_CODE = board.BO_CODE;
    req.body.self = true;
    next();
}

module.exports = writePost