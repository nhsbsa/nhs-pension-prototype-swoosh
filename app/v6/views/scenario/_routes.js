const express = require('express');
const router = express.Router();

const BASE_PATH = 'scenario';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/start';

router.post('/', function (req, res) {
    res.redirect(`${NEXT_PATH}`);
})

module.exports = router;
