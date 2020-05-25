var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var mysql = require('mysql')

// DATABASE SETTING
var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : "root", 
    password : "0428",
    database : "PROTOTYPE"
})

// 게시글 작성
router.post('/', function(req,res){

    //REQUEST의 BODY로 부터 BO_TITLE와 BO_CONTENT를 가져옴
    var BO_TITLE = req.body.BO_TITLE
    var BO_CONTENT = req.body.BO_CONTENT

    //받아온 데이터를 바탕으로 DB에 저장
    var sql = {BO_TITLE,BO_CONTENT}
    var query = connection.query('insert into BOARD set ?', sql, function(err,rows) {
        // 실패시 RESULT : 0을 반환하며, 성공하면 RESULT 1과 해당 BO_CODE를 알려주는 것으로 자신이 쓴 게시글 페이지로
        // 리 다이렉트? 하는것을 도와줌.
        if(err) {return res.json({'result' : 0})}
        console.log(rows.insertId);
        return res.json({'result' : 1, 'insertedId':rows.insertId})
        
    })
})

// 해당 BO_CODE의 게시글 조회
router.get('/:BO_CODE', function (req, res) {
    var BO_CODE = req.params.BO_CODE;
    console.log(req.params.BO_CODE);

    var responseData = {};
    //조회수 올리는 쿼리
    var query = connection.query('UPDATE BOARD SET BO_HIT = (BO_HIT + 1) WHERE BO_CODE = ?', [BO_CODE * 1],function(err,rows){
        if(err) throw err;
    })
    //게시글 디테일을 보내주는 쿼리
    var query2 = connection.query( 'SELECT * FROM BOARDDETAIL WHERE BO_CODE = ?',[BO_CODE * 1], function(err, rows){
        if(err) throw err;
        if(rows.length){
            console.log(rows);
            responseData = rows[0]; 
        }else {
            responseData.result = 0;
        }
        res.json(responseData)
    })
})

// 해당 BO_CODE의 게시글 삭제
router.delete('/:BO_CODE', function (req, res) {
    var BO_CODE = req.params.BO_CODE;
    var responseData = {};
    var query = connection.query( 'DELETE FROM BOARD WHERE BO_CODE = ?',[BO_CODE * 1], function(err, rows){
        if(err) throw err;
        if(rows.length){
            res.json({'result' : 1});
        }else {
            res.json({'result' : 1});
        }
        res.json(responseData)
    })
})




module.exports = router;