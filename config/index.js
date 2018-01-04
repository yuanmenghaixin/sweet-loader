/**
 * 环境配置文件
 */

const devServer = require('./dev.server');

let config = {
    // 通用配置
    common: {
        babelInclude: [],
        assetsSubDirectory: 'assets',
        theme: 'demo_theme'
    },
    // 前端开发环境配置
    dev: {
        NODE_ENV: '"dev"',
        /**
         * 定义全局变量
         * 可以在js中通过 globalVar.baseUrl获取
         */
        globalVar: {
            'process.env.NODE_ENV': '"development"',
            baseURL: ''
        }
    },
    // 服务器生产环境配置
    production: {
        NODE_ENV: '"production"',
        globalVar: {
            'process.env.NODE_ENV': '"production"',
            baseURL: ''
        }
    },
    // 服务器开发环境配置
    'production-dev': {
        NODE_ENV: '"production"',
        globalVar: {
            'process.env.NODE_ENV': '"production"',
            baseURL: ''
        }
    },
    // 服务器测试环境配置
    'production-test': {
        NODE_ENV: '"production"',
        globalVar: {
            'process.env.NODE_ENV': '"production"',
            baseURL: ''
        }
    },
    // 服务器预发布环境配置
    'production-pre': {
        NODE_ENV: '"production"',
        globalVar: {
            'process.env.NODE_ENV': '"production"',
            baseURL: ''
        }
    }
};

Object.assign(config.dev, devServer);
module.exports = config;
