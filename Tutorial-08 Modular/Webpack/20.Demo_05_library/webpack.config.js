var path = require('path');
var webpack = require('webpack');

var config = {
    entry: {
        bundle: path.resolve(__dirname, 'src/app/main.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [],
    resolve: {
        // Setting directory, which module (*.js) will exist in there.
        // e.g. "../todo.js" => 'todo.js', set ['.']
        // e.g. "../library/todo.js" => 'todo.js', set ['library']
        // Ref : http://jason-wang.logdown.com/posts/735723
        modulesDirectories: [
            '.', 'library'
        ],
        // Replace module (*.js) to other name.
        // Ref : https://webpack.github.io/docs/configuration.html#resolve-alias
        alias: {
            myTools: 'tools.js'
        }
    }
};

module.exports = config;
