const BoardList = require("../../../models").boardlist;
const { Op } = require("sequelize");

const readList = async (req, res, next) => {
  var responseData = {};
  var BO_Code = req.params.BO_Code ? req.params.BO_Code : "";

  var boardList = await BoardList.findAll(
    BO_Code
      ? { where: { BO_Code: { [Op.lt]: BO_Code } }, limit: 10 }
      : { where: {}, limit: 10 }
  );

  responseData.boardList = boardList;
  return res.json(responseData);
};

module.exports = readList;
