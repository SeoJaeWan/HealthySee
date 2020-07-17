const { Op } = require("sequelize");
const { sequelize } = require("../../../models");

const readAlbumList = async (req, res, next) => {
    let {code, year} = req.query;

    let responseData = {};
    let album = await album.findAll({
        where: {
            Album_AL_Code : code,
            AL_Creation_Date: {between: [Date.parse(year+"-01-01"), Date.parse((year+1)+'-01-01')]}
        },
        order: sequelize.col('P_Code'),
        limit: 1
    });
        

};