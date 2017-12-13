/**
 * 将文件复制到打包目录中
 */

const gulp             = require('gulp');
const path             = require('path');
const jsonPath         = path.join(process.cwd(), 'dist', 'json');
const fontsPath        = path.join(process.cwd(), 'dist', 'assets', 'fonts');

gulp.task('fonts', function () {
  return gulp.src('src/assets/fonts/**/*')
    .pipe(gulp.dest(fontsPath));
});

gulp.task('json', function () {
  return gulp.src('src/assets/json/**/*')
    .pipe(gulp.dest(jsonPath));
});

gulp.task('move', ['fonts', 'json']);
