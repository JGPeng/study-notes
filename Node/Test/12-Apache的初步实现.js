var http = require('http')
var fs = require('fs')
var server = http.createServer()

var baseurl = 'E:/gitee/web-blog/Nodejs/resource'

server.on('request', function (req, res) {
    var url = req.url
    if (url === '/') {
        url = '/pink.html'
    }
    fs.readFile(baseurl + url, function (err, data) {
        if (err) {
            return res.end('404 Not Found.')
        }
        res.end(data)
    })
})

server.listen('3000', function () {
    console.log('Server is running...')
    console.log('http://127.0.0.1:3000')
})
