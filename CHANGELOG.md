# 更新日志 CHANGELOG

## 2.1.1 - 2017/11/22

### - Bug Fixed
- 修复babel处理 node_modules 编译问题，可以通过 `config/index.js` 中的 `babelInclude` 配置需要转换ES6的路径


## 2.1.0 - 2017/11/20

### - New

- 使用scss替换less
- element-ui 升级到2.0.5版本，并且可进行样式参数配置
- 组件内scss文件可以直接使用全局变量和全局mixin方法
- Vue升级到2.5.6版本