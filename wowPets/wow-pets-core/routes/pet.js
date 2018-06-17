var express = require('express')
var router = express.Router()
const petService = require('../src/pet/petService')

/* GET pet listing. */
router.post('/insert', (req, res, next) => {
  petService.insert(req.body).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
router.delete('/delete/:id', (req, res, next) => {
  petService.delete(req.params.id).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
router.put('/update', (req, res, next) => {
  petService.update(req.body).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
router.get('/find', (req, res, next) => {
  petService.find().then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})

module.exports = router
