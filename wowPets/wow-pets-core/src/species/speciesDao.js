const database = require('../../src/database')
const ObjectID = require('mongodb').ObjectID
const Species = require('./species')
const SPECIES_COLLECTION = 'species'

const speciesDao = {
  async insertOne(species) {
    let obj = new Species(species.name,species.code,species.tap?new ObjectID(species.tap):'',species.hit?new ObjectID(species.hit):'')
    return await database.insertOne(SPECIES_COLLECTION, obj)
  },
  async deleteOne(_id) {
    return await database.deleteOne(SPECIES_COLLECTION, {_id:new ObjectID(_id)})
  },
  async deleteMany(_ids) {
    let where = {_id:{$in:_ids.map(_id => new ObjectID(_id))}}
    return await database.deleteMany(SPECIES_COLLECTION, where)
  },
  async updateOne(species) {
    let _id = new ObjectID(species._id)
    let update = new Species(species.name,species.code,species.tap?new ObjectID(species.tap):'',species.hit?new ObjectID(species.hit):'')
    return await database.updateOne(SPECIES_COLLECTION, {_id:_id}, update)
  },
  async find(where) {
    return await database.find(SPECIES_COLLECTION, where)
  }
}

module.exports = speciesDao
