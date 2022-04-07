// require是一个方法,用于加载模块
// 对于用户自己编写的文件模块，相对路径必须加 ./,否则报错
// 在Node中,没有全局作用域,只有模块作用域
//   外部访问不到内部
//   内部也访问不到外部
//   默认都是封闭的

// 如何使模块间通信?可使用exports
// exports默认是一个空对象
// 具体操作看 test07.js
// 此处调用 test07.js 导出的对象
var exp = require('./test07.js')
console.log(exp.name)
console.log(exp.add(10, 100))
