const skillDao = require('./skillDao')
const {utils} = require('../other/utils')

const skillService = {
  insert(skill) {
    if(skill.species && !utils.checkId(skill.species)){
      return utils.createIdErrorMsg()
    }
    let result = skillDao.insertOne(skill)
    return result
  },
  delete(where) {
    return skillDao.deleteOne(where)
  },
  update(where, update) {
    return skillDao.updateOne(where, update)
  },
  find(where) {
    return skillDao.find(where)
  }
}

module.exports = skillService
