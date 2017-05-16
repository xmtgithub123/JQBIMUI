var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/column', function(req, res, next) {
  res.render('column', { title: 'Express' });
});
router.get('/door', function(req, res, next) {
  res.render('door', { title: 'Express' });
});
router.get('/grid', function(req, res, next) {
  res.render('grid', { title: 'Express' });
});
router.get('/window', function(req, res, next) {
  res.render('window', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/submit', function(req, res, next) {
  res.render('submit', { title: 'Express' });
});
router.get('/bg', function(req, res, next) {
  res.render('bg', { title: '编辑标高' });
});
router.get('/tz', function(req, res, next) {
  res.render('tz', { title: '创建图纸' });
});
module.exports = router;
