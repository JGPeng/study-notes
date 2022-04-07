const http = require('http')
const fs = require('fs')
const path = require('path')
const querystring = require('querystring')
const { MongoClient } = require('mongodb')

const server = http.createServer()
const mongoUrl = 'mongodb://eggadmin:123456@localhost:27017/eggcms'
const dbName = 'eggcms'

let response = null
let client = null

server.on('request', (req, res) => {
    const url = req.url
    response = res
    if (url === '/') {
        // 获取首页html
        fs.readFile(path.join(__dirname, '../views/index.html'), (err, data) => {
            if (err) {
                response.setHeader('Content-Type', 'text/plain;charset=utf-8')
                response.end('文件读取失败，请稍后再试！')
            } else {
                response.setHeader('Content-Type', 'text/html; charset=utf-8')
                response.end(data)
            }
        })
    } else if (url === '/register') {
        // 获取注册页html
        fs.readFile(path.join(__dirname, '../views/register.html'), (err, data) => {
            if (err) {
                response.setHeader('Content-Type', 'text/plain;charset=utf-8')
                response.end('文件读取失败，请稍后再试！')
            } else {
                response.setHeader('Content-Type', 'text/html; charset=utf-8')
                response.end(data)
            }
        })
    } else if (url === '/api/getAllUser') {
        // 获取所有用户数据
        let findObj = {}
        createMongoClient('find', 'user', findObj)
    } else if (url === '/api/register') {
        // 注册请求，即添加用户数据
        req.on('data', function (chunk) {
            let reqData = querystring.parse(chunk.toString())
            let t = false
            for (let i in reqData) {
                if (reqData[i] && reqData[i] !== '') {
                    t = true
                    break
                }
            }
            t ? createMongoClient('insert', 'user', reqData) : ''
        })
    } else if (url.indexOf('/api/test') >= 0) {
        console.log('url', req.url)
        console.log('method', req.method)
        console.log('params', req.params)
        console.log('query', req.query)
        response.end('test')
    } else {
        // 无效请求，返回404
        response.setHeader('Content-Type', 'text/plain;charset=utf-8')
        response.end('404 Not Found')
    }
}).listen('3001', function () {
    console.log('Server is running...')
    console.log('http://127.0.0.1:3001')
})

function createMongoClient(type, collectionName, data) {
    MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, c) => {
        client = c
        if (err) {
            console.log(err)
            return
        }
        switch (type) {
            case 'find':
                find(client.db(dbName).collection(collectionName), data)
                break
            case 'insert':
                insertOne(client.db(dbName).collection(collectionName), data, '注册成功')
                break
        }
    })
}

function find(collection, data) {
    collection.find(data).toArray((err, result) => {
        if (err) {
            console.log(err)
            return
        }
        client.close()
        client = null
        response.setHeader('Content-Type', 'application/json; charset=utf-8')
        response.setHeader('Access-Control-Allow-Origin', '*')
        response.end(JSON.stringify(result))
    })
}

function insertOne(collection, data, msg) {
    collection.insertOne(data, (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        client.close()
        client = null
        response.setHeader('Content-Type', 'text/plain; charset=utf-8')
        response.end(msg)
    })
}