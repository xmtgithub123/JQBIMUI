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
router.get('/case', function(req, res, next) {
  res.render('case', { title: '我的项目' });
});
router.get('/fileUpdate', function(req, res, next) {
  res.render('fileUpdate', { title: '文件更新提醒' });
});
router.get('/proofread', function(req, res, next) {
  res.render('proofread', { title: '校审' });
});
router.get('/tizi', function(req, res, next) {
  res.render('tizi', { title: '提资' });
});
router.get('/zuku', function(req, res, next) {
  res.render('zuku', { title: '族库' });
});
router.get('/dianqigui', function(req, res, next) {
  res.render('dianqigui', { title: '插入电气柜' });
});




module.exports = router;
