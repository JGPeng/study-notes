var fs = require('fs')

var baseurl = 'E:/gitee/web-blog/Nodejs/resource'

// 读取目录
fs.readdir(baseurl,function(err,files){
    if(err){
        console.log('Can not find baseurl dir.')
    }else{
        console.log(files)
    }
})