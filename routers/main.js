// 前台模块的路由信息
var express = require('express');
var router = express.Router();

// 首页
router.get('/index.html',function(req,res,next){
    // 参数二为分配的模版信息
    res.render('main/index.html',{
        userInfo: req.userInfo // 为模版设置一个userInfo 并从req中获取相关值
    });
});

// 登录页
router.get('/login.html',function(req,res,next){
    // 参数二为分配的模版信息
    res.render('main/login.html',{});
});

// 注册页
router.get('/register/index.html',function(req,res,next){
    // 参数二为分配的模版信息
    res.render('main/register/index.html',{});
});

module.exports = router;