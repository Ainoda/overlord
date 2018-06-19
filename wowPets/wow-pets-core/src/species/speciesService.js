const speciesDao = require('./speciesDao')
const {utils,RES_STATUS} = require('../other/utils')

function checkSpecies(species){
  if(species.tap && !utils.checkId(species.tap)){
    return utils.createIdErrorMsg()
  }
  if(species.hit && !utils.checkId(species.hit)){
    return utils.createIdErrorMsg()
  }
  return true
}

const speciesService = {
  async insert(species) {
    if(!checkSpecies(species)){
      return utils.createIdErrorMsg()
    }
    let speciesArr = await this.findSpecies({code:species.code});
    if(speciesArr.length > 0){
      return utils.createResMsg(RES_STATUS.FAILURE,'该类型已经存在！')
    }
    let result = speciesDao.insertOne(species)
    return result
  },
  delete(_id) {
    let result,_ids=[]
    _id.includes(',') ? _ids = _id.split(',') : _ids.push(_id)
    if(!utils.checkId(_ids)){
      return utils.createIdErrorMsg()
    }
    if(_ids.length > 1){
      result = speciesDao.deleteMany(_ids)
    }else {
      result = speciesDao.deleteOne(_id)
    }
    return result
  },
  async update(species) {
    let speciesArr = await this.findSpecies({code:species.code});
    if(speciesArr.length > 0 && !speciesArr[0]._id.equals(species._id)){
      return utils.createResMsg(RES_STATUS.FAILURE,'该类型已经存在！')
    }
    return speciesDao.updateOne(species)
  },
  find(where) {
    return speciesDao.find(where).then(species => {
      return species.map(entity => {
        species.map(prop => {
          if(prop._id.equals(entity.tap)){
            entity.tapName = prop.name
          }
          if(prop._id.equals(entity.hit)){
            entity.hitName = prop.name
          }
        })
        return entity
      })
    }).catch(error => {
      return error
    })
  },
  findSpecies(where) {
    return speciesDao.find(where);
  }
}

module.exports = speciesService
