var express = require('express')
var app = express()
var router = express.Router();
var path = require('path')

// 글쓰기 페이지

var list = require('./lists/index')
var post = require('./posts/index')
var comment = require('./comments/index')
var healthsee = require('./healthsees/index')
var report = require('./reports/index')


router.use('/lists', list)
router.use('/posts', post)
router.use('/comments', comment)
router.use('/healthsees', healthsee)
router.use('/reports', report)

module.exports = router;