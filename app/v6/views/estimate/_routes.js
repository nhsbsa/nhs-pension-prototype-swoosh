var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;
const RESULT_PATH = '/estimate/result';

router.get('/', function (req, res) {
  var data = req.session.data
  data.estimateResult = data.normalGivenLump2015
  // console.log(data.estimateResult);
  res.redirect(`${RESULT_PATH}`);
})

router.post('/lump', function (req, res) {
  var data = req.session.data
  data.estimateResult = data.normalNoLump2015;
  var lumpAmount = req.session.data['lump-amount'];

    // if 2015
  if (data.schemeReference === '2015') {
    if (lumpAmount == 'Max') {
      data.estimateResult = data.normalMaxLump2015;
    } else if (lumpAmount == 'Min') {
      data.estimateResult = data.normalNoLump2015;
    } else {
      data.estimateResult = data.normalGivenLump2015;
    }
  
    // if 2008
  } else if (data.schemeReference === '2008') {

    // if 1995
  } else {

  }

  res.redirect(`${RESULT_PATH}`);
})

router.post('/estimate/result', function (req, res) {

  var data = req.session.data
  data.estimateResult = data.normalNoLump2015;
  console.log(data.estimateResult);
  // res.redirect(`${RESULT_PATH}`);
})

router.post('/when', function (req, res, next) {
  var data = req.session.data
  data.estimateResult = data.normalNoLump2015;
  var start = req.session.data['pension-start'];
    
    // if 2015
    if (data.schemeReference === '2015') {
    
      // if 2008
    } else if (data.schemeReference === '2008') {
  
      // if 1995
    } else {
  
    }
  
});
module.exports = router
