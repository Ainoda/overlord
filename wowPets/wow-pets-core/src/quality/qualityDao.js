const database = require('../../src/database')
const Quality = require('./quality')
const ObjectID = require('mongodb').ObjectID
const QUALITY_COLLECTION = 'quality'

const qualityDao = {
  async insertOne(quality) {
    let obj = new Quality(quality.name, quality.code)
    return await database.insertOne(QUALITY_COLLECTION, obj)
  },
  async deleteOne(_id) {
    return await database.deleteOne(QUALITY_COLLECTION, {_id:new ObjectID(_id)})
  },
  async deleteMany(_ids) {
    let where = {_id:{$in:_ids.map(_id => new ObjectID(_id))}}
    return await database.deleteMany(QUALITY_COLLECTION, where)
  },
  async updateOne(quality) {
    let _id = new ObjectID(quality._id)
    let update = new Quality(quality.name, quality.code)
    return await database.updateOne(QUALITY_COLLECTION, {_id:_id}, update)
  },
  async find(where) {
    return await database.find(QUALITY_COLLECTION, where)
  }
}

module.exports = qualityDao
