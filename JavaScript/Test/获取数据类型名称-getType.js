let num = 200
let num2 = new Number(123)
let str = 'abc'
let str2 = new String('123')
let bool = true
let arr = []
let reg = /^(123)$/

getType(num)
getType(num2)
getType(str)
getType(str2)
getType(bool)
getType(arr)
getType(reg)

function getType(value) {
    console.log(Object.prototype.toString.call(value).slice(8, -1))
}