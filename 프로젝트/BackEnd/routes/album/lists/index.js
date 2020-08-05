var express = require("express");
var router = express.Router();
const readList = require("../../../lib/sequelize/album/readAlbumList").readAlbumList;


router.get("/:name&:year", readList);

module.exports = router;