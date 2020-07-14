var express = require("express");
var router = express.Router();
const upload = require("../../../lib/sequelize/album/writeAlbum").upload;
const writePost = require("../../../lib/sequelize/album/writeAlbum").writeAlbum;
const readPost = require("../../../lib/sequelize/album/readAlbum").readPost;
console.log("오긴오냐?post");
router.post("/" , upload.array("files"), writePost);

router.get("/AL_Code", readPost);



//router.delete("/:AL_Code", checkPost, check);
//router.patch("/:AL_Code", checkPost, upload.array("files"), updatePost, readPost);


module.exports = router;