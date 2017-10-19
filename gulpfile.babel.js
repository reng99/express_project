import gulp from 'gulp'; //引入gulp
import clean from 'gulp-clean';
import plumber from 'gulp-plumber';// https://www.npmjs.com/package/gulp-plumber/
import babel from 'gulp-babel'; // https://www.npmjs.com/package/gulp-babel/
import uglify from 'gulp-uglify'; // https://www.npmjs.com/package/gulp-uglify/

gulp.task('default',()=>{
    gulp.start(['es6to5']);
});

gulp.task('clean' , ()=>{// 清除不必要的文件和文件夹
    return gulp.src([
       'dist', //删除dist整个文件夹
      ] ).pipe(clean());
 });

 gulp.task('es6to5',()=>{
    return gulp.src('public/js/**/*.js')
        .pipe(plumber())
        .pipe(babel()) // 转换es6语法
        .pipe(uglify()) // 压缩js,再压缩前要进行.pipe(babel())将es6语法转换成es5，因为gulp-uglify不识别
        .pipe(gulp.dest('dist/js'));
 });

 // http://www.cnblogs.com/QRL909109/p/5620824.html