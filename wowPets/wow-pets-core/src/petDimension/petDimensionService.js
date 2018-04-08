const petDimensionDao = require('./petDimensionDao');

const petDimensionService = {
  insert(petDimension) {
    let result;
    if(Array.isArray(petDimension)){
      result = petDimensionDao.insertMany(petDimension);
    }else {
      result = petDimensionDao.insertOne(petDimension);
    }
    return result;
  },
  delete(where) {
    return petDimensionDao.deleteOne(where);
  },
  update(where, update) {
    return petDimensionDao.updateOne(where, update);
  },
  find(where) {
    return petDimensionDao.find(where);
  }
}

module.exports = petDimensionService;
