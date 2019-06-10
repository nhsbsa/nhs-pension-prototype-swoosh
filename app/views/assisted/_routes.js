var express = require('express')
var router = express.Router()

const BASE_PATH = '/assisted';
const ABS_BASE_PATH = `${BASE_PATH}`;

router.get('/', function (req, res) {
  res.redirect('/assisted/find')
})

router.get('/find', function (req, res) {
    req.session.data.show = undefined;
    req.next();
});

router.post('/find', function (req, res) {
    const answer = req.body.nino;

    // nino invalid
    if (answer === 'invalid') {
      res.redirect(`${ABS_BASE_PATH}/find?show=invalid`);

    } else if (!answer.length) {
        res.redirect(`${ABS_BASE_PATH}/find?show=error`);

    } else {
        res.redirect(`/hub`);
    }
  });

module.exports = router