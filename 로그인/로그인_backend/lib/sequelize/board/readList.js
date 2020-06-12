const BoardList = require("../../../models").boardlist;
const { Op } = require("sequelize");
const readlList = async (req, res, next) => {
  name = req.query.name;
  keyword = req.query.keyword;
  BO_Code = req.query.BO_Code;
  category = req.query.category;
  console.log(BO_Code);
  var responseData = {};
  var condition = {
    where: {
      [Op.and]: [
        name
          ? (name === 'BO_Title')
              ?{BO_Title: { [Op.like]: "%" + keyword + "%" },}
              :{ BO_Writer_NickName: { [Op.like]: "%" + keyword + "%" },}
          : null,
        BO_Code
         ?{ BO_Code: { [Op.lt]: BO_Code } }
         : null,
        { BO_Category: category },
      ],
    },
    limit: 10,
  };
  var boardList = await BoardList.findAll(condition);
  responseData.boardList = boardList;
  return res.json(responseData);
};


module.exports = readlList;
