let a = 1, b = 10;
console.log(a, b)

// 1. 加法产生关联
// a = a + b
// b = a - b
// a = a - b

// 2. 乘法产生关联
// a = a * b
// b = a / b
// a = a / b

// 3. 位运算
// a = a ^ b
// b = a ^ b
// a = a ^ b

// 4. 数组操作
// a = [a, b]
// b = a[0]
// a = a[1]

// 5. 对象操作
// a = { a: b, b: a }
// b = a.b
// a = a.a

// 6. es6解构
[a, b] = [b, a]

// 7. 巧妙运算
// a = [b, b = a][0]


console.log(a, b)