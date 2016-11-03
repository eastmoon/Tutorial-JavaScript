var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: {
      bundle: path.resolve(__dirname, 'src/main.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },{
        test: /\.sass$/,
        // 分離使用的到的CSS內容。
        // @Parame notExtractLoader : 當抽取失敗時使用的轉寫工具
        // @Parame loader : 解析句型工具
        loader: ExtractTextPlugin.extract("style-loader", "css!sass?sourceMap")
      }]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};

module.exports = config;
