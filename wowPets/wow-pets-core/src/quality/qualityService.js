const qualityDao = require('./qualityDao')
const {utils,RES_STATUS} = require('../other/utils')

const qualityService = {
  async insert(quality) {
    let qualityArr = await this.findQuality({code:quality.code});
    if(qualityArr.length > 0){
      return utils.createResMsg(RES_STATUS.FAILURE,'该品质已经存在！')
    }
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
  async update(quality) {
    let qualityArr = await this.findQuality({code:quality.code});
    if(qualityArr.length > 0 && !qualityArr[0]._id.equals(quality._id)){
      return utils.createResMsg(RES_STATUS.FAILURE,'该品质已经存在！')
    }
    return qualityDao.updateOne(quality)
  },
  find(where) {
    return qualityDao.find(where)
  },
  findQuality(where) {
    return qualityDao.find(where);
  }
}

module.exports = qualityService
