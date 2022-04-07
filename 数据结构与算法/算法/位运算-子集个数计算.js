// 子集个数计算
let len = 4 // 长度
const arr = [] // 子集集合
for (let i = 0; i < 1 << len; i++) {
    let str = ''
    for (let j = 0; j < len; j++) {
        str += (i >> j) & 1
    }
    arr.push(str)
}
console.log(arr);