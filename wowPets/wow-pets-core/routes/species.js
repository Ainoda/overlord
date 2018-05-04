var express = require('express');
var router = express.Router();
const speciesService = require('../src/species/speciesService');

/* GET species listing. */
router.post('/insert', (req, res, next) => {
  speciesService.insert(req.body).then(result => {
    res.send(result);
  }).catch(error => {
    res.send(error);
  });
});
router.delete('/delete/:id', (req, res, next) => {
  speciesService.delete(req.params.id).then(result => {
    res.send(result);
  }).catch(error => {
    res.send(error);
  });
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
});

module.exports = router;
