const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/wowPets';

const database = {
  db:'',
  connect() {
    let self = this;
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      console.log('数据库已创建!');
      self.db = db.db('wowPets');
    });
  },
  insertOne(collection, obj) {
    return new Promise(function(resolve, reject) {
      this.db.collection(collection).insertOne(obj, function(err, res) {
        if (err) reject(err);
        console.log('文档插入成功');
        resolve(res);
      });
    });
  },
  insertMany(collection, arr) {
    return new Promise(function(resolve, reject) {
      this.db.collection(collection).insertMany(arr, function(err, res) {
        if (err) reject(err);
        console.log('插入的文档数量为:' + res.insertedCount);
        resolve(res);
      });
    });
  },
  deleteOne(collection, where) {
    return new Promise(function(resolve, reject) {
      this.db.collection(collection).deleteOne(where, function(err, res) {
        if (err) reject(err);
        console.log('文档删除成功');
        resolve(res);
      });
    });
  },
  deleteMany(collection, where) {
    return new Promise(function(resolve, reject) {
      this.db.collection(collection).deleteMany(where, function(err, res) {
        if (err) reject(err);
        console.log('删除的文档数量为:' + res.result.n);
        resolve(res);
      });
    });
  },
  updateOne(collection, where, update) {
    return new Promise(function(resolve, reject) {
      let updateStr = {$set: update};
      this.db.collection(collection).updateOne(where, updateStr, function(err, res) {
        if (err) reject(err);
        console.log('文档更新成功');
        resolve(res);
      });
    });
  },
  updateMany(collection, where, update) {
    return new Promise(function(resolve, reject) {
      let updateStr = {$set: update};
      this.db.collection(collection).updateMany(where, updateStr, function(err, res) {
        if (err) reject(err);
        console.log('文档更新成功');
        resolve(res);
      });
    });
  },
  find(collection, where={}){
    return new Promise(function(resolve, reject) {
      this.db.collection(collection).find(where).toArray(function(err, res) {
        if (err) reject(err);
        console.log(res);
        resolve(res);
      });
    });
  }
};
database.connect();
module.exports = database;
