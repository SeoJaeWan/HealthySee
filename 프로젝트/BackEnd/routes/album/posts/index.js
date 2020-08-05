var express = require("express");
var router = express.Router();
const upload = require("../../../lib/sequelize/album/writeAlbum").upload;
const writePost = require("../../../lib/sequelize/album/writeAlbum").writeAlbum;
const readPost = require("../../../lib/sequelize/album/readAlbum").readPost;
const checkPost = require("../../../lib/sequelize/album/checkAlbum").checkPost;
const checkLogin = require("../../../lib/check/checkData").checkLogin;
const checkOwnBoard = require("../../../lib/check/checkData").checkOwnBoard;
const deletePost = require("../../../lib/sequelize/album/deleteAlbum").deletePost;
const updatePost = require("../../../lib/sequelize/album/updateAlbum").updateAlbum;

router.post("/" , checkLogin, upload.array("files"), writePost, readPost);

router.get("/:AL_Code",checkLogin, readPost);



router.delete("/:AL_Code", checkPost, checkLogin, checkOwnBoard, deletePost);

router.patch("/:AL_Code", checkPost, upload.array("files"), updatePost, readPost);



module.exports = router;

