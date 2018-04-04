const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/wowPets';

const database = {
  db:'',
  connect() {
    MongoClient.connect(url, (err, db) => {
      if (err) throw err;
      console.log('数据库已创建!');
      this.db = db.db('wowPets');
    });
  },
  insertOne(collection, obj) {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).insertOne(obj, (err, res) => {
        if (err) reject(err);
        console.log('文档插入成功');
        resolve(res);
      });
    });
  },
  insertMany(collection, arr) {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).insertMany(arr, (err, res) => {
        if (err) reject(err);
        console.log('插入的文档数量为:' + res.insertedCount);
        resolve(res);
      });
    });
  },
  deleteOne(collection, where) {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).deleteOne(where, (err, res) => {
        if (err) reject(err);
        console.log('文档删除成功');
        resolve(res);
      });
    });
  },
  deleteMany(collection, where) {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).deleteMany(where, (err, res) => {
        if (err) reject(err);
        console.log('删除的文档数量为:' + res.result.n);
        resolve(res);
      });
    });
  },
  updateOne(collection, where, update) {
    return new Promise((resolve, reject) => {
      let updateStr = {$set: update};
      this.db.collection(collection).updateOne(where, updateStr, (err, res) => {
        if (err) reject(err);
        console.log('文档更新成功');
        resolve(res);
      });
    });
  },
  updateMany(collection, where, update) {
    return new Promise((resolve, reject) => {
      let updateStr = {$set: update};
      this.db.collection(collection).updateMany(where, updateStr, (err, res) => {
        if (err) reject(err);
        console.log('文档更新成功');
        resolve(res);
      });
    });
  },
  find(collection, where = {}){
    return new Promise((resolve, reject) => {
      this.db.collection(collection).find(where).toArray((err, res) => {
        if (err) reject(err);
        console.log(res);
        resolve(res);
      });
    });
  }
};
database.connect();
module.exports = database;
