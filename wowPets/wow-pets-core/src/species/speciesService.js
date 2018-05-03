const speciesDao = require('./speciesDao');

const speciesService = {
  insert(species) {
    let result;
    if (Array.isArray(species)) {
      result = speciesDao.insertMany(species);
    } else {
      result = speciesDao.insertOne(species);
    }
    return result;
  },
  delete(_id) {
    return speciesDao.deleteOne(_id);
  },
  update(species) {
    return speciesDao.updateOne(species);
  },
  async find(where) {
    return await speciesDao.find(where).then(species => {
      return species.map(entity => {
        species.map(prop => {
          if(entity.tap == prop.code){
            entity.tapName = prop.name;
          }
          if(entity.hit == prop.code){
            entity.hitName = prop.name;
          }
        });
        return entity;
      });
    });
  }
}

module.exports = speciesService;
