var express = require('express')
var router = express.Router()
const petService = require('../src/pet/petService')

/* GET pet listing. */
router.post('/insert', (req, res, next) => {
  // petService.insert(pet).then(result => {
  //   res.send(result)
  // })
  res.send({ok: 1})
})
router.delete('/delete', (req, res, next) => {
  // petService.delete({name:1}).then(result => {
  //   res.send(result)
  // })
  res.send({ok: 1})
})
router.put('/update', (req, res, next) => {
  // petService.update({name:1},{code:2}).then(result => {
  //   res.send(result)
  res.send({ok: 1})
  // })
})
router.get('/find', (req, res, next) => {
  petService.find().then(result => {
    res.send(result)
  })
  // res.send({ok:1})
})

module.exports = router
