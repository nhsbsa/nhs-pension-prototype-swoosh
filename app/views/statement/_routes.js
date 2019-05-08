const express = require('express');
const router = express.Router();

const BASE_PATH = '/';
const ABS_BASE_PATH = `${BASE_PATH}`;

router.get('/2015', function (req, res) {
    res.redirect('/statement/2015/2018-2019');
})

router.get('/2008', function (req, res) {
    res.redirect('/statement/2008/toadd');
})

router.get('/1995', function (req, res) {
    res.redirect('/statement/1995/toadd');
})

module.exports = router;