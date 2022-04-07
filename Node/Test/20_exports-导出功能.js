let car = {
    name: 'gerald',
    age: 18
}

// 如果变量先被exports拿到，后期再怎么修改，都不会影响其在外部的值
// 即外部获取的值仍然是前面赋的值：{ name: 'gerald', age: 18 }
module.exports.car = car

car = {
    name: 'JGPeng',
    age: 38
}

function show() {
    console.log(car)
}

module.exports.show = show