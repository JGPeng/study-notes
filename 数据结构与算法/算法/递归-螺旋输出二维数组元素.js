/**
 * 螺旋式输出二维数组的元素，如
 *  [
        [1, 2, 3],
        [11, 12, 13],
        [21, 22, 23],
        [31, 32, 33]
    ]
    输出如下：
        1, 2, 3, 13, 23, 33, 32, 31, 21, 11, 12, 22
 */
// const arr = [
//     [1, 2, 3],
//     [11, 12, 13],
//     [21, 22, 23],
//     [31, 32, 33]
// ]
const arr = [
    [1, 2, 3, 4, 5],
    [11, 12, 13, 14, 15],
    [21, 22, 23, 24, 25],
    [31, 32, 33, 34, 35],
    [41, 42, 43, 44, 45]
]

const list = [];
function main(arr) {
    let i1 = 0, j1 = 0; // 左上角位置
    let i2 = arr.length - 1, j2 = arr[0].length - 1; // 右下角位置
    // 不断递归外围元素
    while (i2 - i1 > 0 && j2 - j1 > 0) {
        t(arr, i1, j1, i2, j2);
        i1++;
        j1++;
        i2--;
        j2--;
    }
    // 将剩余可能存在的一行或一列进行输出
    if (i2 - i1 >= 0) {
        for (let t = i1; t <= i2; t++) {
            list.push(arr[t][j1])
        }
    }
    if (j2 - j1 > 0) {
        for (let t = j1; t <= j2; t++) {
            list.push(arr[i1][t])
        }
    }
}
// 递归输出外围元素
function t(arr, i1, j1, i2, j2) {
    for (let i = j1; i < j2; i++) {
        list.push(arr[i1][i])
    }
    for (let i = i1; i < i2; i++) {
        list.push(arr[i][j2])
    }
    for (let i = j2; i > j1; i--) {
        list.push(arr[i2][i])
    }
    for (let i = i2; i > i1; i--) {
        list.push(arr[i][j1])
    }
}
main(arr)
console.log(list)