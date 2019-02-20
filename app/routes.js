var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;

// Route index page
router.get(`${BASE_PATH}`, function (req, res) {
  res.render('index')
})

// add your routes here

router.get('/details', function (req, res) {
  res.redirect('details/check')
})

router.post('/nino', function (req, res) {
  const answer = req.session.data['nino'];
  if (answer === 'no match') {
    res.redirect('nino-not-matched')
  } else {
    res.redirect('hub')
  }
})

router.get('/calculator', function (req, res) {
  res.redirect('/calculator/what-estimate')
})

router.post('/calculator/what-estimate', function (req, res) {
  var estimate = req.body['estimate_based_on'];
  // console.log(estimate);
  if(estimate.includes('age')) {
    res.redirect('/calculator/when-retire')
  } else {
    res.redirect('/calculator/lump-amount')
  }
})

router.post('/calculator/when-retire', function (req, res) {
  var estimate = req.session.data['estimate_based_on'];
  // console.log(estimate);
  if (estimate.includes('lump')) {
    res.redirect('/calculator/lump-amount')
  } else {
    res.redirect('/calculator/estimate')
  }
})

router.post('/calculator/lump-amount', function (req, res) {
  var estimate = req.session.data['estimate_based_on'];
  // console.log(estimate);
  if(estimate.includes('age')) {
    res.redirect('/calculator/estimate-both')
  } else {
    res.redirect('/calculator/estimate-lump')
  }
})


// This moves scenario routing to scenario directory
router.use('/scenario/', require('./views/scenario/_routes'))
router.get('/scenarios', function (req, res) {
  res.redirect('scenario')
})

// This moves pension-details routing to pension-details directory
router.use('/pension-details/', require('./views/pension-details/_routes'))

// This moves verify routing to verify directory
router.use('/verify/', require('./views/verify/_routes'))
router.get('/verify', function (req, res) {
  res.redirect('verify/sign-in')
})

module.exports = router
