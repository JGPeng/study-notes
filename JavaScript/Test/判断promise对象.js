// 最繁可能出错
function isPromise(obj) {
    return !!obj
        && (typeof obj === 'object' || typeof obj === 'function')
        && typeof obj.then === 'function';
}
// 最简最正确
function isPromise2(obj) {
    return obj instanceof Promise
}

// isPromise
console.log(1, isPromise(new Promise(() => { })))
console.log(2, isPromise(new Promise((res, rej) => {
    res('abc')
})))
console.log(3, isPromise(new Promise((res, rej) => {
    res('abc')
}).then(res => {
    console.log(res)
})))
console.log(4, isPromise(Promise.resolve('123')))
console.log(5, isPromise(Promise.reject('123')))
console.log(6, isPromise(function () { }))
console.log(7, isPromise({ then: () => { } }))

// isPromise2
console.log(1, isPromise2(new Promise(() => { })))
console.log(2, isPromise2(new Promise((res, rej) => {
    res('abc')
})))
console.log(3, isPromise2(new Promise((res, rej) => {
    res('abc')
}).then(res => {
    console.log(res)
})))
console.log(4, isPromise2(Promise.resolve('123')))
console.log(5, isPromise2(Promise.reject('123')))
console.log(6, isPromise2(function () { }))
console.log(7, isPromise2({ then: () => { } }))