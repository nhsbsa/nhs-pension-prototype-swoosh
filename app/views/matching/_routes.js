var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;

router.get('/', function (req, res) {
    res.redirect('/matching/nino')
})

router.post('/nino', function (req, res) {
    const answer = req.session.data['nino'];
    if (answer === 'no match') {
        res.redirect('nino-not-matched')
    } else {
        res.redirect('/hub')
    }
})
  
router.post('/nino-not-matched', function (req, res) {
    const answer = req.session.data['matching_details'];
    if (answer == 'no') {
        res.redirect('update-verify-details')
    } else {
        res.redirect('call-contact-centre')
    }
})

module.exports = router