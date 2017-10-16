// 定义数据库中用户的表结构 
var mongoose = require('mongoose');

module.exports = new mongoose.Schema({// 一个构造函数
    // 用户名
    username:String,
    // 密码
    password:String
});