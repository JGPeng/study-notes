let str = 'Hi\u000A!'
console.log(str)
// Hi
// !

str = String.raw`Hi\u000A!`
console.log(str) // Hi\u000A!

let name = 'jgpeng'
str = String.raw`Hi\n${name}!`
console.log(str) // Hi\njgpeng!

str = String.raw({ raw: 'test' }, '', ' ', 1, 2, 5) // 这里第一个参数对象的属性名必须为“raw”
console.log(str) // te s1t

console.log('--------')

str = String.raw({raw: ['A', 'B', 'C', 'D']}, 2 + 3, 'Java' + 'Script')
console.log(str) // A5BJavaScriptCD
console.log(str.length) // 15
console.log(str.split('').join(' ')) // A 5 B J a v a S c r i p t C D

console.log('--------')

str = String.raw({raw: ['A', 'B']}, 2 + 10.5, 'JavaScript')
console.log(str) // A12.5B
console.log(str.length) // 6
console.log(str.split('').join(' ')) // A 1 2 . 5 B
