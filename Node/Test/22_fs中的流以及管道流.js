/**
 * createReadStream 方法往往用于打开大型的文本文件，创建一个读取操作的数据流。
 * 所谓大型文本文件，指的是文本文件的体积很大，读取操作的缓存装不下，
 * 只能分成几次发送，每次发送会触发一个data事件，发送结束会触发end事件。
 * 
 * createWriteStream 方法创建一个写入数据流对象，
 * 该对象的write方法用于写入数据，end方法用于结束写入操作。
 * 
 * createWriteStream 方法和 createReadStream 方法配合，可以实现拷贝大型文件。
 */

const fs = require('fs')
const path = 'data.txt'

// 写入流
const writeStream = fs.createWriteStream(path)
let str = ''
for (let i = 0; i < 500; i++) {
    str += '可以通过流进行复制图片、大文件等操作' + i + '\n'
}
writeStream.write(str)
writeStream.end()  // 标记文件末尾
// 监听写入完成
writeStream.on('finish', () => {
    console.log('写入完成')
})

// 读取流
const readStream = fs.createReadStream(path)
str = ''
let count = 0
readStream.on('data', (data) => {
    str += data
    count++
})
readStream.on('end', () => {
    console.log('读取完成')
    // console.log(str)
    console.log(count)
})
readStream.on('error', (err) => {
    console.log(err)
})

/**
 * 管道流
 * 管道提供了一个输出流到输入流的机制，
 * 通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
 */
const rs = fs.createReadStream('./girl.jpg')
const ws = fs.createWriteStream('./data/girl.jpg')
rs.pipe(ws)  // 从rs中读取的文件复制(写入)到ws中
console.log('end')
