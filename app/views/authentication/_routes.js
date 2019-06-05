var express = require('express')
var router = express.Router()

const BASE_PATH = 'authentication';
const ABS_BASE_PATH = `${BASE_PATH}`;
const ALT_PATH = '/verify';


router.post('/', function (req, res) {
    var answer = req.body['auth'];
    if(answer === 'auth-num') {
      res.redirect(`${ABS_BASE_PATH}/member-number`)
    } else {
      res.redirect(ALT_PATH)
    }
})

module.exports = router
