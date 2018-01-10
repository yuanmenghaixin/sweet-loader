const minimist   = require('minimist');
global.env = minimist(process.argv.slice(2), { string: 'env', default: { env: process.env.NODE_ENV || 'dev' } }).env;
global.envConfig = require('./config')[global.env];
const gulp       = require('gulp');
const requireDir = require('require-dir');
requireDir('./build/tasks/', { recurse: true });


console.log('  ');
console.log('   _____                       __     __  __ ____');
console.log('  / ___/_      __ ___   ___   / /_   / / / //  _/');
console.log('  \\__ \\| | /| / // _ \\ / _ \\ / __/  / / / / / /  ');
console.log(' ___/ /| |/ |/ //  __//  __// /_   / /_/ /_/ /   ');
console.log('/____/ |__/|__/ \\___/ \\___/ \\__/   \\____//___/   ');
console.log('  ');


/**
 * gulp默认启动配置
 */
gulp.task('default', ['clean:all'], function() {
	gulp.start('server');
});


gulp.task('build', ['js']);
