var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/fire', function(req, res, next) {
  res.send("<h1>Стихия огня</h1>")
});

router.get('/wind', function(req, res, next) {
  res.send("<h1>Стихия ветра</h1>")
});

router.get('/water', function(req, res, next) {
  res.send("<h1>Стихия воды</h1>")
});

module.exports = router;
