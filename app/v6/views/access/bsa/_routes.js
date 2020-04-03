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

router.post('/email', function (req, res) {
    const answer = req.session.data['email'];
    if (answer === 'no') {
        res.redirect('email-not-found')
    } else {
        res.redirect('check-email2');
    }
})

router.post('/code', function (req, res) {
    const answer = req.session.data['code']
    if (answer === 'no') {
        res.redirect('code-expired')
    } else {
        res.redirect('email-confirmed');
    }
})

router.post('/code2', function (req, res) {
    const answer = req.session.data['code']
    if (answer === 'no') {
        res.redirect('code-expired2')
    } else {
        res.redirect('processing');
    }
})

router.post('/nino', function (req, res) {
    const answer = req.session.data['nino'],
    match = ['QQ 12 34 56 C', 'QQ123456C', 'qq 12 34 56 c', 'qq123456c'];

    if (match.includes(answer)) {
        res.redirect('no-match');
    } else {
        res.redirect('check');
    }
})

router.post('/set-email', function (req, res) {
    res.redirect('check-email')
})

module.exports = router
