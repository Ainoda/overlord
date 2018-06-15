class skill {
  // skill
  constructor(name, code, description, cooling=0, useRounds=1, lastRounds=0, species='', hitRate=100) {
    this.name = name
    this.code = code
    this.description = description
    this.cooling = cooling
    this.useRounds = useRounds
    this.lastRounds = lastRounds
    this.species = species
    this.hitRate = hitRate
  }
}

module.exports = skill
