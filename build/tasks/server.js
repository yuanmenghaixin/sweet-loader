const gulp            = require('gulp');
const webpackConfig   = require('../webpack');
const proxyMiddleware = require('http-proxy-middleware');
const browserSync     = require('browser-sync').create();
const requireDir      = require('require-dir');
// 通过 require-dir 将gulp 任务配置导入
requireDir('./', { recurse: true });

/**
 * [利用webapck中间件，搭建webpack热更新开发服务环境]
 */

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

gulp.task('server', ['js'], function () {
    /**
     * 处理代理设置
     * 
     */
    let porxys = [];
    for (var i = 0; i < global.envConfig.porxys.length; i++) {
        porxys.push(
            proxyMiddleware(
                global.envConfig.porxys[i].paths,
                global.envConfig.porxys[i].option
            )
        );
    }

    // 合并中间件
    let wbMiddleware = [
            // global.compiler 来自于 js task内的定义
            webpackDevMiddleware(global.compiler, {
                publicPath: webpackConfig.output.publicPath,
                quiet: true
            }),
            webpackHotMiddleware(global.compiler)
        ],
        middleware = porxys.concat(wbMiddleware);

    // 启动开发服务环境
    browserSync.init({
        ghostMode: false,
        server: {
            baseDir: 'dist',
            middleware: middleware
        },
        port: global.envConfig.port
    });
    gulp.start('watch');
});
