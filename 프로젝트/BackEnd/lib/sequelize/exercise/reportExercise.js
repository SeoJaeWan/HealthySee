const EE_Reporter = require("../../../models").ee_reporter;
const E_evaluation = require("../../../models").e_evaluation;
const E_evaluation_view = require("../../../models").E_evaluation_view;
var today = require("../../Date/time");
const { Op } = require("sequelize");


/**
 * 모바일에서 사용할 때 페이지가 2개로 나뉜다.
 * 기본 운동 페이지에서 미리보기의 개념으로 보여주는 리뷰 3가지
 * 그리고 인피니티 스크롤을 이용해서 표시되는 리뷰
 * 해당 메소드는 인피니티 스크롤을 이용해서 표시되는 리뷰를 신고하는 경우이다.
 */
const reportReviewAtList = async (req, res, next) => {
    // 리뷰 코드
    let E_Evaluation_EEV_Code = req.body.code;
    // 운동 명
    let E_Evaluation_Exercise_EX_Name = req.body.name;
    // 작성자 이름
    let ERE_Reporter_NickName = req.body.user.username;

    let responseDate = {};
    await EE_Reporter.findOrCreate({
        where : {[Op.and]: [
            {ERE_Reporter_NickName},
            {E_Evaluation_EEV_Code}
        ]},
           // 없을 경우에 해당 값으로 create
        defaults : {E_Evaluation_EEV_Code,ERE_Reporter_NickName,E_Evaluation_Exercise_EX_Name,ERE_Creation_Date : today }})
        .spread( async function (report, created) {
            // 생성 되었다면
            if(created){
                 // 해당 리뷰에 얼만큼의 신고가 누적되어있는지 받아옴
                let ee_reporter = await EE_Reporter.findAndCountAll({
                    where : {E_Evaluation_EEV_Code}
                
                })
                // 테스트를 위해 신고가 1이상 되면 블라인드처리
                if(ee_reporter.count > 1){
                    await E_evaluation.update({EEV_State : 1},{where : {EEV_Code : E_Evaluation_EEV_Code}})
                    // 가지고 있는 배열에서 해당 댓글을 삭제하라는 코드
                    responseDate.answer = "1";
                }else{
                    responseDate.answer = "0";
                }
                // 블라인드 처리 대상이 아닐 경우, 해당 댓글의 정보를 다시 보내줘 교체 (reportCount) or ReportCount ++ 하라는 코드
                
            }else{
                // 이미 신고한경우 409 전송
                res.status(409).end(); 
            }
        })
        res.json(responseDate);
  };

/**
 * 모바일에서 사용할 때 페이지가 2개로 나뉜다.
 * 기본 운동 페이지에서 미리보기의 개념으로 보여주는 리뷰 3가지
 * 그리고 인피니티 스크롤을 이용해서 표시되는 리뷰
 * 해당 메소드는 운동 페이지에서의 미리보기 개념으로 표시되는 리뷰 3가지일 때 신고하는 경우이다.
 */
  const reportReviewAtMain = async (req, res, next) => {
    // 리뷰 코드
    let E_Evaluation_EEV_Code = req.body.code;
    // 운동 명
    let E_Evaluation_Exercise_EX_Name = req.body.name;
    // 작성자 이름
    let ERE_Reporter_NickName = req.body.user.username;

    
    await EE_Reporter.findOrCreate({
        where : {[Op.and]: [
            {ERE_Reporter_NickName},
            {E_Evaluation_EEV_Code}
        ]},
        // 없을 경우에 해당 값으로 create
        defaults : {E_Evaluation_EEV_Code,ERE_Reporter_NickName,E_Evaluation_Exercise_EX_Name,ERE_Creation_Date : today }})
        .spread( async function (report, created) {
            // 생성 되었다면
            if(created){
                // 해당 리뷰에 얼만큼의 신고가 누적되어있는지 받아옴
                let ee_reporter = await EE_Reporter.findAndCountAll({
                    where : {E_Evaluation_EEV_Code}
                })
                // 테스트를 위해 신고가 1이상 되면 블라인드처리
                if(ee_reporter.count > 0){
                    await E_evaluation.update({EEV_State : 1},{where : {EEV_Code : E_Evaluation_EEV_Code}})
                }
                req.params.EX_Name = E_Evaluation_Exercise_EX_Name;
                next()
            }else{
                // 이미 신고한경우 409 전송
                res.status(409).end(); 
            }
        })
  };
  module.exports = {reportReviewAtList, reportReviewAtMain};