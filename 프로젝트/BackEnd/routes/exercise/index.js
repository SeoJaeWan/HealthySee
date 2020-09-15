let express = require("express");
let router = express.Router();
const writeExercise = require("../../lib/sequelize/exercise/writeExercise").writeExercise;
const writeReview = require("../../lib/sequelize/exercise/writeExercise").writeReview;
const readAll = require("../../lib/sequelize/exercise/readExercise").readAll;
const readExerciseList = require("../../lib/sequelize/exercise/readExercise").readExerciseList;
const readReviews = require("../../lib/sequelize/exercise/readExercise").readReviews
const deleteReview = require("../../lib/sequelize/exercise/deleteReview").deleteReview;
const reportReviewAtList = require("../../lib/sequelize/exercise/reportExercise").reportReviewAtList;
const reportReviewAtMain = require("../../lib/sequelize/exercise/reportExercise").reportReviewAtMain;

// 운동 리스트 받아오기
router.get("/list/",readExerciseList )
// 운동 하나 받아오기
router.get("/:EX_Name", readAll);

// 해당 운동의 리뷰들 받아오기
router.get("/review/:EX_Name&:page",readReviews)

// 운동 화면에서 신고하는 경우
router.post("/review/main",reportReviewAtMain, readAll)
// 댓글 리스트에서 신고하는 경우
router.post("/review/list",reportReviewAtList)

// 운동 생성
router.post("/", writeExercise)


// 운동 리뷰 생성
router.post("/review",writeReview, readAll)

router.delete("/review/:code", deleteReview, readAll)

module.exports = router;