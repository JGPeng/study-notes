//从命令行接收参数
// http://nodejs.cn/learn/nodejs-accept-arguments-from-the-command-line
const args = require('minimist')(process.argv.slice(2))
console.log(args['name']) //gerald

// 在命令行输入: node 01_从命令行接收参数.js --name=gerald