let http = require('http')
let fs = require('fs')
let url = require('url')
let baseurl = 'E:/gitee/web-blog/Nodejs/feedback'

let comments = [
    {
        name: '小明',
        comment: '努力学习'
    },
    {
        name: '小明2',
        comment: '努力学习'
    },
    {
        name: '小明3',
        comment: '努力学习'
    },
    {
        name: '小明4',
        comment: '努力学习'
    }
]

http.createServer(function (req, res) {
    // 使用 url.parse 方法将路径解析成一个方便操作的对象，第二个参数为true将query转成对象类型
    let parseObj = url.parse(req.url, true)
    // 单独获取不包含查询字符串的路径部分，即不包含 ? 之后的内容
    let pathname = parseObj.pathname

    console.log(pathname)
    if (pathname === '/') {
        pathname = '/views/index.html'
        res.writeHead(200, { 'Content-Type': 'text/html' })
    } else if (pathname.indexOf('/public/') === 0) {
        if (pathname.indexOf('.jpg') > 0) {
            res.writeHead(200, { 'Content-Type': 'image/jpeg' })
        } else if (pathname.indexOf('.js') > 0) {
            res.writeHead(200, { 'Content-Type': 'application/x-javascript' })
        } else if (pathname.indexOf('.css') > 0) {
            res.writeHead(200, { 'Content-Type': 'text/css' })
        }
    } else if (pathname === '/post') {
        pathname = '/views/post.html'
        res.writeHead(200, { 'Content-Type': 'text/html' })
    } else if (pathname.indexOf('/submit') === 0) {
        let comment = parseObj.query
        comments.unshift(comment)
        // res.end(JSON.stringify(comment))

        // // 重定向到首页
        // // 客户端发现收到服务器的响应的状态码是302就会自动去响应头找Location进行跳转
        // res.statusCode = 302  // 临时重定向
        // res.setHeader('Location', '/')
        // res.end()

        res.end(JSON.stringify(comments))
    } else {
        pathname = '/views/404.html'
    }
    fs.readFile(baseurl + pathname, function (err, data) {
        if (err) {
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            return res.end('404 Not Found.')
        }
        res.end(data)
    })
}).listen(3000, function () {
    console.log('Server is running...')
    console.log('http://127.0.0.1:3000')
})