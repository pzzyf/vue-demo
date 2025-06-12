// 在 JavaScript 运行时：用于返回一个值的类型的字符串表示
// 在 TypeScript 类型系统中：用于获取一个值（变量、对象等）的类型结构

console.log(typeof 1)

const a = {
  name: 'afe1',
  age: 18,
}

type b = typeof a

// type b = {
//     name: string;
//     age: number;
// }
