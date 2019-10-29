var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;
const RESULT_PATH = '/estimate/result';

router.get('/', function (req, res) {
  var data = req.session.data

  // sets default data
  // data.estimateResult = data.normalAgeMinLump2015;

  res.redirect(`${RESULT_PATH}`);
})

router.get('/2015', function (req, res) {
  var data = req.session.data
  // data.estimateResult = data.estimateResult2015;
  res.redirect(`${RESULT_PATH}`);
})

router.get('/2008', function (req, res) {
  var data = req.session.data
  data.estimateResult = data.estimateResult2008;
  res.redirect(`${RESULT_PATH}`);
})

router.get('/1995', function (req, res) {
  var data = req.session.data
  // data.estimateResult = data.estimateResult1995;
  res.redirect(`${RESULT_PATH}`);
})

router.post('/lump', function (req, res) {
  var data = req.session.data
  // data.estimateResult = data.normalAgeMinLump2015;
  var start = req.session.data['pension-start'];
  var lumpAmount = req.session.data['lump-amount'];

    // if 2015
  if (data.schemeReference === '2015') {

    // Given lumps all set to £18k
    if (start == 'specificAge' && lumpAmount == 'Other') {
      data.estimateResult2015 = data.givenAgeGivenLump2015;
      data.estimateResult = data.givenAgeGivenLump2015;
    } else if (start == 'early' && lumpAmount == 'Other') {
      data.estimateResult2015 = data.earlyAgeGivenLump2015;
      data.estimateResult = data.earlyAgeGivenLump2015;
    } else if (start == 'late' && lumpAmount == 'Other') {
      data.estimateResult2015 = data.lateAgeGivenLump2015;
      data.estimateResult = data.lateAgeGivenLump2015;
    } else if (start == 'normal' && lumpAmount == 'Other') {
      data.estimateResult2015 = data.normalAgeGivenLump2015;
      data.estimateResult = data.normalAgeGivenLump2015;
    } else if (start == 'specificDate' && lumpAmount == 'Other') {
      data.estimateResult2015 = data.dateAgeGivenLump2015;
      data.estimateResult = data.dateAgeGivenLump2015;

      // Max lumps
    } else if (start == 'specificAge' && lumpAmount == 'Max') {
      data.estimateResult2015 = data.givenAgeMaxLump2015;
      data.estimateResult = data.givenAgeMaxLump2015;
    } else if (start == 'early' && lumpAmount == 'Max') {
      data.estimateResult2015 = data.earlyAgeMaxLump2015;
      data.estimateResult = data.earlyAgeMaxLump2015;
    } else if (start == 'late' && lumpAmount == 'Max') {
      data.estimateResult2015 = data.lateAgeMaxLump2015;
      data.estimateResult = data.lateAgeMaxLump2015;
    } else if (start == 'normal' && lumpAmount == 'Max') {
      data.estimateResult2015 = data.normalAgeMaxLump2015;
      data.estimateResult = data.normalAgeMaxLump2015;
    } else if (start == 'specificDate' && lumpAmount == 'Max') {
      data.estimateResult2015 = data.dateAgeMaxLump2015;
      data.estimateResult = data.dateAgeMaxLump2015;
    
      // min lumps effectively £0 in 2015
    } else if (start == 'specificAge' && lumpAmount == 'Min') {
      data.estimateResult2015 = data.givenAgeMinLump2015;
      data.estimateResult = data.givenAgeMinLump2015;
    } else if (start == 'early' && lumpAmount == 'Min') {
      data.estimateResult2015 = data.earlyAgeMinLump2015;
      data.estimateResult = data.earlyAgeMinLump2015;
    } else if (start == 'late' && lumpAmount == 'Min') {
      data.estimateResult2015 = data.lateAgeMinLump2015;
      data.estimateResult = data.lateAgeMinLump2015;
    } else if (start == 'normal' && lumpAmount == 'Min') {
      data.estimateResult2015 = data.normalAgeMinLump2015;
      data.estimateResult = data.normalAgeMinLump2015;
    } else if (start == 'specificDate' && lumpAmount == 'Min') {
      data.estimateResult2015 = data.dateAgeMinLump2015;
      data.estimateResult = data.dateAgeMinLump2015;
    }

    req.session.data.reports.push(data.estimateResult2015)
  
    // if 2008
  } else if (data.schemeReference === '2008') {

    // Given lumps all set to £18k
    if (start == 'specificAge' && lumpAmount == 'Other') {
      data.estimateResult2008 = data.givenAgeGivenLump2008;
      data.estimateResult = data.givenAgeGivenLump2008;
    } else if (start == 'early' && lumpAmount == 'Other') {
      data.estimateResult2008 = data.earlyAgeGivenLump2008;
      data.estimateResult = data.earlyAgeGivenLump2008;
    } else if (start == 'late' && lumpAmount == 'Other') {
      data.estimateResult2008 = data.lateAgeGivenLump2008;
      data.estimateResult = data.lateAgeGivenLump2008;
    } else if (start == 'normal' && lumpAmount == 'Other') {
      data.estimateResult2008 = data.normalAgeGivenLump2008;
      data.estimateResult= data.normalAgeGivenLump2008;
    } else if (start == 'specificDate' && lumpAmount == 'Other') {
      data.estimateResult2008 = data.dateAgeGivenLump2008;
      data.estimateResult = data.dateAgeGivenLump2008;

      // Max lumps
    } else if (start == 'specificAge' && lumpAmount == 'Max') {
      data.estimateResult2008 = data.givenAgeMaxLump2008;
      data.estimateResult = data.givenAgeMaxLump2008;
    } else if (start == 'early' && lumpAmount == 'Max') {
      data.estimateResult2008 = data.earlyAgeMaxLump2008;
      data.estimateResult = data.earlyAgeMaxLump2008;
    } else if (start == 'late' && lumpAmount == 'Max') {
      data.estimateResult2008 = data.lateAgeMaxLump2008;
      data.estimateResult = data.lateAgeMaxLump2008;
    } else if (start == 'normal' && lumpAmount == 'Max') {
      data.estimateResult2008 = data.normalAgeMaxLump2008;
      data.estimateResult = data.normalAgeMaxLump2008;
    } else if (start == 'specificDate' && lumpAmount == 'Max') {
      data.estimateResult2008 = data.dateAgeMaxLump2008;
      data.estimateResult = data.dateAgeMaxLump2008;
    
      // min lumps effectively £0 in 2008
    } else if (start == 'specificAge' && lumpAmount == 'Min') {
      data.estimateResult2008 = data.givenAgeMinLump2008;
      data.estimateResult = data.givenAgeMinLump2008;
    } else if (start == 'early' && lumpAmount == 'Min') {
      data.estimateResult2008 = data.earlyAgeMinLump2008;
      data.estimateResult = data.earlyAgeMinLump2008;
    } else if (start == 'late' && lumpAmount == 'Min') {
      data.estimateResult2008 = data.lateAgeMinLump2008;
      data.estimateResult = data.lateAgeMinLump2008;
    } else if (start == 'normal' && lumpAmount == 'Min') {
      data.estimateResult2008 = data.normalAgeMinLump2008;
      data.estimateResult = data.normalAgeMinLump2008;
    } else if (start == 'specificDate' && lumpAmount == 'Min') {
      data.estimateResult2008 = data.dateAgeMinLump2008;
      data.estimateResult = data.dateAgeMinLump2008;
    }
    
    // push result to report
    req.session.data.reports.push(data.estimateResult2008)

    // if 1995
  } else {

    // push result to report
    // req.session.data.reports.push(data.estimateResult1995)
  }
  
  res.redirect(`${RESULT_PATH}`);
})

