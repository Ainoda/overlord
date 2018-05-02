class species {
  // 物种类型
  constructor(name, code, prey, hunter) {
    this.name = name; //种类名称
    this.code = code; //种类编码
    this.prey = prey; //种类的猎物
    this.hunter = hunter; //种类的天敌
  }
}

module.exports = species;
