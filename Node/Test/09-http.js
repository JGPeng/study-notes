var http = require('http')

var server = http.createServer()

server.on('request', function (req, res) {
    // 服务器默认发送的数据,其实是utf8编码的内容
    // 但是浏览器不知道你是utf8编码的内容
    // 浏览器在不知道服务器响应内容的遍布的情况下会按照当前操作系统的默认编码去解析
    // 中文操作系统默认是gbk
    // 解决方法就是正确的告诉浏览器我给你发送的内容是什么编码的
    // 在http协议中,Content-Type就是用来告知对方我给你发送的数据内容是什么类型的
    let url = req.url
    // text/plain 是普通文本
    // text/html 是html类型的数据,浏览器接收到后会自动解析成html
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    if(url==='/plain'){
        res.write('hello')
        res.end(' world!')
    }else if(url==='/html'){
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<p>hello <a href="#">点我</a></p>')
    }else{
        res.end('毁灭你,与你何干?')
    }
})

server.listen(3000, function () {
    console.log('Server is running...')
    console.log('http://127.0.0.1:3000')
})