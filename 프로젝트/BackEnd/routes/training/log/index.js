const express = require("express");
const router = express.Router();

const loggingExercise = require("../../../lib/sequelize/training/loggingExercise");

router.post("/", loggingExercise);

module.exports = router;
