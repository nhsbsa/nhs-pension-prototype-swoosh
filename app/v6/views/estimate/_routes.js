var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;
const RESULT_PATH = '/estimate/result';

router.get('/', function (req, res) {
  var data = req.session.data

  // sets default data
  data.estimateResult = data.normalAgeMinLump2015;

  res.redirect(`${RESULT_PATH}`);
})

router.post('/lump', function (req, res) {
  var data = req.session.data
  data.estimateResult = data.normalAgeMinLump2015;
  var start = req.session.data['pension-start'];
  var lumpAmount = req.session.data['lump-amount'];

    // if 2015
  if (data.schemeReference === '2015') {

    // Given lumps all set to £18k
    if (start == 'specificAge' && lumpAmount == 'Other') {
      data.estimateResult = data.givenAgeGivenLump2015;
    } else if (start == 'early' && lumpAmount == 'Other') {
      data.estimateResult = data.earlyAgeGivenLump2015;
    } else if (start == 'late' && lumpAmount == 'Other') {
      data.estimateResult = data.lateAgeGivenLump2015;
    } else if (start == 'normal' && lumpAmount == 'Other') {
      data.estimateResult = data.normalAgeGivenLump2015;
    } else if (start == 'specificDate' && lumpAmount == 'Other') {
      data.estimateResult = data.dateAgeGivenLump2015;

      // Max lumps
    } else if (start == 'specificAge' && lumpAmount == 'Max') {
      data.estimateResult = data.givenAgeMaxLump2015;
    } else if (start == 'early' && lumpAmount == 'Max') {
      data.estimateResult = data.earlyAgeMaxLump2015;
    } else if (start == 'late' && lumpAmount == 'Max') {
      data.estimateResult = data.lateAgeMaxLump2015;
    } else if (start == 'normal' && lumpAmount == 'Max') {
      data.estimateResult = data.normalAgeMaxLump2015;
    } else if (start == 'specificDate' && lumpAmount == 'Max') {
      data.estimateResult = data.dateAgeMaxLump2015;
    
      // min lumps effectively £0 in 2015
    } else if (start == 'specificAge' && lumpAmount == 'Min') {
      data.estimateResult = data.givenAgeMinLump2015;
    } else if (start == 'early' && lumpAmount == 'Min') {
      data.estimateResult = data.earlyAgeMinLump2015;
    } else if (start == 'late' && lumpAmount == 'Min') {
      data.estimateResult = data.lateAgeMinLump2015;
    } else if (start == 'normal' && lumpAmount == 'Min') {
      data.estimateResult = data.normalAgeMinLump2015;
    } else if (start == 'specificDate' && lumpAmount == 'Min') {
      data.estimateResult = data.dateAgeMinLump2015;
    }
  
    // if 2008
  } else if (data.schemeReference === '2008') {

    // if 1995
  } else {

  }

  // var reportDetails = {
  //   monthly: req.session.data['getMonthly'],
  //   yearly: req.session.data['getYearly'],
  //   age: req.session.data['estimateAge'],
  //   lump: req.session.data['getLump'],
  //   date: req.session.data['getDate']
  // };

  req.session.data.reports.push(data.estimateResult)
  
  res.redirect(`${RESULT_PATH}`);
})

router.post('/estimate/result', function (req, res) {

  var data = req.session.data
  data.estimateResult = data.normalAgeMinLump2015;
  console.log(data.estimateResult);
  // res.redirect(`${RESULT_PATH}`);
})

router.post('/when', function (req, res, next) {
  var data = req.session.data
  data.estimateResult = data.normalAgeMinLump2015;
  var start = req.session.data['pension-start'];
  var lumpAmount = req.session.data['lump-amount'];
    
    // if 2015
    if (data.schemeReference === '2015') {

        // Given lumps all set to £18k
      if (start == 'specificAge' && lumpAmount == 'Other') {
        data.estimateResult = data.givenAgeGivenLump2015;
      } else if (start == 'early' && lumpAmount == 'Other') {
        data.estimateResult = data.earlyAgeGivenLump2015;
      } else if (start == 'late' && lumpAmount == 'Other') {
        data.estimateResult = data.lateAgeGivenLump2015;
      } else if (start == 'normal' && lumpAmount == 'Other') {
        data.estimateResult = data.normalAgeGivenLump2015;
      } else if (start == 'specificDate' && lumpAmount == 'Other') {
        data.estimateResult = data.dateAgeGivenLump2015;

        // Max lumps
      } else if (start == 'specificAge' && lumpAmount == 'Max') {
        data.estimateResult = data.givenAgeMaxLump2015;
      } else if (start == 'early' && lumpAmount == 'Max') {
        data.estimateResult = data.earlyAgeMaxLump2015;
      } else if (start == 'late' && lumpAmount == 'Max') {
        data.estimateResult = data.lateAgeMaxLump2015;
      } else if (start == 'normal' && lumpAmount == 'Max') {
        data.estimateResult = data.normalAgeMaxLump2015;
      } else if (start == 'specificDate' && lumpAmount == 'Max') {
        data.estimateResult = data.dateAgeMaxLump2015;
      
        // min lumps effectively £0 in 2015
      } else if (start == 'specificAge' && lumpAmount == 'Min') {
        data.estimateResult = data.givenAgeMinLump2015;
      } else if (start == 'early' && lumpAmount == 'Min') {
        data.estimateResult = data.earlyAgeMinLump2015;
      } else if (start == 'late' && lumpAmount == 'Min') {
        data.estimateResult = data.lateAgeMinLump2015;
      } else if (start == 'normal' && lumpAmount == 'Min') {
        data.estimateResult = data.normalAgeMinLump2015;
      } else if (start == 'specificDate' && lumpAmount == 'Min') {
        data.estimateResult = data.dateAgeMinLump2015;
      }

      // if 2008
    } else if (data.schemeReference === '2008') {
  
      // if 1995
    } else {
  
    }

    // var reportDetails = {
    //   monthly: req.session.data['getMonthly'],
    //   yearly: req.session.data['getYearly'],
    //   age: req.session.data['estimateAge'],
    //   lump: req.session.data['getLump'],
    //   date: req.session.data['getDate']
    // };

    req.session.data.reports.push(data.estimateResult)

    res.redirect(`${RESULT_PATH}`);
  
});

router.use(function (req, res, next) {
  if (!req.session.data.reports) {
    req.session.data.reports = []
  }
  next()
})

module.exports = router
