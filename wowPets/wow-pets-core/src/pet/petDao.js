const database = require('../../src/database')
const PET_COLLECTION = 'pet'

const petDao = {
  async insertOne(pet) {
    return await database.insertOne(PET_COLLECTION, pet)
  },
  async insertMany(pets) {
    return await database.insertMany(PET_COLLECTION, pets)
  },
  async deleteOne(where) {
    return await database.deleteOne(PET_COLLECTION, where)
  },
  async deleteMany(where) {
    return await database.deleteMany(PET_COLLECTION, where)
  },
  async updateOne(where, update) {
    return await database.updateOne(PET_COLLECTION, where, update)
  },
  async updateMany(where, update) {
    return await database.updateMany(PET_COLLECTION, where, update)
  },
  async find(where) {
    return await database.find(PET_COLLECTION, where)
  }
}

module.exports = petDao
