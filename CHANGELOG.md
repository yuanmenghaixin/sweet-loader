# 更新日志 CHANGELOG

## 2.1.0-beta - 2018/06/13

### - New
- `config`配置文件的代理配置更改，支持正则
- `build`文件的逻辑全部整合入@sweetui/sweet-sdk中
- `gulpfile.js`舍弃
- 开发环境下搭建在koa平台上
- gulp任务剥离出来
- `config/index`增加配置项`assetsPath`字段，配置资源路径的前缀，解决项目可能运行在子文件夹下。

## 2.0.0-release - 2018/04/27

### - New
- 基于UED规范v2.0版本
- element-ui 升级到2.3.6
- vue 升级到2.5.16
- 框架依赖管理调整


### - Bug Fixed
- 添加polyfill解决IE9以上的IE浏览器问题
- vue样式由于抽离，而导致引入顺序问题修复
- vue引用版本不同导致bug修复

## 2.0.0-beta 2 - 2017/11/22

### - Bug Fixed
- 修复babel处理 node_modules 编译问题，可以通过 `config/index.js` 中的 `babelInclude` 配置需要转换ES6的路径


## 2.0.0-beta 1 - 2017/11/20

### - New

- 使用scss替换less
- element-ui 升级到2.0.5版本，并且可进行样式参数配置
- 组件内scss文件可以直接使用全局变量和全局mixin方法
- Vue升级到2.5.6版本
