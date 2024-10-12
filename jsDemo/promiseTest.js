async function test() {
  const a = 1
  return a
}

const b = test()

b.then((res) => {
  console.log('res :>> ', res)
})

console.log(b instanceof Promise)
