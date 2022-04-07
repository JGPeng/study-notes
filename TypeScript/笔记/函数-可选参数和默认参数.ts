// 传递给一个函数的参数个数必须与函数期望的参数个数一致。
// 可选参数不能设置默认值
function buildName(firstName: string = 'A', lastName?: string): string {
    if (lastName) {
        return firstName + '-' + lastName
    } else {
        return firstName
    }
}

console.log(buildName('C', 'D'))
console.log(buildName('C'))
console.log(buildName())