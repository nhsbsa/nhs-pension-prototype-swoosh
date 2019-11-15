var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;

router.get('/', function (req, res) {
    res.redirect('/matching/nino')
})

router.post('/nino', function (req, res) {
    const journey = req.session.data['journey']
    const answer = req.session.data['nino'],
    match = ['QQ 12 34 56 C', 'QQ123456C', 'qq 12 34 56 c', 'qq123456c'];

    if (match.includes(answer)) {
        res.redirect('check');
    } else if (answer == '3') {
        res.redirect('nino-not-found');
    } else if (answer == 'onboard' || answer == 'onboard1' || journey == 'onboard1') {
        res.redirect('/onboard/1');
    } else if (answer == 'onboard2' || journey == 'onboard2') {
        res.redirect('/onboard/2');
    } else if (answer == 'onboard3' || journey == 'onboard3') {
        res.redirect('/onboard/3');
    } else if (journey == 'joiner') {
        res.redirect('/onboard/joiner');
    } else {
        res.redirect('/hub');
    }
})
  
router.post('/check', function (req, res) {
    const answer = req.session.data['matching_details'];
    if (answer == 'correct') {
        res.redirect('problem')
    } else if (answer == 'nino') {
        res.redirect('nino')
    } else {
        res.redirect('update-personal-details')
    }
})

module.exports = router