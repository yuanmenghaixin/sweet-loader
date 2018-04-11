/**
 * webpack 入口文件
 */

const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const utils = require('../utils');
const webpackbaseConfig = require('./webpack.base.conf');

const configBase = {
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'js/commons.js'
        }),
        new webpack.DefinePlugin({
            globalVar: JSON.stringify(global.envConfig.globalVar)
        }),
        utils.getExtractCSS(),
        new FriendlyErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: path.join(process.cwd(), 'dist/index.html'),
            template: path.join(process.cwd(), 'src/index.html'),
            hash: true
        })
    ]
}

switch (global.env) {
    case 'dev':
        configBase.plugins.unshift(
            new webpack.LoaderOptionsPlugin({
                debug: true
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.HotModuleReplacementPlugin()
        );
        break;
    case 'test':
        configBase.plugins.unshift();
        break;
    default:
        configBase.plugins.unshift(
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


const webpackConfig = merge(webpackbaseConfig, configBase);

module.exports = webpackConfig;
