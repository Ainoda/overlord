const skillDao = require('./skillDao')

const skillService = {
  insert(skill) {
    let result
    if (Array.isArray(skill)) {
      result = skillDao.insertMany(skill)
    } else {
      result = skillDao.insertOne(skill)
    }
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
