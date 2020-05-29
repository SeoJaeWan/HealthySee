const BoardList = require("../../models").boardlist;
const { Op } = require("sequelize");

const readList = async (req, res, next) => {
  var responseData = {};
  var BO_CODE = req.params.BO_CODE ? req.params.BO_CODE : "";

  console.log(BO_CODE ? "있다" : "");

  var boardList = await BoardList.findAll(
    BO_CODE
      ? { where: { BO_CODE: { [Op.lt]: BO_CODE } }, limit: 10 }
      : { where: {}, limit: 10 }
  );

  responseData.boardList = boardList;
  res.json(responseData);
};

module.exports = readList;
