## 全栈开发项目（没主题，基本架构已经完成）

### 使用方法

假设电脑上已经安装了node环境

```bash

    1.下载本目录
    $ git clone https://github.com/reng99/express_project.git

    2.进入本目录
    $ cd express_project

    3.安装相关依赖
    $ npm install

    4.启动应用（生产环境）
    $ npm run dev

    5.在浏览器上查看效果
    http://localhost:9000/index.html(自动弹出来⚠️首次加载的时候请手动刷新一下，因为加载慢)

    6.压缩资源（开发环境）
    $ npm run build（会在根目录下生成dist文件夹）


```

这是目前查看本目录的方法，后期变动的话再进行更改。

### 使用的技术

> 前端开发

1.es5/es6,html/html5,css/css3

2.构建工具gulp

3.包管理工具npm

4.jquery库

5.[font-awesome](http://fontawesome.dashgame.com/)

6.less 预处理器

> 后端开发

1. es5/es6

2. nodeJS技术

3. 使用的库，jquery

4. 使用后台框架 express

5. ui框架adminlte


> 数据库

1. 数据库为mongodb

2. 相关的可视化管理工具 Robo 3T


> 实时预览的解决方案

[Browsersync + Gulp.js](https://browsersync.io/docs/gulp)

[nodemon](https://nodemon.io/) // 用来启动node服务



### 项目背景

自己搭建项目熟悉前后端的开发！

要点：
1.用户分为管理员和普通用户，管理人员在数据库中添加，普通用户需要在页面中注册。

### 项目布局

```javascript

    .
    ├── .vscode // vscode ide的相关的设置
    ├── db // 数据库 这里我使用了moogodb
    ├── dist // 执行npm run build时候生成的压缩环境   
    │   ├── css // 压缩后的样式 -- 对应public/css文件夹（生产环境替换）
    │   ├── imgs // 压缩后的图片 -- 对应public/imgs文件夹（生产环境替换） 
    │   ├── js // 压缩后的js -- 对应public/js文件夹（生产环境替换）
    │   └── views // 压缩后的视图--对应根目录下的views文件夹（生产环境替换）
    ├── doc // 相关文档
    │   └── api.md // api说明
    ├── models // 模型 用于操作表
    ├── node_modules // 项目的依赖 执行npm install 后产生
    ├── public // 静态资源
    │   ├── css // 我这里限定存放公共的样式
    │   │   ├── backend // 存放后端的公共样式，允许但不建议内嵌文件夹（防止和less生成的文件产生冲突）
    │   │   └── frontend // 存放前端的公共样式，允许但不建议内嵌文件夹（防止和less生成的文件产生冲突）
    │   ├── es6 // javascript编写的地方，支持es6语法
    │   │   ├── backend // 编写后台js
    │   │   └── frontend // 编写前台js    
    │   ├── imgs // 图片资源
    │   │   ├── backend // 后端使用到的图片
    │   │   └── frontend // 前端使用到的图片
    │   ├── js // javascripts 资源 --> 使用gulp转换es6得到的文件，⚠️禁止在里面进行编写（npm run dev后产生）
    │   │   ├── backend // 开发环境后台引用的js
    │   │   └── frontend // 开发环境前台引用的js    
    │   ├── less // less预处理器编写css
    │   │   ├── backend // 后端使用到的less
    │   │   └── frontend // 前端使用到的less  
    │   └── lib // 第三方提供的资源   
    ├── routers // 路由，我的理解是mvc中的c
    │   ├── api // 公共api路由
    │   ├── admin.js // 后台路由
    │   └── main.js // 前台路由
    ├── schemas //相关的表结构 
    ├── views //相关的视图 
    │   ├── admin // 后台视图
    │   └── main // 前台视图
    ├── .babelrc //babel的相关配置 
    ├── .gitignore //提交github时忽略提交的内容 
    ├── app.js //应用程序入口
    ├── config.js // 相关的配置文件
    ├── gulpfile.babel.js //gulp相关配置
    ├── package-lock.json // 当node_modules或者package.json发生变动时产生
    ├── package.json //nodejs相关配置
    └── README.md //说明文件 项目的说明

```

### 实现的功能（概要版）

1. 注册

2. 登录

3. 用户展示

4. 用户删除
    普通用户允许删除
    管理员禁止删除


⚠️ 注意： 本项目不再更新，已经实现基本功能，您如果感兴趣可以自己去扩展哦！

### 参考

[gulp中文网](http://www.gulpjs.com.cn/)

[BrowserSync](https://browsersync.io/) 

