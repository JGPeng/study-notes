// 字符串替换
var str = `
    <h1>^_^</h1>
`
str = str.replace('^_^', 'hello nodejs')
console.log(str)

// 模板字符串拼接
var url = 'www.baidu.com'
var str2 = `
    <a href="${url}">点我</a>
`
console.log(str2)

// 应用场景：
//   字符串替换：
//     html动态更新目录名时，使用fs.readdir获取指定目录路径下的文件数组，然后将这些文件名依次替换html页面中的数据
//   模板字符串拼接：
//     同样可以替换页面中的内容
