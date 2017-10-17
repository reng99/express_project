// api模块

var express = require('express');
var router = express.Router();
// 引入model中的User构造函数
var User = require('../../models/User');

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
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;

    // 用户名不能为空
    if(username == ''){
        responseData.code = 1;
        responseData.message = '用户名不能为空';
        res.json(responseData);
        return;
    }
    // 密码不能为空
    if(password == ''){
        responseData.code = 2;
        responseData.message = '密码不能为空';
        res.json(responseData);
        return;
    }
    // 两次输入的密码要一致
    if(password != repassword){
        responseData.code = 3;
        responseData.message = '两次输入的密码不一致';
        res.json(responseData);
        return;
    }
    // 用户名是否已经被注册了，如果数据库中已经存在和我们要注册的用户名同名的数据，表示该用户名已经被注册了
    // 使用promise对象
    User.findOne({
        username:username
    }).then(function(userInfo){
        if(userInfo){
            responseData.code = 4;
            responseData.message = '用户名已经被注册了';
            res.json(responseData);
            return;
        }
        // 保存用户注册信息到数据库中
        var user = new User({
            username:username,
            password:password
        });
        return user.save();
    }).then(function(newUserInfo){ // newUserInfo 是注册成功的用户在数据库中的信息
        responseData.message = '注册成功';
        res.json(responseData);
    });
});


module.exports = router;