class species {
  // 物种类型
  constructor(name, code, tap='', hit='') {
    this.name = name; //种类名称
    this.code = code; //种类编码
    this.tap = tap; //种类的轻击
    this.hit = hit; //种类的重击
  }
}

module.exports = species;
