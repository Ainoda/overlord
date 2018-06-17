const petDao = require('./petDao')
const skillDao = require('../skill/skillDao')
const petDimensionDao = require('../petDimension/petDimensionDao')
const speciesDao = require('../species/speciesDao')
const {utils} = require('../other/utils')

const petService = {
  insert(pet) {
    if(pet.firstSk && !utils.checkId(pet.firstSk)){
      return utils.createIdErrorMsg()
    }
    if(pet.secondSk && !utils.checkId(pet.secondSk)){
      return utils.createIdErrorMsg()
    }
    if(pet.thirdSk && !utils.checkId(pet.thirdSk)){
      return utils.createIdErrorMsg()
    }
    if(pet.fourthSk && !utils.checkId(pet.fourthSk)){
      return utils.createIdErrorMsg()
    }
    if(pet.fifthSk && !utils.checkId(pet.fifthSk)){
      return utils.createIdErrorMsg()
    }
    if(pet.sixthSk && !utils.checkId(pet.sixthSk)){
      return utils.createIdErrorMsg()
    }
    if(pet.dimension && !utils.checkId(pet.dimension)){
      return utils.createIdErrorMsg()
    }
    if(pet.species && !utils.checkId(pet.species)){
      return utils.createIdErrorMsg()
    }
    let result = petDao.insertOne(pet)
    return result
  },
  delete(_id) {
    let result,_ids=[]
    _id.includes(',') ? _ids = _id.split(',') : _ids.push(_id)
    if(!utils.checkId(_ids)){
      return utils.createIdErrorMsg()
    }
    if(_ids.length > 1){
      result = petDao.deleteMany(_ids)
    }else {
      result = petDao.deleteOne(_id)
    }
    return result
  },
  update(pet) {
    return petDao.updateOne(pet)
  },
  async find(where) {
    let skills = await skillDao.find();
    let petDimensions = await petDimensionDao.find()
    let species = await speciesDao.find()
    return petDao.find().then(pets => {
      return pets.map(pet => {
        skills.map(skill => {
          if(skill._id.equals(pet.firstSk)){
            pet.firstSkName = skill.name
          }
          if(skill._id.equals(pet.secondSk)){
            pet.secondSkName = skill.name
          }
          if(skill._id.equals(pet.thirdSk)){
            pet.thirdSkName = skill.name
          }
          if(skill._id.equals(pet.fourthSk)){
            pet.fourthSkName = skill.name
          }
          if(skill._id.equals(pet.fifthSk)){
            pet.fifthSkName = skill.name
          }
          if(skill._id.equals(pet.sixthSk)){
            pet.sixthSkName = skill.name
          }
        })
        let petDimensionNames = []
        petDimensions.map(petDimension => {
          if(pet.dimension && pet.dimension.includes(petDimension._id)){
            petDimensionNames.push(petDimension.name)
          }
        })
        species.map(entity => {
          if(entity._id.equals(pet.species)){
            pet.speciesName = entity.name
          }
        })
        pet.dimensionName = petDimensionNames.join()
        return pet
      })
    }).catch(error => {
      return error
    })
  }
}

module.exports = petService
