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
router.get('/review', function(req, res, next) {
  res.render('review', { title: '校审' });
});
router.get('/editReview', function(req, res, next) {
  res.render('editReview', { title: '校审意见' });
});
router.get('/submitReview', function(req, res, next) {
  res.render('submitReview', { title: '提交校审' });
});
router.get('/submitData', function(req, res, next) {
  res.render('submitData', { title: '提资' });
});
router.get('/family', function(req, res, next) {
  res.render('family', { title: '族库' });
});
router.get('/cabinet', function(req, res, next) {
  res.render('cabinet', { title: '插入电气柜' });
});




module.exports = router;
