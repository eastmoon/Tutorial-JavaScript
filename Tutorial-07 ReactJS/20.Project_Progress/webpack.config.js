var path = require('path');
var webpack = require('webpack');

var config = {
    entry: [path.resolve(__dirname, 'src/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }]
    }
};

module.exports = config;
