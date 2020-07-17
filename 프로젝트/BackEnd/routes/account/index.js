var express = require("express");
var router = express.Router();
const loginUser = require("../../lib/sequelize/account/loginUser");
const sendToken = require("../../lib/sequelize/account/sendToken");
const createAccount = require("../../lib/sequelize/account/createAccount");
const userManagement = require("../../lib/sequelize/account/userManagement");

router.post("/login", loginUser, sendToken);
router.post("/register", createAccount, sendToken);
router.post("/logout", userManagement.logoutUser);

router.get("/check", userManagement.checkUser);

module.exports = router;
