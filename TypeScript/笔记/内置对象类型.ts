// 内置对象是指根据标准在全局作用域（Global）上存在的对象。
// 这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。

// 1. ECMAScript 的内置对象
let b: Boolean = new Boolean(1) // [Boolean: true]
let n: Number = new Number(true) // [Number: 1]
let s: String = new String('abc') // [String: 'abc']
let d: Date = new Date() // 2022-01-05T07:26:37.224Z
let r: RegExp = /^1/ // /^1/
let e: Error = new Error('error message') // Error: error message

// 2. BOM 和 DOM 的内置对象
const div: HTMLElement = document.getElementById('test')
const divs: NodeList = document.querySelectorAll('div')
document.addEventListener('click', (event: MouseEvent) => {
    console.dir(event.target)
})
const fragment: DocumentFragment = document.createDocumentFragment()
