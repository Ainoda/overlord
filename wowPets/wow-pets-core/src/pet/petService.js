const petDao = require('./petDao');

const petService = {
  insert(pet) {
    let result;
    if(Array.isArray(pet)){
      result = petDao.insertMany(pet);
    }else {
      result = petDao.insertOne(pet);
    }
    return result;
  },
  delete(where) {
    return petDao.deleteOne(where);
  },
  update(where, update) {
    return petDao.updateOne(where, update);
  },
  find(where) {
    return petDao.find(where);
  }
}

module.exports = petService;
