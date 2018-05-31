const database = require('../../src/database')
const ObjectID = require('mongodb').ObjectID
const Weather = require('./weather')
const WEATHER_COLLECTION = 'weather'

const weatherDao = {
  async insertOne(weather) {
    return await database.insertOne(WEATHER_COLLECTION, weather)
  },
  async insertMany(weathers) {
    return await database.insertMany(WEATHER_COLLECTION, weathers)
  },
  async deleteOne(_id) {
    return await database.deleteOne(WEATHER_COLLECTION, {_id:new ObjectID(_id)})
  },
  async deleteMany(_ids) {
    let where = {_id:{$in:_ids.map(_id => new ObjectID(_id))}}
    return await database.deleteMany(WEATHER_COLLECTION, where)
  },
  async updateOne(weather) {
    let _id = new ObjectID(weather._id)
    let update = new Weather(weather.name, weather.code, weather.description)
    return await database.updateOne(WEATHER_COLLECTION, {_id:_id}, update)
  },
  async updateMany(where, update) {
    return await database.updateMany(WEATHER_COLLECTION, where, update)
  },
  async find(where) {
    return await database.find(WEATHER_COLLECTION, where)
  }
}

module.exports = weatherDao
