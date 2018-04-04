var express = require('express');
var router = express.Router();
const Pet = require('../src/pet/pet');
const petService = require('../src/pet/petService');

/* GET pet listing. */
router.get('/insert', (req, res, next) => {
  let pet = new Pet(1,1);
  petService.insert(pet).then(result => {
    res.send(result);
  });
});
router.get('/delete', (req, res, next) => {
  petService.delete({name:1}).then(result => {
    res.send(result);
  });
});
router.get('/update', (req, res, next) => {
  petService.update({name:1},{code:2}).then(result => {
    res.send(result);
  });
});
router.get('/find', (req, res, next) => {
  petService.find({name:1}).then(result => {
    res.send(result);
  });
});

module.exports = router;
