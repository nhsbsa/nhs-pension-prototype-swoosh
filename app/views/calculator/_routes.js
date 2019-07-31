var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;

// router.get('/', function (req, res) {
//   res.redirect('/calculator/what-estimate')
// })

router.post('/what-estimate', function (req, res) {
    var estimate = req.body['estimate_based_on'];
    if(estimate.includes('age')) {
      res.redirect('/calculator/when-retire')
    } else {
      res.redirect('/calculator/lump-amount')
    }
})
  
router.post('/when-retire', function (req, res) {
  res.redirect('/calculator/estimate-both');
})
  
router.post('/lump-amount', function (req, res) {
  res.redirect('/calculator/estimate-both');
})

module.exports = router
