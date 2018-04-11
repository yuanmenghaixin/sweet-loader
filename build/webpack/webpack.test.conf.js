/**
 * webpack 单元测试配置文件
 */

const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals')
const webpackbaseConfig = require('./webpack.base.conf');

var webpackTestConfig = {
    externals: [nodeExternals()],
    devtool: 'inline-cheap-module-source-map',
    output: {
        // ...
        // 在源码表中使用绝对路径 (对于在 IDE 中调试时很重要)
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    resolveLoader: {
        alias: {
            // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
            // see discussion at https://github.com/vuejs/vue-loader/issues/724
            'scss-loader': 'sass-loader'
        }
    }
}

webpackTestConfig = merge(webpackbaseConfig, webpackTestConfig);

// no need for app entry during tests
delete webpackTestConfig.entry

module.exports = webpackTestConfig
