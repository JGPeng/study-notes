/**
 * 在 TypeScript 2.7 版本中引⼊了确定赋值断⾔，
 * 即允许在实例属性和变量声明后⾯放置⼀个 ! 号，
 * 从⽽告诉 TypeScript 该属性会被明确地赋值
 */

// let x: number
// initialize()
// // Variable 'x' is used before being assigned.(2454)
// console.log(2 * x) // Error
// function initialize() {
//   x = 10
// }

let x!: number
initialize()
console.log(2 * x) // OK
function initialize() {
  x = 10
}
