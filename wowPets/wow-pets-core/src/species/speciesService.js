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
  delete(_id) {
    return speciesDao.deleteOne(_id);
  },
  update(species) {
    return speciesDao.updateOne(species);
  },
  find(where) {
    return speciesDao.find(where);
  }
}

module.exports = speciesService;
