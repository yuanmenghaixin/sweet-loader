const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const webpackConfig = require('../webpack');
const requireDir = require('require-dir');
// 通过 require-dir 将gulp 任务配置导入
requireDir('./', { recurse: true });

/**
 * [webpack打包JS模块]
 */
global.compiler = '';
gulp.task('js', ['locale', 'move'], function(callback) {
    // run webpack
    global.compiler = webpack(webpackConfig,
        function(err, stats) {
            if (err) throw new gutil.PluginError('[webpack]', err);
            callback();
        });
});
