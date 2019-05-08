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

// This moves calculator routing to calculator directory
router.use('/calculator/', require('./views/calculator/_routes'))


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

// This moves matching routing to matching directory
router.use('/matching/', require('./views/matching/_routes'))
router.get('/nino', function (req, res) {
  res.redirect('matching')
})

// This moves matching routing to matching directory
router.use('/statement/', require('./views/statement/_routes'))

module.exports = router
