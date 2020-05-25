var express = require('express')
var app = express()
var router = express.Router();
var path = require('path')

// 글쓰기 페이지

var list = require('./list/index')
var post = require('./post/index')
var comment = require('./comment/index')
var healthsee = require('./healthsee/index')
var report = require('./report/index')


router.use('/list', list)
router.use('/post', post)
router.use('/comment', comment)
router.use('/healthsee', healthsee)
router.use('/report', report)

module.exports = router;