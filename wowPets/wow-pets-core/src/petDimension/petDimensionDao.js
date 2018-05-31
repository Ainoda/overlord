const database = require('../../src/database')
const PET_DIMENSION_COLLECTION = 'pet_dimension'

const petDimensionDao = {
  async insertOne(petDimension) {
    return await database.insertOne(PET_DIMENSION_COLLECTION, petDimension)
  },
  async deleteOne(where) {
    return await database.deleteOne(PET_DIMENSION_COLLECTION, where)
  },
  async deleteMany(where) {
    return await database.deleteMany(PET_DIMENSION_COLLECTION, where)
  },
  async updateOne(where, update) {
    return await database.updateOne(PET_DIMENSION_COLLECTION, where, update)
  },
  async find(where) {
    return await database.find(PET_DIMENSION_COLLECTION, where)
  }
}

module.exports = petDimensionDao
