const Board = require("../../models").board;
var today = require("../../Date/time");

const writePost = async (req,res,next) => {
    var BO_Title = req.body.BO_Title;
    var BO_Content = req.body.BO_Content;
    
    console.log(BO_Content);
    var BO_Writer_NickName = req.body.user.username;
    var BO_Creation_Date = today;
    console.log(req.body);
 
    const board = await Board.create({
      BO_Title,
      BO_Content,
      BO_Writer_NickName,
      BO_Creation_Date
    })   

    req.params.BO_Code = board.BO_Code;
    req.body.self = true;
    next();
}

module.exports = writePost