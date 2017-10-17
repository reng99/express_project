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
// 加载模版处理模块
var swig = require('swig');
// 加载数据库处理模块
var mongoose = require('mongoose');
// 加载body-parser，用来处理post提交过来的数据
var bodyParser = require('body-parser');
// 增加cookies模块，客户端记录用户登录状态等信息
var Cookies = require('cookies');
// 创建app应用 === 等价于原生的node中的http.createServer();
var app =express();


// 设置静态文件托管
// 当用户访问的url是以 /public 开始，那么就直接返回对应的__dirname+'/public'下的文件夹
app.use('/public',express.static(__dirname+'/public'));


// 配置应用模版
// 定义当前应用所使用的模版引擎
// 第一个参数表示模版引擎的名称，同时也是模版文件的后缀,第二个参数表示用于处理模版内容的方法
app.engine('html',swig.renderFile);
// 设置模版文件存放的目录,第一个参数必须是views,不能变更，第二个参数是目录
app.set('views','./views');
// 注册所使用的模版引擎，第一个参数必须是view engine,第二个参数和app.engine这个方法中定义的模版引擎的第一个参数一致
app.set('view engine','html');
// 在开发的过程当中，需要取消模版缓存,这样刷新页面就有效果了
swig.setDefaults({
    cache:false
});

// bodyParser的设置,通过中间件的形式设置
app.use(bodyParser.urlencoded({extended:true}));// 自动在api调用req那里增加一个body的属性


// 更具不同的功能划分模块
app.use('/',require('./routers/main')); // 前端模块
app.use('/frontend_api',require('./routers/api/frontend')); // 针对前端的 api 模块
// app.use('/backend_api',require('./routers/api/backend')); // 针对后端的 api 模块


// 首页
// app.get('/',function(req,res,next){
//     // res.send('<h1>hello world!!</h1>');

//     // 读取views目录下的指定文件，解析并且返回给客户端
//     // 第一个参数：表示模版的文件，相对与views目录 views/index.html
//     // 第二个参数：传递给模版使用的数据
//     res.render('main/index.html');//  可以写成res.render('main/index);
// });


// 链接数据库
mongoose.connect('mongodb://localhost:27019/express_project',function(err){
    if(err){
        console.log("数据库链接失败");
    }else{
        console.log("数据库链接成功");
        // 数据库成功后开始监听http请求
        app.listen(9000);
    }
})


// 监听http请求
// app.listen(9000);