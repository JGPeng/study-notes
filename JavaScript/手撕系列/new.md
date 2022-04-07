## new 操作符
调用 new 时做的事：
1. 创建一个新对象，并继承其构造函数的 prototype，这一步是为了继承构造函数原型上的熟悉和方法；
2. 执行构造函数，方法内的 this 被指定为该新实例，这一步是为了执行构造函数内的赋值操作；
3. 返回新实例（规范规定，如果构造方法返回一个对象，则返回该对象，否则返回第一步创建的新对象）。

```
function myNew (fn, ...args) {
    // 1
    let obj = Object.create(fn.prototype)
    // 2
    let result = fn.apply(obj, args)
    // 3
    return Object.prototype.toString.call(result) === '[object Object]' ? result : obj
}

// 测试
function Fn(name) {
    this.name = name
}
const obj = myNew(Fn, 'zhangsan')
console.log(obj)  // Fn {name: "zhangsan"}
console.log(obj instanceof Fn)  // true
```