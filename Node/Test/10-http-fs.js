var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function (req, res) {
    var url = req.url
    console.log(url)
    if (url === '/') {
        fs.readFile('../resource/pink.html', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('文件读取失败，请稍后再试！')
            } else {
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                // 当需要对data进行字符串操作时需要先将data转成字符串类型（从文件取出来是十六进制类型）
                res.end(data)
            }
        })
    } else if (url === '/pink.css') {
        fs.readFile('../resource/pink.css', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('文件读取失败，请稍后再试！')
            } else {
                res.setHeader('Content-Type', '	text/css; charset=utf-8')
                res.end(data)
            }
        })
    } else if (url === '/pink.js') {
        fs.readFile('../resource/pink.js', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('文件读取失败，请稍后再试！')
            } else {
                res.setHeader('Content-Type', 'application/x-javascript; charset=utf-8')
                res.end(data)
            }
        })
    } else if (url === '/jpg' || url === '/girl') {
        fs.readFile('../resource/girl.jpg', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('文件读取失败，请稍后再试！')
            } else {
                // 编码格式一般是针对字符的
                // 图片不需要写编码格式，因为浏览器对图片有独特的编码方式，写了可能会出问题
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(data)
            }
        })
    } else {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('404 Not Found')
    }
})

server.listen('3000', function () {
    console.log('Server is running...')
    console.log('http://127.0.0.1:3000')
})