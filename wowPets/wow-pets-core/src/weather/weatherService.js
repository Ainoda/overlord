const weatherDao = require('./weatherDao');

const weatherService = {
  insert(weather) {
    let result;
    if (Array.isArray(weather)) {
      result = weatherDao.insertMany(weather);
    } else {
      result = weatherDao.insertOne(weather);
    }
    return result;
  },
  delete(where) {
    return weatherDao.deleteOne(where);
  },
  update(where, update) {
    return weatherDao.updateOne(where, update);
  },
  find(where) {
    return weatherDao.find(where);
  }
}

module.exports = weatherService;
