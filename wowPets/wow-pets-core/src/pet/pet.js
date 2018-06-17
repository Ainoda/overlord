class pet {
  constructor(name, code, species,firstSk='', secondSk='', thirdSk='', fourthSk='', fifthSk='', sixthSk='', dimension ='',description='') {
    this.name = name //名称
    this.code = code //编码
    this.species = species //类型
    this.firstSk = firstSk //第一个Skill
    this.secondSk = secondSk //第二个Skill
    this.thirdSk = thirdSk //第三个Skill
    this.fourthSk = fourthSk //第四个Skill
    this.fifthSk = fifthSk //第五个Skill
    this.sixthSk = sixthSk //第六个Skill
    this.dimension = dimension //所有三维
    this.description = description //描述
  }
}

module.exports = pet
