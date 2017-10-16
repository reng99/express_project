// api模块

var express = require('express');
var router = express.Router();

// 统一的返回格式
var responseData;

router.use(function(req,res,next){// 这里虽然没有写出路由，表示的是任意的路由，如 “/admin” "admin/user" etc,这里表示一进来url就初始化
    responseData = {
        code:0,
        message:''
    }
    next();
});

/**
 * 用户注册
 * 注册逻辑
 * 1.用户名不能为空
 * 2.密码不能为空
 * 3.两次输入的密码必须一致
 * 
 * 数据库操作
 * 1.用户名是否已经被注册
 *      数据库查询
 */
router.post('/user/register',function(req,res,next){
    console.log(req.body);
});


module.exports = router;