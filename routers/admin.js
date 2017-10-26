// 后台模块

var express = require('express');
var router = express.Router();

// 引入用户的模型
var User = require('../models/User');

router.use(function(req,res,next){// 这里虽然没有写路由，表示的是任意路由，如 “/admin” "admin/user" etc,这里表示一进来url就初始化
    if(!req.userInfo.isAdmin){
        // 如果当前的用户是非管理员
        res.send('sorry,you are not an administer');
        return;
    }
    next();
});

/**
 * 首页
 */
router.get('/index.html',function(req,res,next){
    console.log(req.userInfo);
    res.render('admin/index.html',{
        userInfo:req.userInfo
    });
});

/**
 * 用户管理页面
 */
router.get('/user/index.html',function(req,res,next){
    /**
     * 从数据库中读取用户的数据
     * limit(Number):限制获取的数据条数
     * skip(Number):忽略的条数
     */
    var page = Number(req.query.page || 1);// 当前的页数
    var limit = 5;// 每页限制的条数
    User.count().then(function(count){
        var pages = Math.ceil(count/limit); // 计算总页数
        page = Math.min(page,pages); // 取值不能超过pages
        page = Math.max(page,1); // 取值不能小于1
        var skip = (page-1)*limit; // 忽略的条数
        User.find().limit(limit).skip(skip).then(function(users){
            res.render('admin/user/index.html',{
                userInfo:req.userInfo,// 当前用户的信息
                users:users,// 查询的用户
                count:count,// 总的用户的条数
                limit:limit,
                pages:pages,// 总的页数
                page:page // 当前的第几页
            });
        });
    });
    
    
})

// 导出路由
module.exports = router;