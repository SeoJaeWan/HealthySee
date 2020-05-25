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

// CONNECT
connection.connect()

// 1. /search 게시글 전체 검색
// 반환 값 -> 게시글 20개 { BO_CODE, BO_TITLE, BO_HIT, 해당 BO_CODE와 관련된 댓글 수, 추천 수 등등 }

router.get('/', function (req, res) {
    var responseData = {};
    var query = connection.query( 'SELECT * FROM BOARDLIST LIMIT 10;', function(err, rows){
        if(err) throw err;
        if(rows.length){
            responseData.result = 1;
            responseData.startAt = rows[0].BO_CODE
            responseData.itemCount = rows.length;
            responseData.data = rows; 
        }else {
            responseData.result = 0;
        }
        res.json(responseData)
    })
})

router.get('/:BO_CODE', function (req, res) {
    var responseData = {};
    var BO_CODE = req.params.BO_CODE;

    var query = connection.query( 'SELECT * FROM BOARDLIST WHERE BO_CODE < ? LIMIT 10',[BO_CODE], function(err, rows){
        if(err) throw err;
        if(rows.length){
            responseData.result = 1;
            responseData.startAt = rows[0].BO_CODE
            responseData.itemCount = rows.length;
            responseData.data = rows; 
        }else {
            responseData.result = 0;
        }
        res.json(responseData)
    })
})

module.exports = router;
