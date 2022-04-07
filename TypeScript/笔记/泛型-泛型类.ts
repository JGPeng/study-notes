// ？？？为什么报错？？？
class GenericNumber<T> {
    zeroValue: T
    add: (x: number, y: number) => number
    constructor(zeroValue: T) {
        this.zeroValue = zeroValue
    }
}

let myGenericNumber = new GenericNumber<number>(0)
myGenericNumber.add = function (x, y) {
    return x + y
}
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12))

// let myGenericString = new GenericNumber<string>()
// myGenericString.zeroValue = 'abc'
// myGenericString.add = function (x, y) {
//     return x + y
// }
// console.log(myGenericString.add(myGenericString.zeroValue, 'test'))