const database = require('../../src/database');
const WEATHER_COLLECTION = 'weather';

const weatherDao = {
  async insertOne(weather) {
    return await database.insertOne(WEATHER_COLLECTION, weather);
  },
  async insertMany(weathers) {
    return await database.insertMany(WEATHER_COLLECTION, weathers);
  },
  async deleteOne(where) {
    return await database.deleteOne(WEATHER_COLLECTION, where);
  },
  async deleteMany(where) {
    return await database.deleteMany(WEATHER_COLLECTION, where);
  },
  async updateOne(where, update) {
    return await database.updateOne(WEATHER_COLLECTION,where, update);
  },
  async updateMany(where, update) {
    return await database.updateMany(WEATHER_COLLECTION,where, update);
  },
  async find(where){
    return await database.find(WEATHER_COLLECTION,where);
  }
}

module.exports = weatherDao;
