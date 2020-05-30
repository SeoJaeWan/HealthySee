var express = require("express");
var router = express.Router();
const loginUser = require("../../sequelize/account/loginUser");
const sendToken = require("../../sequelize/account/sendToken");
const createAccount = require("../../sequelize/account/createAccount");
const userManagement = require("../../sequelize/account/userManagement");

router.post("/login", loginUser, sendToken);
router.post("/register", createAccount, sendToken);
router.post("/logout", userManagement.logoutUser);

router.get("/check", userManagement.checkUser);

module.exports = router;
