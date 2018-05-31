var express = require('express')
var router = express.Router()
const qualityService = require('../src/quality/qualityService')

/* GET quality listing. */
router.post('/insert', (req, res, next) => {
  // qualityService.insert(quality).then(result => {
  //   res.send(result)
  // })
  res.send({ok: 1})
})
router.delete('/delete', (req, res, next) => {
  // qualityService.delete({name:1}).then(result => {
  //   res.send(result)
  // })
  res.send({ok: 1})
})
router.put('/update', (req, res, next) => {
  // qualityService.update({name:1},{code:2}).then(result => {
  //   res.send(result)
  // })
  res.send({ok: 1})
})
router.get('/find', (req, res, next) => {
  // qualityService.find({name:1}).then(result => {
  //   res.send(result)
  // })
  res.send({ok: 1})
})

module.exports = router
