var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var mysql = require('mysql')
const B_Comment = require("../../models").b_comment;


// DATABASE SETTING
var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : "root", 
    password : "0428",
    database : "PROTOTYPE"
})

// 댓글 작성
router.post('/', async function(req,res){

    //REQUEST의 BODY로 부터 BO_TITLE와 BO_CONTENT를 가져옴
    
    var BC_Content = req.body.BC_Content;
    var BC_RE_REF = req.body.BC_RE_REF;
    var Board_BO_CODE = req.body.Board_BO_CODE;

    
    recentComment = await B_Comment.findOne({
        order :  [['BC_Code', 'DESC']]
    }).then(async (comment) =>  {
        await B_Comment.create({
           BC_Content : BC_Content,
           BC_RE_REF : recentComment.BC_Code+1,
           Board_BO_CODE : Board_BO_CODE
       })})

       comments = await B_Comment.findAll({
               where : {Board_BO_Code :board.BO_CODE}
           })

           responseData.boardDetail = boardDetail;
           responseData.comments = comments

    console.log(recentComment)

    if(BC_RE_REF === "0"){
      var sql = {BC_Content, Board_BO_CODE};
       // console.log(sql);
        var query = connection.query('insert into B_COMMENT set BC_RE_REF = (LAST_INSERT_ID() + 1), ?', sql, function(err,rows) {
            if(err) {console.log(err);return res.json({'result' : 0})}
            console.log(rows.insertId);
            return res.json({'result' : 1, 'insertedId':rows.insertId})
        
     })
    }
    else{
    //받아온 데이터를 바탕으로 DB에 저장
    var sql = {BC_Content, BC_RE_REF, Board_BO_CODE};
    console.log(sql);
    var query = connection.query('insert into B_COMMENT set ?', sql, function(err,rows) {
        // 실패시 RESULT : 0을 반환하며, 성공하면 RESULT 1과 해당 BO_CODE를 알려주는 것으로 자신이 쓴 게시글 페이지로
        // 리 다이렉트? 하는것을 도와줌.
        if(err) {return res.json({'result' : 0})}
        console.log(rows.insertId);
        return res.json({'result' : 1, 'insertedId':rows.insertId})
        
    })
}
})

// 해당 BO_CODE의 댓글 조회
router.get('/:BO_CODE',async function (req, res) {
    var BO_CODE = req.params.BO_CODE;
   

    var responseData = {};
    comments = await B_Comment.findAll({
        where : {Board_BO_Code : BO_CODE},
        order :  [['BC_RE_REF', 'ASC'], ['BC_Code', 'ASC']]
    })

    responseData.comments = comments;
    res.json(responseData); 
    // var query = connection.query( 'SELECT * FROM B_COMMENT WHERE Board_BO_CODE = ? ORDER BY `BC_RE_REF` ASC, `BC_Code` ASC',[BO_CODE * 1], function(err, rows){
    //     if(err) throw err;
    //     if(rows.length){
    //         responseData.result = 1;
    //         responseData.data = rows;
    //     }else {
    //         responseData.result = 0;
    //     }
    //     res.json(responseData)
    // })
})

// 해당 BO_CODE의 게시글 삭제
router.delete('/:BC_Code',async function (req, res) {
    var BC_Code = req.params.BC_Code;
    var responseData = {};

    
    await B_Comment.destroy({where: {BC_Code : BC_Code}}).then(result => {
        res.json({result:1});
    })
    .catch(err => {
        console.error(err);
    });

})




module.exports = router;