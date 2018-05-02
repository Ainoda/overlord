const database = require('../../src/database');
const SKILL_COLLECTION = 'skill';

const skillDao = {
  async insertOne(skill) {
    return await database.insertOne(WEATHER_COLLECTION, skill);
  },
  async insertMany(skills) {
    return await database.insertMany(WEATHER_COLLECTION, skills);
  },
  async deleteOne(where) {
    return await database.deleteOne(WEATHER_COLLECTION, where);
  },
  async deleteMany(where) {
    return await database.deleteMany(WEATHER_COLLECTION, where);
  },
  async updateOne(where, update) {
    return await database.updateOne(WEATHER_COLLECTION, where, update);
  },
  async updateMany(where, update) {
    return await database.updateMany(WEATHER_COLLECTION, where, update);
  },
  async find(where) {
    return await database.find(WEATHER_COLLECTION, where);
  }
}

module.exports = skillDao;
