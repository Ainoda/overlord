const database = require('../../src/database')
const PetDimension = require('./petDimension')
const ObjectID = require('mongodb').ObjectID
const PET_DIMENSION_COLLECTION = 'pet_dimension'

const petDimensionDao = {
  async insertOne(petDimension) {
    let obj = new PetDimension(petDimension.name, petDimension.code ? petDimension.code : petDimension.name, petDimension.hp, petDimension.attack, petDimension.speed)
    return await database.insertOne(PET_DIMENSION_COLLECTION, obj)
  },
  async deleteOne(_id) {
    return await database.deleteOne(PET_DIMENSION_COLLECTION, {_id:new ObjectID(_id)})
  },
  async deleteMany(_ids) {
    let where = {_id:{$in:_ids.map(_id => new ObjectID(_id))}}
    return await database.deleteMany(PET_DIMENSION_COLLECTION, where)
  },
  async updateOne(petDimension) {
    let _id = new ObjectID(petDimension._id)
    let update = new PetDimension(petDimension.name, petDimension.code ? petDimension.code : petDimension.name, petDimension.hp, petDimension.attack, petDimension.speed)
    return await database.updateOne(PET_DIMENSION_COLLECTION, {_id:_id}, update)
  },
  async find(where) {
    return await database.find(PET_DIMENSION_COLLECTION, where)
  }
}

module.exports = petDimensionDao
