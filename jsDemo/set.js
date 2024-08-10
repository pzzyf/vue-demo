const set1 = new Set([1, 2, 2, 3, 4])

set1.add({ a: 1 })

console.log('set1.has(1) :>> ', set1.has(1))

set1.delete(3)

console.log('set1 :>> ', set1)

set1.clear()

console.log('set1 :>> ', set1)
