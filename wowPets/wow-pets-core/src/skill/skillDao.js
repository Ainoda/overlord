const database = require('../../src/database')
const ObjectID = require('mongodb').ObjectID
const Skill = require('./skill')
const SKILL_COLLECTION = 'skill'

const skillDao = {
  async insertOne(skill) {
    let obj = new Skill(skill.name, skill.code, skill.description, skill.cooling ? skill.cooling : 0, skill.useRounds ? skill.useRounds : 1, skill.lastRounds ? skill.lastRounds : 0, skill.species ? new ObjectID(skill.species) : '', skill.hitRate ? skill.hitRate : 100)
    return await database.insertOne(SKILL_COLLECTION, obj)
  },
  async deleteOne(_id) {
    return await database.deleteOne(SKILL_COLLECTION, {_id:new ObjectID(_id)})
  },
  async deleteMany(_ids) {
    let where = {_id:{$in:_ids.map(_id => new ObjectID(_id))}}
    return await database.deleteMany(SKILL_COLLECTION, where)
  },
  async updateOne(skill) {
    let _id = new ObjectID(skill._id)
    let update = new Skill(skill.name, skill.code, skill.description, skill.cooling ? skill.cooling : 0, skill.useRounds ? skill.useRounds : 1, skill.lastRounds ? skill.lastRounds : 0, skill.species ? new ObjectID(skill.species) : '', skill.hitRate ? skill.hitRate : 100)
    return await database.updateOne(SKILL_COLLECTION, {_id:_id}, update)
  },
  async find(where) {
    return await database.find(SKILL_COLLECTION, where)
  }
}

module.exports = skillDao
