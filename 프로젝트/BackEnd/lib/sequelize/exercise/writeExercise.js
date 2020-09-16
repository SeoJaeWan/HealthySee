const Exercise = require("../../../models").exercise;
const ExerciseRate = require("../../../models").exerciserate;
const E_evaluation = require("../../../models").e_evaluation;
let today = require("../../Date/time");
const { Op } = require("sequelize");

const writeExercise = async (req, res, next) => {
  /// 영어 이름
  let EX_Name = req.body.EX_Name;
  /// 한글 이름
  let EX_KO_Name = req.body.EX_KO_Name;
  /// 운동 설명
  let EX_Description = req.body.EX_Description;
  /// DB에 생성된 날짜
  let EX_Creation_Date = today;
  /// DB에 업데이트된 날짜 (처음엔 생성날짜와 동일)
  let EX_Update_Date = today;

  let exercise = await Exercise.create({
    EX_Name,
    EX_KO_Name,
    EX_Description,
    EX_Creation_Date,
    EX_Update_Date,
  });
};

const writeReview = async (req, res, next) => {
  // 리뷰 작성자
  let EEV_Writer_NickName = req.body.user.username;
  // 별점
  let EEV_Rank = req.body.rank;
  // 리뷰 내용
  let EEV_Content = req.body.content;
  // 운동명
  let Exercise_EX_Name = req.body.name;

  let EEV_Creation_Date = today;

  console.log("adssadsdasda", Exercise_EX_Name);
  // 한 운동에 리뷰는 한번만 작성할 수 있기때문에
  // 먼저 검색을 해본 뒤 검색결과
  // - Not Null -> 업데이트
  // - Null -> 생성

  E_evaluation.findOne({
    where: { Exercise_EX_Name, EEV_Writer_NickName },
  }).then(async function (obj) {
    console.log("여기닝", obj);
    if (obj) {
      // update
      return await obj.update({ EEV_Rank, EEV_Content, EEV_Creation_Date });
    } else {
      // insert
      console.log("여기??");
      return await E_evaluation.create({
        EEV_Writer_NickName,
        EEV_Rank,
        EEV_Content,
        Exercise_EX_Name,
        EEV_Creation_Date,
      });
    }
  });
  // 운동의 평점과 관련된 정보 조회
  let exerciserate = await ExerciseRate.findOne({
    where: { EX_Name: Exercise_EX_Name },
  });
  // console.log(exerciserate);
  req.params.EX_Name = Exercise_EX_Name;
  next();
};

module.exports = { writeExercise, writeReview };
