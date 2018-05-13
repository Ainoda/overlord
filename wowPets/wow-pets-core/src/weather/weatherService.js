const weatherDao = require('./weatherDao');
const {utils} = require('../other/utils');

const weatherService = {
  insert(weather) {
    let result;
    if (Array.isArray(weather)) {
      result = weatherDao.insertMany(weather);
    } else {
      result = weatherDao.insertOne(weather);
    }
    return result;
  },
  delete(_id) {
    let result,_ids=[];
    _id.includes(',') ? _ids = _id.split(',') : _ids.push(_id);
    if(!utils.checkId(_ids)){
      return utils.createIdErrorMsg();
    }
    if(_ids.length > 1){
      result = weatherDao.deleteMany(_ids);
    }else {
      return = weatherDao.deleteOne(_id);
    }
    return result;
  },
  update(weathers) {
    return weatherDao.updateOne(weathers);
  },
  find(where) {
    return weatherDao.find(where);
  }
}

module.exports = weatherService;
