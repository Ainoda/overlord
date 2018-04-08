var express = require('express');
var router = express.Router();
const speciesService = require('../src/species/speciesService');

/* GET species listing. */
router.post('/insert', (req, res, next) => {
  // speciesService.insert(species).then(result => {
  //   res.send(result);
  // });
  res.send({ok:1});
});
router.delete('/delete', (req, res, next) => {
  // speciesService.delete({name:1}).then(result => {
  //   res.send(result);
  // });
  res.send({ok:1});
});
router.put('/update', (req, res, next) => {
  // speciesService.update({name:1},{code:2}).then(result => {
  //   res.send(result);
  // });
  res.send({ok:1});
});
router.get('/find', (req, res, next) => {
  // speciesService.find({name:1}).then(result => {
  //   res.send(result);
  // });
  res.send({ok:1});
});

module.exports = router;
