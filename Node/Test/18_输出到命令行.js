/**
    %s 会格式化变量为字符串
    %d 会格式化变量为数字
    %i 会格式化变量为其整数部分
    %o 会格式化变量为对象
 */
// console.log('我的%s已经%d岁了，重达%i公斤', '猫', 2.5, 20.999)
// console.log('%o', { name: 'gerald', age: 18 })

// 会清除控制台（其行为可能取决于所使用的控制台）。
// console.clear()

// 元素计数
// 示例一
// const x = 1
// const y = 2
// const z = 3
// console.count(
//   'x 的值为 ' + x + ' 且已经检查了几次？'
// )
// console.count(
//   'x 的值为 ' + x + ' 且已经检查了几次？'
// )
// console.count(
//   'y 的值为 ' + y + ' 且已经检查了几次？'
// )
// 示例二
// const oranges = ['橙子', '橙子']
// const apples = ['苹果']
// oranges.forEach(fruit => {
//   console.count(fruit)
// })
// apples.forEach(fruit => {
//   console.count(fruit)
// })

// 打印堆栈踪迹
// const function2 = () => console.trace()
// const function1 = () => function2()
// function1()

// 计算耗时
// const doSomething = () => console.log('测试')
// const measureDoingSomething = () => {
//   console.time('doSomething()')
//   //做点事，并测量所需的时间。
//   doSomething()
//   console.timeEnd('doSomething()')
// }
// measureDoingSomething()

// stdout 和 stderr
// console.log 非常适合在控制台中打印消息。 这就是所谓的标准输出（或称为 stdout）。

// 为输出着色
// console.log('\x1b[33m%s\x1b[0m', '你好')
// const chalk = require('chalk')
// console.log(chalk.blue("name", "age", "job"))
// console.log(chalk.bgBlue("蓝色背景"))
// // ES6 多行文本
// console.log(
//     chalk.bold(`  // 多行文本将保留缩进格式
//     name: Rogan
//     age: ${25}
//     job: ${'IT'}
//     `)
// )

// 创建进度条
// const ProgressBar = require('progress')
// const bar = new ProgressBar(':bar', { total: 10 })
// const timer = setInterval(() => {
//   bar.tick()
//   if (bar.complete) {
//     clearInterval(timer)
//   }
// }, 500)
