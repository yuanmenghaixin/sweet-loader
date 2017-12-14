/**
 * 将文件复制到打包目录中
 */

const gulp = require('gulp');
const path = require('path');
const rename = require('gulp-rename');
const jsonPath = path.join(process.cwd(), 'dist', 'json');
const fontsPath = path.join(process.cwd(), 'dist', 'assets', 'fonts');

gulp.task('fonts', function() {
    return gulp.src('src/assets/fonts/**/*').pipe(gulp.dest(fontsPath));
});

gulp.task('json', function() {
    return gulp
        .src('src/modules/**/*/json/*.json')
        .pipe(
            rename(function(path) {
                console.log(path);
                // var name = new Date().getTime();
                const dirname = '' + path.dirname;
                let newStr = dirname.replace(/\/|\\/g, '_') + '_' + path.basename;
                path.basename = newStr.replace('_json_', '_');
                path.dirname = '';
            })
        )
        .pipe(gulp.dest(jsonPath));
});

gulp.task('move', ['fonts', 'json']);
