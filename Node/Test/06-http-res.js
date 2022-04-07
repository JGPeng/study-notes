var http = require('http')

var server = http.createServer()

// request 请求事件处理函数，需要接收两个参数：
//   Request 请求对象：可以用来获取客户端的一些请求信息，例如请求路径
//   Response响应对象：可以用来给客户端发送响应信息
server.on('request', function (request, response) {
    console.log('收到客户端的请求了')

    // 获取请求路径
    let url = request.url

    // // write 用来给客户端发送响应数据
    // response.write('hello')
    // response.write(' nodejs')
    // // write 可以使用多次，但最后一次需用end结束响应，否则客户端一直等待
    // response.end()

    // // 也可以直接用end
    // response.end('hello nodejs')

    // // 根据请求路径返回相应信息
    // if (url === '/' || url === '/index') {
    //     response.end('index page')
    // } else if (url === '/login') {
    //     response.end('login page')
    // } else {
    //     response.end('404 Not Found.')
    // }

    let obj = [
        {
            name: 'gerald',
            age: 18
        },
        {
            name: '最我弟弟',
            age: 18
        },
        {
            name: '醉卧独钓',
            age: 18
        }
    ]
    // 将对象类型转换成JSON字符串返回客户端（因为响应数据只能是字符串类型）
    response.end(JSON.stringify(obj))

})

server.listen(3000, function () {
    console.log('服务器启动成功，可以通过此路径进行访问：http://127.0.0.1:3000/')
})