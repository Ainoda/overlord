var express = require('express')
var router = express.Router()
const qualityService = require('../src/quality/qualityService')

/* GET quality listing. */
router.post('/insert', (req, res, next) => {
  qualityService.insert(req.body).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
router.delete('/delete', (req, res, next) => {
  qualityService.delete(req.params.id).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
router.put('/update', (req, res, next) => {
  qualityService.update(req.body).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
router.get('/find', (req, res, next) => {
  qualityService.find().then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})

module.exports = router
