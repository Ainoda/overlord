const database = require('../../src/database')
const QUALITY_COLLECTION = 'quality'

const qualityDao = {
  async insertOne(quality) {
    return await database.insertOne(QUALITY_COLLECTION, quality)
  },
  async deleteOne(where) {
    return await database.deleteOne(QUALITY_COLLECTION, where)
  },
  async deleteMany(where) {
    return await database.deleteMany(QUALITY_COLLECTION, where)
  },
  async updateOne(where, update) {
    return await database.updateOne(QUALITY_COLLECTION, where, update)
  },
  async find(where) {
    return await database.find(QUALITY_COLLECTION, where)
  }
}

module.exports = qualityDao
