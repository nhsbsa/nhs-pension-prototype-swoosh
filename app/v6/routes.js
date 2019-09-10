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

router.get('/id', function (req, res) {
  res.redirect('verify')
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
  res.redirect('verify/confirm-identity')
})

// This moves matching routing to matching directory
router.use('/matching/', require('./views/matching/_routes'))
router.get('/nino', function (req, res) {
  res.redirect('matching')
})

// This moves onboard routing to onboard directory
router.use('/onboard/', require('./views/onboard/_routes'))
router.get('/onboard', function (req, res) {
  res.redirect('/onboard/1')
})

// This moves statement routing to statement directory
router.use('/statement/', require('./views/statement/_routes'))

// This moves nhs-login routing to nhs-login directory
router.use('/nhs-login/', require('./views/nhs-login/_routes'))
router.get('/nhs-login', function (req, res) {
  res.redirect('nhs-login/index')
})

// This moves assisted routing to assisted directory
router.use('/assisted/', require('./views/assisted/_routes'))

// This moves error routing to assisted directory
router.use('/error/', require('./views/error/_routes'))


// This moves authentication routing to assisted directory
router.use('/authentication/', require('./views/authentication/_routes'))


// This moves scenario routing to scenario directory
router.use('/journey/', require('./views/journey/_routes'))
router.get('/journeys', function (req, res) {
  res.redirect('journey')
})

// This moves estimate routing to estimate directory
router.use('/estimate/', require('./views/estimate/_routes'))

module.exports = router
