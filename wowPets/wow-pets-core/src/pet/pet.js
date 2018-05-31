class pet {
  constructor(name, code, firstsk = null, sencondsk = null, thirdsk = null, fourthsk = null, fifthsk = null, sixthsk = null, dimension = null) {
    this.name = name //名称
    this.code = code //编码
    this.firstsk = firstsk //第一个skill
    this.sencondsk = sencondsk //第二个skill
    this.thirdsk = thirdsk //第三个skill
    this.fourthsk = fourthsk //第四个skill
    this.fifthsk = fifthsk //第五个skill
    this.sixthsk = sixthsk //第六个skill
    this.dimension = dimension //所有三维
  }
  setFirstsk(skill) {
    this.firstsk = skill
  }
  setSencondsk(skill) {
    this.sencondsk = skill
  }
  setThirdsk(skill) {
    this.thirdsk = skill
  }
  setFourthsk(skill) {
    this.fourthsk = skill
  }
  setFifthsk(skill) {
    this.fifthsk = skill
  }
  setSixsk(skill) {
    this.sixthsk = skill
  }
  setDimension(dimension) {
    this.dimension = dimension
  }
}

module.exports = pet
