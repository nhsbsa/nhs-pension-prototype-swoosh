var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;
const RESULT_PATH = '/estimate/result';


let noLumpAmount = '0';
let maxLumpAmount = '114,740';
let getNAge = '67';
let getNDate = '1 March 2042';
let estimatedAge = '63';

// scenario 1
let scenario1Monthly = '2,231';
let scenario1Yearly = '26,773';
let scenario1Lump = noLumpAmount;

// scenario 2
let scenario2Monthly = '1,434';
let scenario2Yearly = '17,211';
let scenario2Lump = maxLumpAmount;

// scenario 3
let scenario3Monthly = '2,106';
let scenario3Yearly = '25,273';
let scenario3Lump = '18,000';

// scenario 4
let scenario4Monthly = '1,419';
let scenario4Yearly = '17,024';

// scenario 5
let scenario5Monthly = '912';
let scenario5Yearly = '10,944';
let scenario5Lump = '72,960';

// scenario 6
let scenario6Monthly = '1,294';
let scenario6Yearly = '15,524';
let scenario6Lump = scenario3Lump;

let scenario7Monthly = '550';
let scenario7Yearly = '6,602';

router.use(function (req, res, next) {
    if (!req.session.data.reports) {
      req.session.data.reports = []
    }
    next()
})

router.get('/', function (req, res) {
    res.redirect(`${RESULT_PATH}`);
})
  
router.post('/when', function (req, res) {
    var date = req.session.data['specific-age-value'];
    var startPension = req.session.data['pension-start'];
    var lumpAmount = req.session.data['lump-amount'];

    // scenario 1
    if (startPension === req.session.data['getNAge']) {
        req.session.data['getDate'] = getNDate;
        req.session.data['estimateAge'] = getNAge;
        req.session.data['getMonthly'] = scenario1Monthly;
        req.session.data['getYearly'] = scenario1Yearly;
    }

    // scenario 4
    if (startPension === 'specificAge') {
        req.session.data['getDate'] = '1 March 2038';
        req.session.data['estimateAge'] = estimatedAge;
        req.session.data['getMonthly'] = scenario4Monthly;
        req.session.data['getYearly'] = scenario4Yearly;
        
    }

    // scenario 5
    if (startPension === 'specificAge') {
        req.session.data['getMaxLump'] = '72,960';
        
    } else {
        req.session.data['getMaxLump'] = maxLumpAmount;
        
    }

    if (lumpAmount === 'None' && startPension === 'specificAge') {
        req.session.data['getLump'] = req.session.data['getMaxLump'];
    } else {
        req.session.data['getLump'] = '0';
    }

    if (lumpAmount === 'Max' && startPension === 'specificAge') {
        req.session.data['getMonthly'] = scenario5Monthly;
        req.session.data['getYearly'] = scenario5Yearly;
        req.session.data['getLump'] = scenario5Lump;
    }

    if (lumpAmount === 'Max' && startPension === req.session.data['getNAge']) {
        req.session.data['getLump'] = maxLumpAmount;
    }

    // scenario 6
    if (lumpAmount === 'Other' && startPension === 'specificAge') {
        req.session.data['getMonthly'] = scenario6Monthly;
        req.session.data['getYearly'] = scenario6Yearly;
        req.session.data['getLump'] = scenario6Lump;
    }

    if (lumpAmount === 'Other' && startPension === req.session.data['getNAge']) {
        req.session.data['getLump'] = scenario6Lump;
    }

    if (lumpAmount === 'Max') {
        req.session.data['maxLump'] = true;
    } else {
        req.session.data['maxLump'] = false;
    }


    // if (startPension === 'specificDate') {
    //     req.session.data['getMonthly'] = scenario7Monthly;
    //     req.session.data['getYearly'] = scenario7Yearly;
    //     req.session.data['getDate'] = '1 March 2030';
    //     req.session.data['estimateAge'] = "55";
    // }


    // var defaultDetails = {
    //     monthly: scenario1Monthly,
    //     yearly: scenario1Yearly,
    //     age: getNAge,
    //     lump: noLumpAmount,
    //     date: getNDate
    // };

    var reportDetails = {
        monthly: req.session.data['getMonthly'],
        yearly: req.session.data['getYearly'],
        age: req.session.data['estimateAge'],
        lump: req.session.data['getLump'],
        date: req.session.data['getDate']
    };

    // req.session.data.reports.push(defaultDetails);
    req.session.data.reports.push(reportDetails);

    res.redirect(`${RESULT_PATH}`);
})
  
router.post('/lump', function (req, res) {
    var lumpAmount = req.session.data['lump-amount'];
    var normalAge = req.session.data['getNAge'];
    var startPension = req.session.data['pension-start'];

    console.log(normalAge, lumpAmount);

    // if lump set true/false
    if (lumpAmount === 'Max' || lumpAmount === 'Other') {
        req.session.data['hasLump'] = true;
    } else {
        req.session.data['hasLump'] = false;
    }

    if (lumpAmount === 'Max') {
        req.session.data['maxLump'] = true;
    } else {
        req.session.data['maxLump'] = false;
    }

    // scenario 1
    if (lumpAmount === 'None' && normalAge === '67') {
        req.session.data['getMonthly'] = scenario1Monthly;
        req.session.data['getYearly'] = scenario1Yearly;
        req.session.data['getLump'] = scenario1Lump;
    }

    // scenario 2
    if (lumpAmount === 'Max' && normalAge === '67') {
        req.session.data['getMonthly'] = scenario2Monthly;
        req.session.data['getYearly'] = scenario2Yearly;
        req.session.data['getLump'] = scenario2Lump;
    }

    // scenario 3
    if (lumpAmount === 'Other' && normalAge === '67') {
        req.session.data['getMonthly'] = scenario3Monthly;
        req.session.data['getYearly'] = scenario3Yearly;
        req.session.data['getLump'] = scenario3Lump;
    }

    // scenario 5
    if (lumpAmount === 'Max' && startPension === 'specificAge') {
        req.session.data['getLump'] = req.session.data['getMaxLump'];
        req.session.data['getMonthly'] = scenario5Monthly;
        req.session.data['getYearly'] = scenario5Yearly;
    }

    // scenario 6
    if (lumpAmount === 'Other' && startPension === 'specificAge') {
        req.session.data['getMonthly'] = scenario6Monthly;
        req.session.data['getYearly'] = scenario6Yearly;
        req.session.data['getLump'] = scenario6Lump;
    }

    // var defaultDetails = {
    //     monthly: scenario1Monthly,
    //     yearly: scenario1Yearly,
    //     age: getNAge,
    //     lump: noLumpAmount,
    //     date: getNDate
    // };

    var reportDetails = {
        monthly: req.session.data['getMonthly'],
        yearly: req.session.data['getYearly'],
        age: req.session.data['estimateAge'],
        lump: req.session.data['getLump'],
        date: req.session.data['getDate']
    };

    // req.session.data.reports.push(defaultDetails);
    req.session.data.reports.push(reportDetails)

    res.redirect(`${RESULT_PATH}`);
})


module.exports = router
