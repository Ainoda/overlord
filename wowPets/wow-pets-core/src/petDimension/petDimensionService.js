const petDimensionDao = require('./petDimensionDao')
const {utils} = require('../other/utils')

const petDimensionService = {
  insert(petDimension) {
    let result = petDimensionDao.insertOne(petDimension)
    return result
  },
  delete(_id) {
    let result,_ids=[]
    _id.includes(',') ? _ids = _id.split(',') : _ids.push(_id)
    if(!utils.checkId(_ids)){
      return utils.createIdErrorMsg()
    }
    if(_ids.length > 1){
      result = petDimensionDao.deleteMany(_ids)
    }else {
      result = petDimensionDao.deleteOne(_id)
    }
    return result
  },
  update(petDimension) {
    return petDimensionDao.updateOne(petDimension)
  },
  find(where) {
    return petDimensionDao.find(where)
  }
}

module.exports = petDimensionService
