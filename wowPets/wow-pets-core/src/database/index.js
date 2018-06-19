const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/wowPets'
const {utils,DB_TYPE,RES_STATUS} = require('../other/utils')

const database = {
  db: '',
  connect() {
    MongoClient.connect(url, (err, db) => {
      if (err) throw err
      console.log('数据库已创建!')
      this.db = db.db('wowPets')
    })
  },
  insertOne(collection, obj) {
    return new Promise((resolve, reject) => {
      if(!this.db){
        reject(utils.mongodbResMsg('',RES_STATUS.FAILURE))
        return
      }
      this.db.collection(collection).insertOne(obj, (err, res) => {
        if (err) throw err
        if(res.result.ok === 1 && res.result.n === 1){
          resolve(utils.mongodbResMsg(DB_TYPE.INSERT, RES_STATUS.SUCCESS, res.result))
        }else {
          reject(utils.mongodbResMsg(DB_TYPE.INSERT, RES_STATUS.FAILURE, res.result))
        }
      })
    })
  },
  insertMany(collection, arr) {
    return new Promise((resolve, reject) => {
      if(!this.db){
        reject(utils.mongodbResMsg('',RES_STATUS.FAILURE))
        return
      }
      this.db.collection(collection).insertMany(arr, (err, res) => {
        if (err) throw err
        if(res.result.ok === 1 && res.result.n > 0){
          resolve(utils.mongodbResMsg(DB_TYPE.INSERT, RES_STATUS.SUCCESS, res.result))
        }else {
          reject(utils.mongodbResMsg(DB_TYPE.INSERT, RES_STATUS.FAILURE, res.result))
        }
      })
    })
  },
  deleteOne(collection, where) {
    return new Promise((resolve, reject) => {
      if(!this.db){
        reject(utils.mongodbResMsg('',RES_STATUS.FAILURE))
        return
      }
      this.db.collection(collection).deleteOne(where, (err, res) => {
        if (err) throw err
        if(res.result.ok === 1 && res.result.n === 1){
          resolve(utils.mongodbResMsg(DB_TYPE.DELETE, RES_STATUS.SUCCESS, res.result))
        }else {
          reject(utils.mongodbResMsg(DB_TYPE.DELETE, RES_STATUS.FAILURE, res.result))
        }
      })
    })
  },
  deleteMany(collection, where) {
    return new Promise((resolve, reject) => {
      if(!this.db){
        reject(utils.mongodbResMsg('',RES_STATUS.FAILURE))
        return
      }
      this.db.collection(collection).deleteMany(where, (err, res) => {
        if (err) throw err
        if(res.result.ok === 1 && res.result.n > 0){
          resolve(utils.mongodbResMsg(DB_TYPE.DELETE, RES_STATUS.SUCCESS, res.result))
        }else {
          reject(utils.mongodbResMsg(DB_TYPE.DELETE, RES_STATUS.FAILURE, res.result))
        }
      })
    })
  },
  updateOne(collection, where, update) {
    return new Promise((resolve, reject) => {
      if(!this.db){
        reject(utils.mongodbResMsg('',RES_STATUS.FAILURE))
        return
      }
      let updateStr = {
        $set: update
      }
      this.db.collection(collection).updateOne(where, updateStr, (err, res) => {
        if (err) throw err
        if(res.result.ok === 1 && res.result.nModified >= 0){
          resolve(utils.mongodbResMsg(DB_TYPE.UPDATE, RES_STATUS.SUCCESS, res.result))
        }else {
          reject(utils.mongodbResMsg(DB_TYPE.UPDATE, RES_STATUS.FAILURE, res.result))
        }
      })
    })
  },
  updateMany(collection, where, update) {
    return new Promise((resolve, reject) => {
      if(!this.db){
        reject(utils.mongodbResMsg('',RES_STATUS.FAILURE))
        return
      }
      let updateStr = {
        $set: update
      }
      this.db.collection(collection).updateMany(where, updateStr, (err, res) => {
        if (err) throw err
        if(res.result.ok === 1 && res.result.nModified > 0){
          resolve(utils.mongodbResMsg(DB_TYPE.UPDATE, RES_STATUS.SUCCESS, res.result))
        }else {
          reject(utils.mongodbResMsg(DB_TYPE.UPDATE, RES_STATUS.FAILURE, res.result))
        }
      })
    })
  },
  find(collection, where = {}) {
    return new Promise((resolve, reject) => {
      if(!this.db){
        reject(utils.mongodbResMsg('',RES_STATUS.FAILURE))
        return
      }
      this.db.collection(collection).find(where).toArray((err, res) => {
        if (err) throw err
        resolve(res)
      })
    })
  }
}
database.connect()
module.exports = database
