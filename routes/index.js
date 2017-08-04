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
router.get('/level', function(req, res, next) {
  res.render('level', { title: '编辑标高' });
});
router.get('/createSheets', function(req, res, next) {
  res.render('createSheets', { title: '创建图纸' });
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
router.get('/support', function(req, res, next) {
  res.render('support', { title: '布置支吊架' });
});
router.get('/triangleBeam', function(req, res, next) {
  res.render('triangleBeam', { title: '三角梁布置' });
});
router.get('/exportDWG', function(req, res, next) {
  res.render('exportDWG', { title: '导出DWG' });
});
router.get('/cable', function(req, res, next) {
  res.render('cable', { title: '电缆沟' });
});
router.get('/shortCircuit', function(req, res, next) {
  res.render('shortCircuit', { title: '短路计算' });
});
router.get('/shortCalc', function(req, res, next) {
  res.render('shortCalc', { title: '短路计算' });
});
router.get('/calcResult', function(req, res, next) {
  res.render('calcResult', { title: '计算结果' });
});
router.get('/calclightning', function(req, res, next) {
  res.render('calclightning', { title: '计算结果' });
});
router.get('/groundCalc', function(req, res, next) {
  res.render('groundCalc', { title: '接地计算' });
});
router.get('/groundGrid', function(req, res, next) {
  res.render('groundGrid', { title: '接地网布置' });
});
router.get('/doorWindow', function(req, res, next) {
  res.render('doorWindow', { title: '布置门窗' });
});
router.get('/pdzz', function(req, res, next) {
  res.render('pdzz', { title: '配电装置-安全净距' });
});
module.exports = router;
