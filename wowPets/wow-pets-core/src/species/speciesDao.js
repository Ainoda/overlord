const database = require('../../src/database');
var ObjectID = require('mongodb').ObjectID;
var Species = require('./species');
const SPECIES_COLLECTION = 'species';

const speciesDao = {
  async insertOne(species) {
    return await database.insertOne(SPECIES_COLLECTION, species);
  },
  async insertMany(species) {
    return await database.insertMany(SPECIES_COLLECTION, species);
  },
  async deleteOne(_id) {
    return await database.deleteOne(SPECIES_COLLECTION, {_id:new ObjectID(_id)});
  },
  async deleteMany(where) {
    return await database.deleteMany(SPECIES_COLLECTION, where);
  },
  async updateOne(species) {
    let _id = new ObjectID(species._id);
    let update = new Species(species.name,species.code,species.prey,species.hunter);
    return await database.updateOne(SPECIES_COLLECTION, {_id:_id}, update);
  },
  async updateMany(where, update) {
    return await database.updateMany(SPECIES_COLLECTION, where, update);
  },
  async find(where) {
    return await database.find(SPECIES_COLLECTION, where);
  }
}

module.exports = speciesDao;
