var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;
const RESULT_PATH = '/annual-allowance/';

router.post('/other-pensions', function (req, res) {
    var otherPension = req.session.data['other-pension'];
    // console.log(otherPension)
    if (otherPension === 'Yes') {
        res.redirect(`${RESULT_PATH}other-table`);
    } else {
        res.redirect(`${RESULT_PATH}table`);
    }
})

router.post('/how-auth', function (req, res) {
    res.redirect(`${RESULT_PATH}about-pensions`);
})

module.exports = router
