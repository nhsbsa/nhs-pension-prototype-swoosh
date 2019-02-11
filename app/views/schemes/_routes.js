const express = require('express');
const router = express.Router();

const BASE_PATH = 'schemes';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/hub';

// router.post('/', function (req, res) {
//     res.redirect(`${NEXT_PATH}`);
// })

module.exports = router;