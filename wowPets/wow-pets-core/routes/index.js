var express = require('express');
var router = express.Router();
var database = require('../src/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/insert', function(req, res, next) {
  database.insertOne('pet',{name:1,code:1});
  res.send('ok');
});
router.get('/delete', function(req, res, next) {
  database.deleteOne('pet',{name:1});
  res.send('ok');
});
router.get('/update', function(req, res, next) {
  database.updateOne('pet',{name:1},{code:2});
  res.send('ok');
});
router.get('/find', function(req, res, next) {
  database.find('pet');
  res.send('ok');
});

module.exports = router;
