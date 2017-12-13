/**
 * 图片压缩打包处理
 */

const gulp       = require('gulp');
const path       = require('path');
const requireDir = require('require-dir');
const imgPath    = path.join(process.cwd(), 'dist', 'assets', 'images');
requireDir('./', { recurse: true });

gulp.task('images', ['clean:images'], function () {
  // images/**/* images目录下的所有子目录和所有东西(包含东西最多)
  // images/*/* images目录下的东西和子目录下的东西
  // images/*.{png,jpg} images目录下的所有以png和jpg为后缀名的图片
  gulp.src('src/assets/images/**/*')
    .pipe(gulp.dest(imgPath));
});
