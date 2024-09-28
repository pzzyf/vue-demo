const arr = [
  1,
  2,
  3,
  4,
  5,
]

async function test() {
  return Promise.resolve(arr)
}

async function test1() {
  return Promise.reject(arr)
}

(async () => {
  const a = await test()
  const b = test()

  console.log('test() :>> ', test())
  console.log('a :>> ', a)
  console.log('b :>> ', b)

  const c = await test1()
  const d = test1()

  console.log('test1() :>> ', test1())
  console.log('c :>> ', c)
  console.log('d :>> ', d)
})()

console.log('Promise.resolve() :>> ', Promise.resolve(arr))
console.log('Promise.reject() :>> ', Promise.reject(arr))
console.log('Promise.all() :>> ', Promise.all(arr))
console.log('Promise.race() :>> ', Promise.race(arr))
