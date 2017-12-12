const minimist   = require('minimist');
global.env       = minimist(process.argv.slice(2), { string: 'env', default: { env: process.env.NODE_ENV || 'dev' } }).env;
global.envConfig = require('./config')[global.env];
const gulp       = require('gulp');
const requireDir = require('require-dir');
requireDir('./build/tasks/', { recurse: true });


/**
 * gulp默认启动配置
 */
gulp.task('default', ['clean:all'], function() {
	gulp.start('server');
});


gulp.task('build', ['js']);
