const petDimensionDao = require('./petDimensionDao')
const {utils,RES_STATUS} = require('../other/utils')

const petDimensionService = {
  async insert(petDimension) {
    let petDimensionArr = await this.findPetDimension({hp:petDimension.hp,attack:petDimension.attack,speed:petDimension.speed});
    if(petDimensionArr.length > 0){
      return utils.createResMsg(RES_STATUS.FAILURE,'该属性已经存在！')
    }
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
  async update(petDimension) {
    let petDimensionArr = await this.findPetDimension({hp:petDimension.hp,attack:petDimension.attack,speed:petDimension.speed});
    if(petDimensionArr.length > 0 && !petDimensionArr[0]._id.equals(petDimension._id)){
      return utils.createResMsg(RES_STATUS.FAILURE,'该属性已经存在！')
    }
    return petDimensionDao.updateOne(petDimension)
  },
  find(where) {
    return petDimensionDao.find(where).then(petDimensions => {
      return petDimensions.map(petDimension => {
        petDimension.title = petDimension.hp+'/'+petDimension.attack+'/'+petDimension.speed
        return petDimension
      })
    })
  },
  findPetDimension(where) {
    return petDimensionDao.find(where)
  }
}

module.exports = petDimensionService
