const qualityDao = require('./qualityDao')

const qualityService = {
  insert(quality) {
    let result = qualityDao.insertOne(quality)
    return result
  },
  delete(_id) {
    return qualityDao.deleteOne(_id)
  },
  update(quality) {
    return qualityDao.updateOne(quality)
  },
  find(where) {
    return qualityDao.find(where)
  }
}

module.exports = qualityService
