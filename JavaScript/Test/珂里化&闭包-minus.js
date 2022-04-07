// 相关知识点：函数珂里化、闭包
const minus = (function () {
    let result = 0
    return function () {
        if (arguments.length > 0) {
            for (let i = 0; i < arguments.length; i++) {
                result -= arguments[i]
            }
            return arguments.callee
        } else {
            return result
        }
    }
})()

console.log(minus(1, 2)(3)(4)())