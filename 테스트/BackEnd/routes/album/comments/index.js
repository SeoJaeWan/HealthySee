var express = require("express");
var router = express.Router();

router.post("/", writeComment,readComment);

router.post("/report",reportComment,readComment);

router.get("/:BO_Code&:page", readComment);


router.delete(
    "/:BC_Code&:page",
    checkComment,
    checkLogin,
    checkOwnBoard,
    deleteComment,
    readComment
  );

module.exports = router;