const { Op } = require("sequelize");
const { sequelize } = require("../../../models");
const ac_blacklist = require("../../../models").ac_blacklist;
const Album = require("../../../models").album;

const readAlbumList = async (req, res, next) => {
    let name = req.query.name;
    let year = Number(req.query.year);
    let month = Number(req.query.month);
    let AL_Code = req.query.AL_Code;
    //let {name, year, month} = req.params;
    // let query;
    console.log(req.query);
    console.log(name);
    let responseData = {};
    let condition= {};
    let album_BlackList = await ac_blacklist.findOne({where : { ACB_Blacklist_NickName : req.body.user.username }});

    if(album_BlackList){
        console.log("잇음");
        if(album_BlackList.ACB_Blacklist_NickName == req.body.user.username){
            res.status(403).end();
            return ;
        }
    }
    if(name == req.body.user.username)
    condition = {
        where: {
          [Op.and]: [
            {Account_AC_NickName: name},
            AL_Code && {AL_Code: { [Op.lt]: AL_Code } },
            {AL_Creation_Date :{[Op.between]: [Date.parse(year+'-01-01') , Date.parse(year+'-12-31')]} },
          ],
        },
        order: [['AL_Creation_Date', 'DESC']],
        limit: 20,
      };
      else
      condition = {
        where: {
          [Op.and]: [
            {Account_AC_NickName: name},
            AL_Code && {AL_Code: { [Op.lt]: AL_Code } },
            {AL_Scope : 1},
            {AL_Creation_Date :{[Op.between]: [Date.parse(year+'-01-01') , Date.parse(year+'-12-31')]} },
          ],
        },
        order: [['AL_Creation_Date', 'DESC']],
        limit: 20,
      };

    // if(month){
    //     console.log("잇음");
    //     query = "SELECT AL_Code, AL_Creation_Date, AL_Scope, Account_AC_NickName, (SELECT AP_Picture FROM a_picture ap WHERE ap.Album_AL_Code=al.AL_Code LIMIT 1) AS A_Picture FROM album al WHERE AL_Creation_Date BETWEEN '"+year+"-"+month+"-01' AND '"+(year+1)+"-"+(month+1)+"-01' AND Account_AC_NickName = '"+name+"' ORDER BY AL_Creation_Date ASC";
    // }else{
    //     console.log("없음");
    //     query = "SELECT AL_Code, AL_Creation_Date, AL_Scope, Account_AC_NickName, (SELECT AP_Picture FROM a_picture ap WHERE ap.Album_AL_Code=al.AL_Code LIMIT 1) AS A_Picture FROM album al WHERE AL_Creation_Date BETWEEN '"+year+"-01-01' AND '"+(year+1)+"-01-01' AND Account_AC_NickName = '"+name+"' ORDER BY AL_Creation_Date ASC";
    // }

    // let [albumList, metadata] = await sequelize.query(query);

    let albumList = await Album.findAndCountAll(condition);

     responseData.albumList = albumList.rows;
     responseData.AlbumCount = albumList.count;
    console.dir(responseData.albumList);
    

    return res.json(responseData);
};

module.exports = { readAlbumList};

