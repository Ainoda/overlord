class weather {
  // 天气
  constructor(name, code, description='', trigger='') {
    this.name = name
    this.code = code
    this.description = description
    this.trigger = trigger
  }
}

module.exports = weather
