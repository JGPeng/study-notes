function say() {
    console.log('hello')
}
say()  // TypeError: say(...) is not a function

; (function () {
    console.log('hello')
})()

;['苹果', '香蕉'].forEach(function (item) {
    console.log(item)
})

// ` 是EcmaScript 6 中新增的一种字符串包裹方式，叫模板字符串
// 它支持换行和非常方便拼接变量
let str = `
床前明月光
    疑是地上霜
  举头望明月    低头思故乡`
console.log(str)

; `床前明月光
    疑是地上霜
  举头望明月    低头思故乡`.toString()

// 当采用无分号的代码风格的时候，只需要注意一下情况就不会报错了：
//   当一行代码是以(、[、`开头的时候，不要补上分号;来避免一些语法解析错误