const petDimensionDao = require('./petDimensionDao')

const petDimensionService = {
  insert(petDimension) {
    let result = petDimensionDao.insertOne(petDimension)
    return result
  },
  delete(_id) {
    return petDimensionDao.deleteOne(_id)
  },
  update(petDimension) {
    return petDimensionDao.updateOne(petDimension)
  },
  find(where) {
    return petDimensionDao.find(where)
  }
}

module.exports = petDimensionService
