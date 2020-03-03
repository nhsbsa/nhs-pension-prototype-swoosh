var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;
const RESULT_PATH = '/annual-allowance/';

router.post('/other-pensions', function (req, res) {
    res.redirect(`${RESULT_PATH}check`);
})

router.post('/check', function (req, res) {
    var otherPension = req.session.data['other-pension'];
    if (otherPension === 'yes') {
        res.redirect(`${RESULT_PATH}table`);
    } else {
        res.redirect(`${RESULT_PATH}other-table`);
    }
})

module.exports = router
