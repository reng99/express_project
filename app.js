/**
 * 应用程序入口
 * 
 * author:reng
 * 
 * email:1837895991@qq.com
 * 
 * build-time:2017-10-13
 */

// 加载express模块
var express = require('express');
// 创建app应用 === 等价于原生的node中的http.createServer();
var app =express();

// 首页
app.get('/',function(req,res,next){
    res.send('<h1>hello world!!</h1>');
});

// 监听http请求
app.listen(9000);