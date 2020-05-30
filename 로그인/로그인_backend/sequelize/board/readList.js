const BoardList = require("../../models").boardlist;
const { Op } = require("sequelize");

const readList = async (req, res, next) => {
  console.log('아아');
  var responseData = {};
  var BO_Code = req.params.BO_Code ? req.params.BO_Code : "";

  console.log(BO_Code ? "있다" : "");

  var boardList = await BoardList.findAll(
    BO_Code
      ? { where: { BO_Code: { [Op.lt]: BO_Code } }, limit: 10 }
      : { where: {}, limit: 10 }
  );

  responseData.boardList = boardList;
  res.json(responseData);
};

module.exports = readList;
