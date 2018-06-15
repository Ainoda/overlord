const skillDao = require('./skillDao')
const speciesDao = require('../species/speciesDao')
const {utils} = require('../other/utils')

const skillService = {
  insert(skill) {
    if(skill.species && !utils.checkId(skill.species)){
      return utils.createIdErrorMsg()
    }
    let result = skillDao.insertOne(skill)
    return result
  },
  delete(where) {
    return skillDao.deleteOne(where)
  },
  update(where, update) {
    return skillDao.updateOne(where, update)
  },
  find(where) {
    return
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
  }
}

module.exports = skillService
