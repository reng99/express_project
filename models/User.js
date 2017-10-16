// 用户模型 --  操作用户表->增删改查

var mongoose = require('mongoose');

var usersSchema = require('../schemas/users');

// 创建一个表模型，模型是基于表结构的
module.exports = mongoose.model('User',usersSchema);