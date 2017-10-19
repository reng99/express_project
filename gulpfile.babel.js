import gulp from 'gulp'; //引入gulp
import clean from 'gulp-clean';

gulp.task('default',()=>{
    gulp.start(['clean']);
});

gulp.task('clean' , ()=>{// 清除不必要的文件和文件夹
    return gulp.src([
       'dist', //删除dist整个文件夹
      ] ).pipe(clean());
 });

 // http://www.cnblogs.com/QRL909109/p/5620824.html