// 示例
// 1. 使用简单分隔符
const str = 'a/b/c'
const result = str.split('/')
// result = ["a", "b", "c"]

// 2. 使用空字符串作为分隔符
const str2 = 'hello'
const result2 = str2.split('')
// result2 = ["h", "e", "l", "l", "o"]

// 3. 限制返回数组长度
const str3 = 'a/b/c/d'
const result3 = str3.split('/', 2)
// result3 = ["a", "b"]

console.log('result :>> ', result)
console.log('result2 :>> ', result2)
console.log('result3 :>> ', result3)

// 字符串转数组
