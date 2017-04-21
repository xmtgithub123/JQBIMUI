var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/step1', function(req, res, next) {
  res.render('step1', { title: 'Express' });
});
router.get('/step2', function(req, res, next) {
  res.render('step2', { title: 'Express' });
});
router.get('/step3', function(req, res, next) {
  res.render('step3', { title: 'Express' });
});
router.get('/step4', function(req, res, next) {
  res.render('step4', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/submit', function(req, res, next) {
  res.render('submit', { title: 'Express' });
});
module.exports = router;
