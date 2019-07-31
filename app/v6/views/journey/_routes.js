const express = require('express');
const router = express.Router();

const BASE_PATH = 'journey';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/scenario';

router.post('/', function (req, res) {
    res.redirect(`${NEXT_PATH}`);
})

module.exports = router;
