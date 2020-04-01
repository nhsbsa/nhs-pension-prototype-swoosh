var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;

router.post('/name', function (req, res) {
    res.redirect('address')
})

router.post('/address', function (req, res) {
    res.redirect('dob')
})

router.post('/dob', function (req, res) {
    res.redirect('nino')
})

router.post('/before', function (req, res) {
    const answer = req.session.data['before'];
    if (answer === 'no') {
        res.redirect('confirm-identity');
    } else {
        res.redirect('email');
    }
})

module.exports = router
