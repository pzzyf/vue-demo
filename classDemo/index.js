class Afe1 {
  #name = 'afe1'
  age = 18

  getName() {
    return this.#name
  }
}

const afe1 = new Afe1()
const name = afe1.#name
const age = afe1.age

console.log('afe1.getName() :>> ', afe1.getName())
