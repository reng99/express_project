// 前台模块的路由信息
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    // 参数二为分配的模版信息
    res.render('main/index.html',{});
});

router.get('/login',function(req,res,next){
    // 参数二为分配的模版信息
    res.render('main/login.html',{});
});

module.exports = router;