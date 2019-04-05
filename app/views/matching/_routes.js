var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;

router.get('/', function (req, res) {
    res.redirect('/matching/nino')
})

router.post('/nino', function (req, res) {
    const answer = req.session.data['nino'];
    if (answer === 'mismatch') {
        res.redirect('confirm-details')
    } else {
        res.redirect('/hub')
    }
})
  
router.post('/confirm-details', function (req, res) {
    const answer = req.session.data['matching_details'];
    if (answer == 'correct') {
        res.redirect('call-contact-centre')
    } else if (answer == 'nino') {
        res.redirect('nino')
    } else {
        res.redirect('update-verify-details')
    }
})

module.exports = router