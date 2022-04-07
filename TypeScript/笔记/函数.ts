// 为函数定义类型
function add(x: number, y: number): number {
    return x + y
}
let myAdd = function (x: number, y: number): number {
    return x + y
}
console.log(add(1, 2))
console.log(myAdd(10, 20))

// 书写完整函数类型
let myAdd2: (x: number, y: number) => number =
    function (x: number, y: number): number {
        return x + y
    }
console.log(myAdd2(11, 12))
