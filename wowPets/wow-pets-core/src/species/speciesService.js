const speciesDao = require('./speciesDao')
const {utils} = require('../other/utils')

function checkSpecies(species){
  if(Array.isArray(species)){
    for (let i = 0; i < species.length; i++) {
      const e = species[i]
      if(e.tap && !utils.checkId(e.tap)){
        return false
      }
      if(e.hit && !utils.checkId(e.hit)){
        return false
      }
    }
  }else {
    if(species.tap && !utils.checkId(species.tap)){
      return false
    }
    if(species.hit && !utils.checkId(species.hit)){
      return false
    }
  }
  return true
}

const speciesService = {
  insert(species) {
    let result
    if(!checkSpecies(species)){
      return utils.createIdErrorMsg()
    }
    if (Array.isArray(species)) {
      result = speciesDao.insertMany(species)
    } else {
      result = speciesDao.insertOne(species)
    }
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
  update(species) {
    return speciesDao.updateOne(species)
  },
  async find(where) {
    return await speciesDao.find(where).then(species => {
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
  }
}

module.exports = speciesService
