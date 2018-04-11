/**
 * webpack 基础配置文件
 */

const path = require('path');
const webpack = require('webpack');

const utils = require('../utils');
const config = require('../../config');

const publicPath = utils.getPublicPath();
const devtool = utils.getDevtool();
const entry = utils.getEntry();
const isProduction = utils.getIsProduction();

const extractCSS = utils.getExtractCSS();


function resolve(dir) {
    return path.join(process.cwd(), dir);
}

const initBabelInclude = [
    resolve('src'),
    resolve('test'),
    resolve('node_modules/@sweet'),
    resolve('node_modules/element-ui/src/utils/')
];

config.common.babelInclude.map(function(item) {
    return resolve(item);
});

const babelInclude = initBabelInclude.concat(config.common.babelInclude);


module.exports = {
    devtool: devtool,
    entry: entry,
    output: {
        filename: 'js/[name].js',
        path: path.join(process.cwd(), 'dist', 'assets'),
        chunkFilename: 'js/modules/[name]-[chunkhash].js',
        publicPath: publicPath,
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            style$: resolve('src/styles/themes')
        },
        symlinks: false
    },
    module: {
        rules: [{
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [
                    resolve('src'),
                    resolve('test'),
                    resolve('node_modules/sweet')
                ],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: utils.cssLoaders({
                        sourceMap: isProduction,
                        extract: isProduction,
                        extractCSS: extractCSS
                    }),
                    transformToRequire: {
                        video: 'src',
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: babelInclude,
                options: {
                    plugins: ['syntax-dynamic-import']
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader' // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: 'sass-loader' // 将 Sass 编译成 CSS
                    }
                ]
            }
        ]
    }
}
