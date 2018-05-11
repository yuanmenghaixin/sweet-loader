// 针对webpack3 配置的postcss.config.js
const utils = require("./utils.js");
const postcssPlugins = utils.postcssPlugins();

module.exports = {
    plugins: postcssPlugins
} 