var express = require('express');
var router = express.Router();
const speciesService = require('../src/species/speciesService');

/* GET species listing. */
router.post('/insert', (req, res, next) => {
  speciesService.insert(req.body).then(result => {
    res.send(result);
  });
});
router.delete('/delete', (req, res, next) => {
  // speciesService.delete({name:1}).then(result => {
  //   res.send(result);
  // });
  res.send({ok: 1});
});
router.put('/update', (req, res, next) => {
  speciesService.update(req.body).then(result => {
    res.send(result);
  });
});
router.get('/find', (req, res, next) => {
  speciesService.find().then(result => {
    res.send(result);
  });
  // res.send({ok:1});
});

module.exports = router;
