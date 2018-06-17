const weatherDao = require('./weatherDao')
const skillDao = require('../skill/skillDao')
const {utils} = require('../other/utils')

const weatherService = {
  insert(weather) {
    if(weather.trigger && !utils.checkId(weather.trigger)){
      return utils.createIdErrorMsg()
    }
    let result = weatherDao.insertOne(weather)
    return result
  },
  delete(_id) {
    let result,_ids=[]
    _id.includes(',') ? _ids = _id.split(',') : _ids.push(_id)
    if(!utils.checkId(_ids)){
      return utils.createIdErrorMsg()
    }
    if(_ids.length > 1){
      result = weatherDao.deleteMany(_ids)
    }else {
      result = weatherDao.deleteOne(_id)
    }
    return result
  },
  update(weathers) {
    return weatherDao.updateOne(weathers)
  },
  async find(where) {
    let skills = await skillDao.find();
    return weatherDao.find(where).then(weathers => {
      return weathers.map(weather => {
        let triggerName = []
        skills.map(skill => {
          if(weather.trigger && weather.trigger.includes(skill._id)){
            triggerName.push(skill.name)
          }
        })
        weather.triggerName = triggerName.join()
        return weather
      })
    }).catch(error => {
      return error
    })
  }
}

module.exports = weatherService
