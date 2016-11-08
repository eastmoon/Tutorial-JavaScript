var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, 'src/app/main.js'),
        vendor: path.resolve(__dirname, 'src/app/vendor.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        // tell webpack to look for required files in bower and node
        modulesDirectories: ['node_modules'],
        // tell webpack to redirect the required files location.
        alias: {
            ember: path.join(__dirname, './ember')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /app\/index\.js/,
                loader: 'ember-webpack-loaders/inject-templates-loader!ember-webpack-loaders/inject-modules-loader'
            }
        ]
    },
    plugins: [new webpack.optimize.CommonsChunkPlugin({name: "vendor"})]
};;
