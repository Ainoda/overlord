const database = require('../../src/database')
const ObjectID = require('mongodb').ObjectID
const Pet = require('./pet')
const PET_COLLECTION = 'pet'

const petDao = {
  async insertOne(pet) {
    let obj = new Pet(pet.name,pet.code,pet.species?new ObjectID(pet.species):'',pet.firstSk?new ObjectID(pet.firstSk):'',pet.secondSk?new ObjectID(pet.secondSk):'',pet.thirdSk?new ObjectID(pet.thirdSk):'',pet.fourthSk?new ObjectID(pet.fourthSk):'',pet.fifthSk?new ObjectID(pet.fifthSk):'',pet.sixthSk?new ObjectID(pet.sixthSk):'',pet.dimension)
    return await database.insertOne(PET_COLLECTION, pet)
  },
  async deleteOne(_id) {
    return await database.deleteOne(PET_COLLECTION, {_id:new ObjectID(_id)})
  },
  async deleteMany(_ids) {
    let where = {_id:{$in:_ids.map(_id => new ObjectID(_id))}}
    return await database.deleteMany(PET_COLLECTION, where)
  },
  async updateOne(pet) {
    let _id = new ObjectID(pet._id)
    let update = new Pet(pet.name,pet.code,pet.species?new ObjectID(pet.species):'',pet.firstSk?new ObjectID(pet.firstSk):'',pet.secondSk?new ObjectID(pet.secondSk):'',pet.thirdSk?new ObjectID(pet.thirdSk):'',pet.fourthSk?new ObjectID(pet.fourthSk):'',pet.fifthSk?new ObjectID(pet.fifthSk):'',pet.sixthSk?new ObjectID(pet.sixthSk):'',pet.dimension)
    return await database.updateOne(PET_COLLECTION, {_id:_id}, update)
  },
  async find(where) {
    return await database.find(PET_COLLECTION, where)
  }
}

module.exports = petDao
