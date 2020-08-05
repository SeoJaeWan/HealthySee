const BoardList = require("../../../models").boardlist;
const { Op } = require("sequelize");

const readList = async (req, res, next) => {
  name = req.query.name;
  keyword = req.query.keyword;
  BO_Code = req.query.BO_Code;
  category = req.query.category;
  console.log(BO_Code);
  var responseData = {};
  var condition = {
    where: {
      [Op.and]: [
        name && { [name]: { [Op.like]: "%" + keyword + "%" } },
        BO_Code && { BO_Code: { [Op.lt]: BO_Code } },
        { BO_Category: category },
      ],
    },
    limit: 10,
  };
  var boardList = await BoardList.findAndCountAll(condition);
  console.log(boardList.count);
  responseData.boardList = boardList.rows;
  responseData.boardCount = boardList.count;
  return res.json(responseData);
};

const bestList = async (req, res, next) => {
  let name = req.params.name;
  let count = Number(req.params.count);

  let responseData = {};
  //   condition = {
  //     where: {
  //       [Op.and]: [
  //         { BO_Creation_Date : {[Op.gt]: new Date(new Date() - 72 * 60 * 60 * 1000)}},
  //         { BO_Category: category },
  //       ],
  //     },
  //   order : [[name],"DESC"],
  //   limit: 3}
  // }

  bestListFree = await BoardList.findAll({
    where: {
      [Op.and]: [
        {
          BO_Creation_Date: {
            [Op.gt]: new Date(new Date() - 96 * 60 * 60 * 1000),
          },
        },
        { BO_Category: 0 },
      ],
    },
    order: [[`${name}`, "DESC"]],
    limit: count,
  });

  bestListExer = await BoardList.findAll({
    where: {
      [Op.and]: [
        {
          BO_Creation_Date: {
            [Op.gt]: new Date(new Date() - 96 * 60 * 60 * 1000),
          },
        },
        { BO_Category: 1 },
      ],
    },
    order: [[`${name}`, "DESC"]],
    limit: count,
  });

  responseData.free = bestListFree;
  responseData.exer = bestListExer;
  res.json(responseData);
};

module.exports = { readList, bestList };
