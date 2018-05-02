const speciesDao = require('./speciesDao');

const speciesService = {
  insert(species) {
    let result;
    if (Array.isArray(species)) {
      result = speciesDao.insertMany(species);
    } else {
      result = speciesDao.insertOne(species);
    }
    return result;
  },
  delete(where) {
    return speciesDao.deleteOne(where);
  },
  update(where, update) {
    return speciesDao.updateOne(where, update);
  },
  find(where) {
    return speciesDao.find(where);
  }
}

module.exports = speciesService;
