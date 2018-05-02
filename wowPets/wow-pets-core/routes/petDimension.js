var express = require('express');
var router = express.Router();
const petDimensionService = require('../src/petDimension/petDimensionService');

/* GET petDimensionService listing. */
router.post('/insert', (req, res, next) => {
  // petDimensionService.insert(pet).then(result => {
  //   res.send(result);
  // });
  res.send({ok: 1});
});
router.delete('/delete', (req, res, next) => {
  // petDimensionService.delete({name:1}).then(result => {
  //   res.send(result);
  // });
  res.send({ok: 1});
});
router.put('/update', (req, res, next) => {
  // petDimensionService.update({name:1},{code:2}).then(result => {
  //   res.send(result);
  // });
  res.send({ok: 1});
});
router.get('/find', (req, res, next) => {
  // petDimensionService.find({name:1}).then(result => {
  //   res.send(result);
  // });
  res.send({ok: 1});
});

module.exports = router;
