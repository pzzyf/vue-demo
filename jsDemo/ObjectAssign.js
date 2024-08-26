const obj1 = { a: 1 }

const obj2 = { b: 2 }

const obj3 = { c: 3 }

const obj4 = Object.assign(obj1, obj2, obj3)

console.log('obj1 :>> ', obj1)
console.log('obj2 :>> ', obj2)
console.log('obj3 :>> ', obj3)
console.log('obj3 :>> ', obj3)
console.log('obj4 :>> ', obj4)

console.log('Object.assign({}, obj1) :>> ', Object.assign({}, obj1))

// Object.assign 的工作原理：
// 第一个参数是目标对象
// 随后的参数是源对象（可以有多个）
// 它会将所有源对象的可枚举属性复制到目标对象
// 第一个参数（目标对象）总是会被修改：
// 无论这个对象是已存在的对象还是新创建的空对象
// 这个对象会接收所有源对象的属性
