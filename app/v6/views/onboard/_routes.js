var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;

router.get('/', function (req, res) {
    res.redirect('/onboard/1/welcome')
})

router.get('/1', function (req, res) {
    res.redirect('/onboard/1/welcome')
})

router.get('/3', function (req, res) {
    res.redirect('/onboard/3/welcome')
})


module.exports = router