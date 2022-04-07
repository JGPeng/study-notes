let arr = [1, 5, 2, 6, 4, 8, 1]
let result = null

// map：返回一个新数组，其中所有元素都经过处理
result = arr.map(item => item*2)
console.log('map', result)

// filter：返回所有符合条件的元素
result = arr.filter(item => item > 3)
console.log('filter', result)

// every：当所有元素都符合条件时返回true，反正返回false
result = arr.every(item => item > 3)
console.log('every', result)

// some：当存在一个符合条件的元素时返回true，否则返回false
result = arr.some(item => item > 3)
console.log('some', result)

// find：返回第一个符合条件的元素
result = arr.find(item => item > 3)
console.log('find', result)

// findIndex：返回第一个符合条件的索引
result = arr.findIndex(item => item > 3)
console.log('findIndex', result)

// 另外还有for、forEach、for..of、for..in、while、do..while循环