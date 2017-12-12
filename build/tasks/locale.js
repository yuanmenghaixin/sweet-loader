const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const mergeJson = require('gulp-merge-json');
const merge = require('merge-stream');
const jsonMinify = require('gulp-json-minify');

gulp.task('clean-locale', function() {
    return gulp.src('src/locale/**/*.json').pipe(clean());
});

gulp.task('move-locale', ['clean-locale'], function() {
    return gulp
        .src('src/modules/**/*/locale/*.json')
        .pipe(
            rename(function(path) {
                console.log(path);
                // var name = new Date().getTime();
                const dirname = '' + path.dirname;
                const basename = '' + path.basename;
                path.basename =
                    dirname.replace(/\/|\\/g, '_') + '_' + path.basename;
                path.dirname = basename;
            })
        )
        .pipe(gulp.dest(path.join(process.cwd(), 'src', 'locale')));
});

// 合并语言文件
const localePath = 'src/locale';

function getFolders(dir) {
    return fs.readdirSync(dir).filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

gulp.task('locale', ['move-locale'], function() {
    var folders = getFolders(localePath);
    var tasks = folders.map(function(folder) {
        return gulp
            .src(path.join(localePath, folder, '/*.json'))
            .pipe(mergeJson())
            .pipe(jsonMinify())
            .pipe(rename(folder + '.json'))
            .pipe(gulp.dest(localePath));
    });

    return merge(tasks);
});
