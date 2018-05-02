const database = require('../../src/database');
const SPECIES_COLLECTION = 'species';

const speciesDao = {
  async insertOne(species) {
    return await database.insertOne(SPECIES_COLLECTION, species);
  },
  async insertMany(species) {
    return await database.insertMany(SPECIES_COLLECTION, species);
  },
  async deleteOne(where) {
    return await database.deleteOne(SPECIES_COLLECTION, where);
  },
  async deleteMany(where) {
    return await database.deleteMany(SPECIES_COLLECTION, where);
  },
  async updateOne(where, update) {
    return await database.updateOne(SPECIES_COLLECTION, where, update);
  },
  async updateMany(where, update) {
    return await database.updateMany(SPECIES_COLLECTION, where, update);
  },
  async find(where) {
    return await database.find(SPECIES_COLLECTION, where);
  }
}

module.exports = speciesDao;
