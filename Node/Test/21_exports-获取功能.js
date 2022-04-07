const { car, show } = require('./04_exports-导出功能')

console.log(car)  // { name: 'gerald', age: 18 }
show()  // { name: 'JGPeng', age: 38 }

// 不能修改从require获取的数据，否则报错
// car = {
//     name: 'ABC',
//     age: 88
// }

car.name = 'ABC'
console.log(car)  // { name: 'ABC', age: 18 }
show()  // { name: 'JGPeng', age: 38 }


// module.exports 和 export 之间有什么区别？
// 前者公开了它指向的对象。 后者公开了它指向的对象的属性。