/**
 * webpack 配置文件
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const utils = require('../utils');
const publicPath = global.env === 'dev' ? '/assets/' : './assets/';
const devtool =
    global.env !== 'dev' ? 'source-map' : 'cheap-module-eval-source-map';
const entry =
    global.env === 'dev'
        ? {
              app: [
                  'babel-polyfill',
                  'webpack-hot-middleware/client?reload=true&noInfo=true',
                  path.join(process.cwd(), 'src/main.js')
              ]
          }
        : {
              app: ['babel-polyfill', path.join(process.cwd(), 'src/main.js')]
          };
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
    filename: 'css/[name].[contenthash].css'
});
const isProduction = global.env === 'production';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = require('../../config');

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

const webpackConfig = {
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
        rules: [
            {
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
                use: [
                    {
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
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'js/commons.js'
        }),
        new webpack.DefinePlugin({
            globalVar: JSON.stringify(global.envConfig.globalVar)
        }),
        extractCSS,
        new FriendlyErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: path.join(process.cwd(), 'dist/index.html'),
            template: path.join(process.cwd(), 'src/index.html'),
            hash: true
        })
    ]
};

switch (global.env) {
    case 'dev':
        webpackConfig.plugins.unshift(
            new webpack.LoaderOptionsPlugin({
                debug: true
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.HotModuleReplacementPlugin()
        );
        break;
    case 'test':
        webpackConfig.plugins.unshift();
        break;
    default:
        webpackConfig.plugins.unshift(
            /*
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                sourceMap: true
            })
            */
            new webpack.optimize.ModuleConcatenationPlugin(),
            new UglifyJsPlugin({
                sourceMap: false,
                parallel: true
            })
        );
}

module.exports = webpackConfig;
