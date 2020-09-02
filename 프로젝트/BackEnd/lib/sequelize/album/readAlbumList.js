const { Op } = require("sequelize");
const { sequelize } = require("../../../models");
const ac_blacklist = require("../../../models").ac_blacklist;
const Album = require("../../../models").album;

const readAlbumList = async (req, res, next) => {
  let name = req.query.name;
  let year = Number(req.query.year);
  let AL_Code = req.query.AL_Code;

  console.log(req.query);
  console.log(name);
  let responseData = {};
  let condition = {};
  let album_BlackList = await ac_blacklist.findOne({
    where: { ACB_Blacklist_NickName: req.body.user.username },
  });

  if (album_BlackList) {
    console.log("잇음");
    if (album_BlackList.ACB_Blacklist_NickName == req.body.user.username) {
      res.status(403).end();
      return;
    }
  }
  if (name == req.body.user.username)
    condition = {
      where: {
        [Op.and]: [
          { Account_AC_NickName: name },
          AL_Code && { AL_Code: { [Op.lt]: AL_Code } },
          {
            AL_Creation_Date: {
              [Op.between]: [
                Date.parse(year + "-01-01"),
                Date.parse(year + "-12-31"),
              ],
            },
          },
        ],
      },
      order: [["AL_Creation_Date", "DESC"]],
      limit: 20,
    };
  else
    condition = {
      where: {
        [Op.and]: [
          { Account_AC_NickName: name },
          AL_Code && { AL_Code: { [Op.lt]: AL_Code } },
          { AL_Scope: 1 },
          {
            AL_Creation_Date: {
              [Op.between]: [
                Date.parse(year + "-01-01"),
                Date.parse(year + "-12-31"),
              ],
            },
          },
        ],
      },
      order: [["AL_Creation_Date", "DESC"]],
      limit: 20,
    };

  let albumList = await Album.findAndCountAll(condition);

  responseData.albumList = albumList.rows;
  responseData.AlbumCount = albumList.count;
  console.dir(responseData.albumList);

  return res.json(responseData);
};

module.exports = { readAlbumList };
