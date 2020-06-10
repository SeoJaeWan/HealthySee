const BoardList = require("../../../models").boardlist;
const { Op } = require("sequelize");

const readGeneralList = async (req, res, next) => {
  var responseData = {};
  var BO_Code = req.params.BO_Code ? req.params.BO_Code : "";
  var boardList = await BoardList.findAll(
    BO_Code
      ? { where: {
        [Op.and]:[ 
           {BO_Code: { [Op.lt]: BO_Code } },
           {BO_Category : 0 }
    ]
  }, limit: 10 }
      : { where: {
        BO_Category : 0 }, limit: 10 }
  );

  responseData.boardList = boardList;
  return res.json(responseData);
};
const readHealthList = async (req, res, next) => {
  var responseData = {};
  var BO_Code = req.params.BO_Code ? req.params.BO_Code : "";
  var boardList = await BoardList.findAll(
    BO_Code
      ? { where: {
        [Op.and]:[ 
           {BO_Code: { [Op.lt]: BO_Code } },
           {BO_Category : 1 }
    ]
  }, limit: 10 }
      : { where: {
        BO_Category : 1 
}, limit: 10 }
  );

  responseData.boardList = boardList;
  return res.json(responseData);
};


module.exports = {readGeneralList, readHealthList};
