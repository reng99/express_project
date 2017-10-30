// 模型--操作表，增删查改

var mongoose = require('mongoose');

var categoriesSchema = require('../schemas/categories');

// 创建一个模型，模型是基于表结构的
module.exports = mongoose.model('Category',categoriesSchema);