const express = require('express');
const router = express.Router();

const BASE_PATH = 'verify';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/nino';


router.post('/sign-in', function (req, res) {
    // res.render('verify/1')
    var answer = req.session.data['registration'];
    // console.log(estimate);
    if(answer == "true") {
      res.redirect('journey')
    } else {
      res.redirect('2')
    }
})

// router.post('/', function (req, res) {
//     res.redirect(`${NEXT_PATH}`);
// })

module.exports = router;