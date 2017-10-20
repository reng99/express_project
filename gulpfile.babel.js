import gulp from 'gulp'; //引入gulp http://www.gulpjs.com.cn/
import plumber from 'gulp-plumber';// https://www.npmjs.com/package/gulp-plumber/
import babel from 'gulp-babel'; // https://www.npmjs.com/package/gulp-babel/
import uglify from 'gulp-uglify'; // https://www.npmjs.com/package/gulp-uglify/
import rename from 'gulp-rename'; // https://www.npmjs.com/package/gulp-rename/ rename files
import cleanCSS from 'gulp-clean-css'; // https://www.npmjs.com/package/gulp-clean-css
import gulpif from 'gulp-if'; // https://www.npmjs.com/package/gulp-if
// import imagemin from 'gulp-imagemin'; 开发环境不需要做，避免页面加载慢 // https://www.npmjs.com/package/gulp-imagemin
import less from 'gulp-less'; // https://www.npmjs.com/package/gulp-less
import htmlmin from 'gulp-htmlmin'; // http://www.ydcss.com/archives/20 https://github.com/jonschlinkert/gulp-htmlmin
import replace from 'gulp-replace'; // https://www.npmjs.com/package/gulp-replace

// 判断条件,需要提前定义
const minCondition = function(f){
    if(f.path.endsWith('.min.js')||f.path.endsWith('.min.css')){
        return false;
    }
    return true;
}

const lessCondition = function(f){
    if(f.path.endsWith('.less')){
        return true;
    }
    return false;
}

// 相关的路径
const PATHS ={
    src:'public/',
    dest:'dist/'
};

// 程序启动
gulp.task('default',()=>{
    gulp.start(['mincss','minjs']);
});

// 压缩html -- 开发环境隐藏
// gulp.task('minhtml',()=>{
//     let options = {
//         collapseWhitespace: true,//压缩html
//         removeComments: true,//清除htmlL注释
//         collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
//         removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
//         removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
//         removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
//         minifyJS: true,//压缩页面js
//         minifyCSS: true//压缩页面css
//     };
//     return gulp.src('views/**/*.html')
//         .pipe(htmlmin(options))
//         .pipe(gulp.dest(`${ PATHS.dest }views/`));
// });

// 压缩images -- 开发环境隐藏
// gulp.task('minimg',()=>{
//     return gulp.src(`${ PATHS.src }imgs/**/*`)
//         .pipe(imagemin())
//         .pipe(gulp.dest(`${ PATHS.dest }imgs/`));
// });

// 压缩css 
gulp.task('mincss',()=>{
    return gulp.src([`${ PATHS.src }**/*.css`,`${ PATHS.src }**/*.less`])
        .pipe(plumber()) // 防止流遇到错误时候中断（跳过错误）
        .pipe(gulpif(lessCondition,less())) // less转换成css
        .pipe(gulpif(minCondition,cleanCSS())) // 没有压缩过的css文件进行压缩
        .pipe(gulpif(minCondition,rename({extname:'.min.css'}))) // 后缀名为非.min.css的进行重命名
        .pipe(gulp.dest(`${ PATHS.dest }`));
});

// 压缩 js
 gulp.task('minjs',()=>{
    return gulp.src(`${ PATHS.src }**/*.js`)
        .pipe(plumber()) // 防止流遇到错误时候中断（跳过错误）
        .pipe(babel()) // 转换es6语法
        .pipe(gulpif(minCondition,uglify())) // 没有压缩过的js进行压缩,在压缩前要进行'babel()'将es6语法转换成es5，因为gulp-uglify不识别es6语法
        .pipe(gulpif(minCondition,rename({extname:'.min.js'}))) //  后缀名为非.min.js的进行重命名
        .pipe(gulp.dest(`${ PATHS.dest }`));
 });


// reference 
// http://www.cnblogs.com/QRL909109/p/5620824.html