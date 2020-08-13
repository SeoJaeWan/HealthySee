var express = require("express");
var router = express.Router();
const upload = require("../../../lib/sequelize/album/writeAlbum").upload;
const writePost = require("../../../lib/sequelize/album/writeAlbum").writeAlbum;
const readPost = require("../../../lib/sequelize/album/readAlbum").readPost;
const { checkPost } = require("../../../lib/check/album");
const { checkLogin } = require("../../../lib/check/user");
const deletePost = require("../../../lib/sequelize/album/deleteAlbum")
  .deletePost;
const updatePost = require("../../../lib/sequelize/album/updateAlbum")
  .updateAlbum;

router.post("/", checkLogin, upload.array("files"), writePost, readPost);

router.get("/:AL_Code", checkLogin, checkPost, readPost);

router.delete("/:AL_Code", checkLogin, checkPost, deletePost);

router.patch(
  "/:AL_Code",
  checkPost,
  upload.array("files"),
  updatePost,
  readPost
);

module.exports = router;
