const express = require('express');
const router = express.Router();

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;


router.get('/rejoin', function (req, res) {
    res.redirect('still-working')
})

router.post('/still-working', function (req, res) {
    var answer = req.session.data['still-working'];
    if (answer === 'Yes') {
        res.redirect('/refund/active');
    } else {
        res.redirect('/refund/inactive');
    }
})

module.exports = router;