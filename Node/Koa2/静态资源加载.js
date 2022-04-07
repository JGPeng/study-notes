const path = require('path')
const Koa = require('koa');
const static = require('koa-static');   //静态资源加载
const mysql = require('mysql')

var app = new Koa();
const staticPath = './static'
const connection = mysql.createConnection({
    host: '127.0.0.1',   // 数据库地址
    user: 'root',    // 数据库用户
    password: '123456',   // 数据库密码
    database: 'my_database'  // 选中数据库
})

// 执行sql脚本对数据库进行读写 
connection.query('SELECT * FROM my_table', (error, results, fields) => {
    if (error) throw error
    connection.release()
})

app.use(static(path.join(__dirname, staticPath)))

app.use(async (ctx, next) => {
    ctx.body = 'Hello World'
})

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
});