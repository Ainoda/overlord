var express = require('express')
var router = express.Router()
const petDimensionService = require('../src/petDimension/petDimensionService')

/* GET petDimensionService listing. */
router.post('/insert', (req, res, next) => {
  petDimensionService.insert(req.body).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
router.delete('/delete/:id', (req, res, next) => {
  petDimensionService.delete(req.params.id).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
router.put('/update', (req, res, next) => {
  petDimensionService.update(req.body).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
router.get('/find', (req, res, next) => {
  petDimensionService.find(req.query).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})

module.exports = router
