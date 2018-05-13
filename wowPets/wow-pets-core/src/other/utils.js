const ResMsg = require('./resMsg');

const DB_TYPE = {
  INSERT:'insert',
  DELETE:'delete',
  UPDATE:'update',
  SELECT:'select'
};
const RES_STATUS = {
  SUCCESS:1,
  FAILURE:0
};
const utils = {
  checkId(id) {
    if(Array.isArray(id)){
      for (let i = 0; i < id.length; i++) {
        if(id[i].length !== 24){
          return false;
        }
      }
      return true;
    }else {
      return id.length === 24;
    }
  },
  createResMsg(status,msg,data) {
    return new Promise((resolve,reject) => {
      let resMsg = new ResMsg(status,msg,data); 
      if(status){
        resolve(resMsg);
      }else {
        reject(resMsg);
      }
    });
  },
  mongodbResMsg(type,status,res) {
    let resMsg = new ResMsg(status);
    if(!res){
      resMsg.msg = '系统正在初始化，请稍后重试！';
      return resMsg;
    }
    if(res.ok){
      switch (type) {
        case DB_TYPE.DELETE:
          res.n > 0 ? resMsg.msg = '删除成功' : resMsg.msg = '没有找到匹配的数据';
          break;
        case DB_TYPE.INSERT:
          res.n > 0 ? resMsg.msg = '添加成功' : resMsg.msg = '';
          break;
        case DB_TYPE.UPDATE:
          res.n > 0 ? resMsg.msg = '更新成功' : resMsg.msg = '没有找到匹配的数据';
          break;
        case DB_TYPE.SELECT:
          resMsg.msg = '';
          break;
        default:
          break;
      }
    }else {
      resMsg.msg = 'mongodb数据库语句执行错误';
    }
    return resMsg;
  }
}

module.exports = {utils,DB_TYPE,RES_STATUS};