var express = require('express');
var router = express.Router();
const weatherService = require('../src/weather/weatherService');

/* GET weather listing. */
router.post('/insert', (req, res, next) => {
  // weatherService.insert(weather).then(result => {
  //   res.send(result);
  // });
  res.send({ok: 1});
});
router.delete('/delete', (req, res, next) => {
  // weatherService.delete({name:1}).then(result => {
  //   res.send(result);
  // });
  res.send({ok: 1});
});
router.put('/update', (req, res, next) => {
  // weatherService.update({name:1},{code:2}).then(result => {
  //   res.send(result);
  // });
  res.send({ok: 1});
});
router.get('/find', (req, res, next) => {
  // weatherService.find({name:1}).then(result => {
  //   res.send(result);
  // });
  res.send({ok: 1});
});

module.exports = router;
