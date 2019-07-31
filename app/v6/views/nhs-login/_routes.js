const express = require('express');
const router = express.Router();

const BASE_PATH = 'nhs-login';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/matching';


// router.post('/provider', function (req, res) {
//     res.redirect('provider/1');
// })

module.exports = router;