const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/wowPets';

const database = {
  db: '',
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
        if (err) throw err;
        if(res.result.ok === 1 && res.result.n === 1){
          console.log('文档插入成功');
          resolve(res);
        }else {
          console.log('文档插入失败');
          reject(res);
        }
      });
    });
  },
  insertMany(collection, arr) {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).insertMany(arr, (err, res) => {
        if (err) throw err;
        if(res.result.ok === 1 && res.result.n > 0){
          console.log('插入的文档数量为:' + res.result.n);
          resolve(res);
        }else {
          onsole.log('文档插入失败');
          reject(res);
        }
      });
    });
  },
  deleteOne(collection, where) {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).deleteOne(where, (err, res) => {
        if (err) throw err;
        if(res.result.ok === 1 && res.result.n === 1){
          console.log('文档删除成功');
          resolve(res);
        }else {
          onsole.log('文档删除失败');
          reject(res);
        }
      });
    });
  },
  deleteMany(collection, where) {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).deleteMany(where, (err, res) => {
        if (err) throw err;
        if(res.result.ok === 1 && res.result.n > 0){
          console.log('删除的文档数量为:' + res.result.n);
          resolve(res);
        }else {
          console.log('文档删除失败');
          reject(res);
        }
      });
    });
  },
  updateOne(collection, where, update) {
    return new Promise((resolve, reject) => {
      let updateStr = {
        $set: update
      };
      this.db.collection(collection).updateOne(where, updateStr, (err, res) => {
        if (err) throw err;
        if(res.result.ok === 1 && res.result.nModified > 0){
          console.log('文档更新成功');
          resolve(res);
        }else {
          console.log('文档更新失败');
          reject(res);
        }
      });
    });
  },
  updateMany(collection, where, update) {
    return new Promise((resolve, reject) => {
      let updateStr = {
        $set: update
      };
      this.db.collection(collection).updateMany(where, updateStr, (err, res) => {
        if (err) throw err;
        if(res.result.ok === 1 && res.result.nModified > 0){
          console.log('文档更新成功');
          resolve(res);
        }else {
          console.log('文档更新失败');
          reject(res);
        }
      });
    });
  },
  find(collection, where = {}) {
    return new Promise((resolve, reject) => {
      this.db.collection(collection).find(where).toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        resolve(res);
      });
    });
  }
};
database.connect();
module.exports = database;
