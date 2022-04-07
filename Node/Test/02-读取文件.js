// 使用require方法加载fs核心模块（file-system）
var fs = require('fs')

// 读取文件：
//   第一个参数为要读取文件的路径
//   第二个参数为一个回调函数：
//     如果读取成功，err为null，data为读取到的数据
//     如果读取失败，err为错误对象，data为undefined（null和undefined都没有toString方法）
fs.readFile('../resource/hello.txt', function(err, data) {
    if(err) {
        console.log(err)
    }else{
        console.log(data.toString())
    }
})

// 浏览器不能直接执行node代码