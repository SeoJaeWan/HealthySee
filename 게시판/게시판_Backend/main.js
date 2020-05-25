var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var router = require('./router/index')

//node 서버의 시작을 알림
app.listen(3000, function() {
    console.log("start! express on port 3000");
});

// bodyParser을 사용
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// router을 사용
app.use(router)

module.exports = router;
