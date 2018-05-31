var express = require('express')
var router = express.Router()
const skillService = require('../src/skill/skillService')

/* GET skill listing. */
router.post('/insert', (req, res, next) => {
  // skillService.insert(skill).then(result => {
  //   res.send(result)
  // })
  res.send({ok: 1})
})
router.delete('/delete', (req, res, next) => {
  // skillService.delete({name:1}).then(result => {
  //   res.send(result)
  // })
  res.send({ok: 1})
})
router.put('/update', (req, res, next) => {
  // skillService.update({name:1},{code:2}).then(result => {
  //   res.send(result)
  // })
  res.send({ok: 1})
})
router.get('/find', (req, res, next) => {
  // skillService.find({name:1}).then(result => {
  //   res.send(result)
  // })
  res.send({ok: 1})
})

module.exports = router
