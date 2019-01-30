var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.get('/details', function (req, res) {
  res.redirect('details/check')
})

router.get('/verify', function (req, res) {
  res.render('verify/1')
})

router.post('/nino', function (req, res) {
  res.redirect('hub')
})

router.get('/calculator', function (req, res) {
  res.redirect('/calculator/what-estimate')
})

router.post('/calculator/what-estimate', function (req, res) {
  var lump = req.session.data['lump-sum'];
  var retiring = req.session.data['retiring-age'];

  console.log(req.body.lump)
  console.log(req.body.retiring)
  console.log("Lump: " + lump, "Retiring: " + retiring);

  if (lump === 'yes') {
    res.redirect('/calculator/lump-amount')
  } else {
    res.redirect('/calculator/when-retire')
  }

})

router.post('/calculator/when-retire', function (req, res) {
  var lump = req.session.data['lump-sum'];
  if (lump === 'yes') {
    res.redirect('/calculator/lump-amount')
  } else {
    res.redirect('/calculator/estimate')
  }
})

module.exports = router
