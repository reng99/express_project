// 定义数据库中分类的表结构

var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    
    // 分类的名称
    name:String
});