var express = require('express')
var router = express.Router()

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;
const RESULT_PATH = '/estimate/result';

// let noLump = false;
let noLumpAmount = '0';
let maxLumpAmount = '114,740';

router.get('/', function (req, res) {
    res.redirect(`${RESULT_PATH}`);
})
  
// router.post('/when', function (req, res) {
//     var date = req.session.data['specific-age-value'];
//     var startPension = req.session.data['pension-start'];

//     if (startPension === '67') {
//         req.session.data['getDate'] = req.session.data['getNDate'];
//         req.session.data['getMonthly'] = '2,231';
//         req.session.data['getYearly'] = '26,773';
//         req.session.data['getMaxLump'] = maxLumpAmount;

//     } else if (date === '63') and (req.session.data['maxLump'] === true) {
//         req.session.data['getMaxLump'] = '72,960';
        
//     } else if (date === '63') {
//         req.session.data['getDate'] = '1 March 2038';
//         req.session.data['getMonthly'] = '1,419';
//         req.session.data['getYearly'] = '17,024';
//         req.session.data['getMaxLump'] = '72,960';
//         req.session.data['getLump'] = req.session.data['getMaxLump'];
//         req.session.data['maxLump'] = true;
//     }
//     res.redirect(`${RESULT_PATH}`);
// })
  
router.post('/lump', function (req, res) {
    var lumpAmount = req.session.data['lump-amount'];

    if (lumpAmount === 'Max') {
        req.session.data['maxLump'] = true;
        req.session.data['noLump'] = false;
        req.session.data['getLump'] = maxLumpAmount;

    } else if (lumpAmount === 'None') {
        req.session.data['maxLump'] = false;
        req.session.data['noLump'] = true;
        req.session.data['getLump'] = noLumpAmount;

    } else if (lumpAmount === 'Other') {
        req.session.data['maxLump'] = false;
        req.session.data['noLump'] = false;
        if (req.session.data['other-amount-value'] === '18000') {
            req.session.data['getLump'] = '18,000';
        } else {
            req.session.data['getLump'] = req.session.data['other-amount-value'];
        }
    }

    res.redirect(`${RESULT_PATH}`);
})

module.exports = router
