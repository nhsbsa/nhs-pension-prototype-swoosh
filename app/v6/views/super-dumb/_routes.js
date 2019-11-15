var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;

router.get('/', function (req, res) {
    res.redirect('/super-dumb/salary')
})

router.post('/salary', function (req, res, next) {
    res.redirect('/super-dumb/retire')
    next()
})

router.post('/retire', function (req, res, next) {
    res.redirect('/super-dumb/result')
    next()
})

module.exports = router