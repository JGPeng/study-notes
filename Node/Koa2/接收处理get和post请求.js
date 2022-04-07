const Koa = require('koa')
const app = new Koa()

const hostname = 'http://127.0.0.1'
const port = 3000

app.use(async (ctx) => {
    let url = ctx.url
    if (url === '/' && ctx.method === 'GET') {
        //显示表单页面
        let html = `
            <h2>koa2 request POST</h2>
            <form method="post" action="/">
                <p>userName</p> 
                <input name="userName"><br>
                <p>age</p>
                <input name="age">
                <p>website</p>    
                <input name="website">    
                <button type="submit">submit</button> 
            </form>
        `;
        ctx.body = html;
    } else if (url === '/' && ctx.method === 'POST') {
        let postData = await parsePostData(ctx);
        ctx.body = postData;
    } else {
        ctx.body = '<h1>404 Not Found.</h1>'
    }

    function parsePostData(ctx) {
        return new Promise((resolve, reject) => {
            try {
                let postData = ''
                ctx.req.addListener('data', (data) => {
                    console.log('data', data)
                    postData += data
                })
                ctx.req.on('end', () => {
                    console.log('postData', postData)
                    let parseData = parseQueryStr(postData);
                    console.log('parseData', parseData)
                    resolve(parseData);
                })
            } catch (error) {
                reject(error)
            }
        })
    }

    function parseQueryStr(queryStr) {
        let queryData = {}
        let queryStrList = queryStr.split('&')
        for (let str of queryStrList) {
            let itemList = str.split('=')
            queryData[itemList[0]] = decodeURIComponent(itemList[1])
        }
        return queryData
    }
})

app.listen(port, () => {
    console.log('server running...')
    console.log(hostname + ':' + port)
})