const skillDao = require('./skillDao')
const speciesDao = require('../species/speciesDao')
const {utils,RES_STATUS} = require('../other/utils')

const skillService = {
  async insert(skill) {
    if(skill.species && !utils.checkId(skill.species)){
      return utils.createIdErrorMsg()
    }
    let skillArr = await this.findSkills({code:skill.code});
    if(skillArr.length > 0){
      return utils.createResMsg(RES_STATUS.FAILURE,'该技能已经存在！')
    }
    let result = skillDao.insertOne(skill)
    return result
  },
  delete(_id) {
    let result,_ids=[]
    _id.includes(',') ? _ids = _id.split(',') : _ids.push(_id)
    if(!utils.checkId(_ids)){
      return utils.createIdErrorMsg()
    }
    if(_ids.length > 1){
      result = skillDao.deleteMany(_ids)
    }else {
      result = skillDao.deleteOne(_id)
    }
    return result
  },
  async update(skill) {
    let skillArr = await this.findSkills({code:skill.code});
    if(skillArr.length > 0 && !skillArr[0]._id.equals(skill._id)){
      return utils.createResMsg(RES_STATUS.FAILURE,'该技能已经存在！')
    }
    return skillDao.updateOne(skill)
  },
  find(where) {
    return speciesDao.find().then(species => {
      return skillDao.find(where).then(skills => {
        return skills.map(entity => {
          species.map(prop => {
            if(prop._id.equals(entity.species)){
              entity.speciesName = prop.name
            }
          })
          // 方便前端展示
          entity.title = entity.description
          return entity
        })
      });
    }).catch(error => {
      return error
    })
  },
  findSkills(where) {
    return skillDao.find(where);
  }
}

module.exports = skillService
