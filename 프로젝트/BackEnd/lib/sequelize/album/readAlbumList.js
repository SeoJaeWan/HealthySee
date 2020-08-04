const { Op } = require("sequelize");
const { sequelize } = require("../../../models");
const ac_blacklist = require("../../../models").ac_blacklist;
const Album = require("../../../models").album;

const readAlbumList = async (req, res, next) => {
    let name = req.params.name;
    let year = Number(req.params.year);
    let month = req.params.month;
    //let {name, year, month} = req.params;
    let query;
    let responseData ={};
    let album_BlackList = await ac_blacklist.findOne({where : { ACB_Blacklist_NickName : req.body.user.username }});

    if(album_BlackList){
        console.log("잇음");
        if(album_BlackList.ACB_Blacklist_NickName == name){
            res.status(403).end();
            return ;
        }
    }

    if(month){
        console.log("잇음");
        query = "SELECT AL_Code, AL_Creation_Date, AL_Scope, Account_AC_NickName, (SELECT AP_Picture FROM a_picture ap WHERE ap.Album_AL_Code=al.AL_Code LIMIT 1) AS A_Picture FROM album al WHERE AL_Creation_Date BETWEEN '"+year+"-"+month+"-01' AND '"+(year+1)+"-"+(month+1)+"-01' AND Account_AC_NickName = '"+name+"' ORDER BY AL_Creation_Date ASC";
    }else{
        console.log("없음");
        query = "SELECT AL_Code, AL_Creation_Date, AL_Scope, Account_AC_NickName, (SELECT AP_Picture FROM a_picture ap WHERE ap.Album_AL_Code=al.AL_Code LIMIT 1) AS A_Picture FROM album al WHERE AL_Creation_Date BETWEEN '"+year+"-01-01' AND '"+(year+1)+"-01-01' AND Account_AC_NickName = '"+name+"' ORDER BY AL_Creation_Date ASC";
    }

    let [albumList, metadata] = await sequelize.query(query);
     responseData.albumList = albumList;
    // let asdf = JSON.stringify(albumList[0], null, 2);
    console.dir(responseData);
    return res.json(responseData);
        //res.end();

};

module.exports = { readAlbumList};

