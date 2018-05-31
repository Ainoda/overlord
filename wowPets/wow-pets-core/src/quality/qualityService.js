const qualityDao = require('./qualityDao')

const qualityService = {
  insert(quality) {
    let result
    if (Array.isArray(quality)) {
      result = qualityDao.insertMany(quality)
    } else {
      result = qualityDao.insertOne(quality)
    }
    return result
  },
  delete(where) {
    return qualityDao.deleteOne(where)
  },
  update(where, update) {
    return qualityDao.updateOne(where, update)
  },
  find(where) {
    return qualityDao.find(where)
  }
}

module.exports = qualityService