router.post('/estimate/result', function (req, res) {

  var data = req.session.data
  // data.estimateResult2015 = data.estimateResult;
  // data.estimateResult2008 = data.estimateResult;
  // data.estimateResult1995 = data.estimateResult;

  console.log(data.estimateResult);
  // res.redirect(`${RESULT_PATH}`);
})

router.post('/when', function (req, res, next) {
  var data = req.session.data
  // data.estimateResult = data.normalAgeMinLump2015;
  var start = req.session.data['pension-start'];
  var lumpAmount = req.session.data['lump-amount'];
    
    // if 2015
    if (data.schemeReference === '2015') {

        // Given lumps all set to £18k
      if (start == 'specificAge' && lumpAmount == 'Other') {
        data.estimateResult2015 = data.givenAgeGivenLump2015;
        data.estimateResult = data.givenAgeGivenLump2015;
      } else if (start == 'early' && lumpAmount == 'Other') {
        data.estimateResult2015 = data.earlyAgeGivenLump2015;
        data.estimateResult = data.earlyAgeGivenLump2015;
      } else if (start == 'late' && lumpAmount == 'Other') {
        data.estimateResult2015 = data.lateAgeGivenLump2015;
        data.estimateResult = data.lateAgeGivenLump2015;
      } else if (start == 'normal' && lumpAmount == 'Other') {
        data.estimateResult2015 = data.normalAgeGivenLump2015;
        data.estimateResult = data.normalAgeGivenLump2015;
      } else if (start == 'specificDate' && lumpAmount == 'Other') {
        data.estimateResult2015 = data.dateAgeGivenLump2015;
        data.estimateResult = data.dateAgeGivenLump2015;

        // Max lumps
      } else if (start == 'specificAge' && lumpAmount == 'Max') {
        data.estimateResult2015 = data.givenAgeMaxLump2015;
        data.estimateResult = data.givenAgeMaxLump2015;
      } else if (start == 'early' && lumpAmount == 'Max') {
        data.estimateResult2015 = data.earlyAgeMaxLump2015;
        data.estimateResult = data.earlyAgeMaxLump2015;
      } else if (start == 'late' && lumpAmount == 'Max') {
        data.estimateResult2015 = data.lateAgeMaxLump2015;
        data.estimateResult = data.lateAgeMaxLump2015;
      } else if (start == 'normal' && lumpAmount == 'Max') {
        data.estimateResult2015 = data.normalAgeMaxLump2015;
        data.estimateResult = data.normalAgeMaxLump2015;
      } else if (start == 'specificDate' && lumpAmount == 'Max') {
        data.estimateResult2015 = data.dateAgeMaxLump2015;
        data.estimateResult = data.dateAgeMaxLump2015;
      
        // min lumps effectively £0 in 2015
      } else if (start == 'specificAge' && lumpAmount == 'Min') {
        data.estimateResult2015 = data.givenAgeMinLump2015;
        data.estimateResult = data.givenAgeMinLump2015;
      } else if (start == 'early' && lumpAmount == 'Min') {
        data.estimateResult2015 = data.earlyAgeMinLump2015;
        data.estimateResult = data.earlyAgeMinLump2015;
      } else if (start == 'late' && lumpAmount == 'Min') {
        data.estimateResult2015 = data.lateAgeMinLump2015;
        data.estimateResult = data.lateAgeMinLump2015;
      } else if (start == 'normal' && lumpAmount == 'Min') {
        data.estimateResult2015 = data.normalAgeMinLump2015;
        data.estimateResult = data.normalAgeMinLump2015;
      } else if (start == 'specificDate' && lumpAmount == 'Min') {
        data.estimateResult2015 = data.dateAgeMinLump2015;
        data.estimateResult = data.dateAgeMinLump2015;
      }

      req.session.data.reports.push(data.estimateResult2015)

      // if 2008
    } else if (data.schemeReference === '2008') {
  
      // Given lumps all set to £18k
      if (start == 'specificAge' && lumpAmount == 'Other') {
        data.estimateResult2008 = data.givenAgeGivenLump2008;
        data.estimateResult = data.givenAgeGivenLump2008;
      } else if (start == 'early' && lumpAmount == 'Other') {
        data.estimateResult2008 = data.earlyAgeGivenLump2008;
        data.estimateResult = data.earlyAgeGivenLump2008;
      } else if (start == 'late' && lumpAmount == 'Other') {
        data.estimateResult2008 = data.lateAgeGivenLump2008;
        data.estimateResult = data.lateAgeGivenLump2008;
      } else if (start == 'normal' && lumpAmount == 'Other') {
        data.estimateResult2008 = data.normalAgeGivenLump2008;
        data.estimateResult = data.normalAgeGivenLump2008;
      } else if (start == 'specificDate' && lumpAmount == 'Other') {
        data.estimateResult2008 = data.dateAgeGivenLump2008;
        data.estimateResult = data.dateAgeGivenLump2008;

        // Max lumps
      } else if (start == 'specificAge' && lumpAmount == 'Max') {
        data.estimateResult2008 = data.givenAgeMaxLump2008;
        data.estimateResult = data.givenAgeMaxLump2008;
      } else if (start == 'early' && lumpAmount == 'Max') {
        data.estimateResult2008 = data.earlyAgeMaxLump2008;
        data.estimateResult = data.earlyAgeMaxLump2008;
      } else if (start == 'late' && lumpAmount == 'Max') {
        data.estimateResult2008 = data.lateAgeMaxLump2008;
        data.estimateResult = data.lateAgeMaxLump2008;
      } else if (start == 'normal' && lumpAmount == 'Max') {
        data.estimateResult2008 = data.normalAgeMaxLump2008;
        data.estimateResult = data.normalAgeMaxLump2008;
      } else if (start == 'specificDate' && lumpAmount == 'Max') {
        data.estimateResult2008 = data.dateAgeMaxLump2008;
        data.estimateResult = data.dateAgeMaxLump2008;
      
        // min lumps effectively £0 in 2008
      } else if (start == 'specificAge' && lumpAmount == 'Min') {
        data.estimateResult2008 = data.givenAgeMinLump2008;
        data.estimateResult = data.givenAgeMinLump2008;
      } else if (start == 'early' && lumpAmount == 'Min') {
        data.estimateResult2008 = data.earlyAgeMinLump2008;
        data.estimateResult = data.earlyAgeMinLump2008;
      } else if (start == 'late' && lumpAmount == 'Min') {
        data.estimateResult2008 = data.lateAgeMinLump2008;
        data.estimateResult = data.lateAgeMinLump2008;
      } else if (start == 'normal' && lumpAmount == 'Min') {
        data.estimateResult2008 = data.normalAgeMinLump2008;
        data.estimateResult = data.normalAgeMinLump2008;
      } else if (start == 'specificDate' && lumpAmount == 'Min') {
        data.estimateResult2008 = data.dateAgeMinLump2008;
        data.estimateResult = data.dateAgeMinLump2008;
      }

      req.session.data.reports.push(data.estimateResult2008)

      // if 1995
    } else {
  
    }

    res.redirect(`${RESULT_PATH}`);
  
});

router.use(function (req, res, next) {
  if (!req.session.data.reports) {
    req.session.data.reports = []
  }
  next()
})

module.exports = router
