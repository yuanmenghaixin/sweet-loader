const path = require('path');
const config = require('../config');
const autoprefixer = require('autoprefixer');

exports.assetsPath = function (_path) {
    return path.posix.join(config.common.assetsSubDirectory, _path);
};

exports.cssLoaders = function (options) {
    options = options || {};

    var cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: true,
            sourceMap: options.sourceMap
        }
    };

    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
        var loaders = [cssLoader];
        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            });
        }

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return options.extractCSS.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            });
        } else {
            return ['vue-style-loader'].concat(loaders);
        }
    }

    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass').concat({
            loader: 'sass-resources-loader',
            options: {
                resources: path.resolve(__dirname, '../src/modules', config.common.theme, 'config.scss')
            }
        }),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    };
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
    var output = [];
    var loaders = exports.cssLoaders(options);
    for (var extension in loaders) {
        var loader = loaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        });
    }
    return output;
};


exports.postcssPlugins = function (options) {
    return [
        autoprefixer({
            browsers: [
                '> 0.1%',
                "not ie <= 8",
                'Firefox >= 20',
                'last 2 versions',
                'Android >= 4.0',
                'iOS 7'
            ]
        })
    ]
}

exports.postcssLoaders = function () {
    return {
        loader: 'postcss-loader',
        options: {
            config: {
                path: path.join(process.cwd(), 'build/postcss.config.js')
            }
        }
    }
}