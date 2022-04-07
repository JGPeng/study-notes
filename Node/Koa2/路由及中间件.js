const Koa = require('koa');
const router = require('koa-router')();  //注意：引入的方式
const bodyParser = require('koa-bodyparser');  //引入中间件，用于获取 post 提交的数据
var app = new Koa();
app.use(bodyParser());

app.use(async (ctx, next) => {
    // console.log(ctx.status);
    console.log(1, new Date());
    // console.log(2, new Date());
    await next();
    // next();
    // console.log(3, new Date());
})

router.get('/', function (ctx, next) {
    let html = `
        <h2>koa2 request POST</h2>
        <form method="post" action="/post">
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
})

router.get('/news', (ctx, next) => {
    ctx.body = "新闻page"
});

// 怎么设置路由不匹配规则？

router.get('/newscontent', (ctx, next) => {
    let url = ctx.url;
    //从request中获取GET请求
    let request = ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;
    //从上下文中直接获取
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;
    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
});

//请求方式   http://域名/product/123
router.get('/product/:aid', async (ctx) => {
    console.log(ctx.params);  //{ aid: '123' }  //获取动态路由的数据
    ctx.body = '这是商品页面';
})

router.post('/post', function (ctx, next) {
    ctx.body = ctx.request.body
})

app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods()); // 作用： 这是官方文档的推荐用法,我们可以看到router.allowedMethods()用在了路由匹配router.routes()之后,所以在当所有路由中间件最后调用.此时根据ctx.status设置response响应头
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
});