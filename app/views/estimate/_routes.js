var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;
const RESULT_PATH = '/estimate/result';


router.get('/', function (req, res) {
    res.redirect(`${RESULT_PATH}`);
})
  
router.post('/when', function (req, res) {
    res.redirect(`${RESULT_PATH}`);
})
  
router.post('/lump', function (req, res) {
    res.redirect(`${RESULT_PATH}`);
})

module.exports = router
