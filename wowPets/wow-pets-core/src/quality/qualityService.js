const qualityDao = require('./qualityDao')
const {utils} = require('../other/utils')

const qualityService = {
  insert(quality) {
    let result = qualityDao.insertOne(quality)
    return result
  },
  delete(_id) {
    let result,_ids=[]
    _id.includes(',') ? _ids = _id.split(',') : _ids.push(_id)
    if(!utils.checkId(_ids)){
      return utils.createIdErrorMsg()
    }
    if(_ids.length > 1){
      result = qualityDao.deleteMany(_ids)
    }else {
      result = qualityDao.deleteOne(_id)
    }
    return result
  },
  update(quality) {
    return qualityDao.updateOne(quality)
  },
  find(where) {
    return qualityDao.find(where)
  }
}

module.exports = qualityService
