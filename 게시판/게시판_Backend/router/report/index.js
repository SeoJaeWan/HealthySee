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

module.exports = router;