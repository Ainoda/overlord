var express = require('express')
var router = express.Router()
const skillService = require('../src/skill/skillService')

/* GET skill listing. */
router.post('/insert', (req, res, next) => {
  skillService.insert(req.body).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
router.delete('/delete/:id', (req, res, next) => {
  skillService.delete(req.params.id).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
router.put('/update', (req, res, next) => {
  skillService.update(req.body).then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})
router.get('/find', (req, res, next) => {
  skillService.find().then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})

module.exports = router
