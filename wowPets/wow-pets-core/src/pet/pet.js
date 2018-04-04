class Pet {
  constructor(name, code, firstsk = null, sencondsk = null, thirdsk = null, fourthsk = null, fifthsk = null, sixthsk = null, dimension = null) {
    this.name = name;
    this.code = code;
    this.firstsk = firstsk;
    this.sencondsk = sencondsk;
    this.thirdsk = thirdsk;
    this.fourthsk = fourthsk;
    this.fifthsk = fifthsk;
    this.sixthsk = sixthsk;
    this.dimension = dimension;
  }
  setFirstsk(skill) {
    this.firstsk = skill;
  }
  setSencondsk(skill) {
    this.sencondsk = skill;
  }
  setThirdsk(skill) {
    this.thirdsk = skill;
  }
  setFourthsk(skill) {
    this.fourthsk = skill;
  }
  setFifthsk(skill) {
    this.fifthsk = skill;
  }
  setSixsk(skill) {
    this.sixthsk = skill;
  }
  setDimension(dimension) {
    this.dimension = dimension;
  }
}

module.exports = Pet;
