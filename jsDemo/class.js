export class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.address = '六安'
  }

  run() {
    console.log(`${this.name}会跑步`)
  }

  get address() {
    console.log('访问地址')
    return this._address
  }

  set address(newVal) {
    console.log('设置地址')
    this._address = newVal
  }

  static random() {
    console.log('static class menthod')
  }
}

const a = new Person('afe1', '18')

a.run()

console.log(a.address)

a.address = '南京'

Person.random()
