var express = require('express')
var router = express.Router()
const weatherService = require('../src/weather/weatherService')

/* GET weather listing. */
router.post('/insert', (req, res, next) => {
  weatherService.insert(req.body).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
router.delete('/delete/:id', (req, res, next) => {
  weatherService.delete(req.params.id).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
router.put('/update', (req, res, next) => {
  weatherService.update(req.body).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
router.get('/find', (req, res, next) => {
  weatherService.find(req.query).then(result => {
    res.send(result)
  })
})

module.exports = router
