const obj = {
  'header-right-1': 123,
  'header-right-2': 456,
}

// 字符串转数组，-分割
Object.keys(obj).forEach((key) => {
  const name = key.split('-')
  console.log('name :>> ', name)
})
