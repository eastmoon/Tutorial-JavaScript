var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: {
      bundle: path.resolve(__dirname, 'src/app/main.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
      loaders: [
        {
          test: /\.sass$/,
          // 使用的轉譯器，CSS用於解析句型、Style用於寫入JS檔案
          //loaders: ["style", "css", "sass"]

          // 分離使用的到的CSS內容。
          // @Parame notExtractLoader : 當抽取失敗時使用的轉寫工具
          // @Parame loader : 解析句型工具
          loader: ExtractTextPlugin.extract("style-loader", "css!sass?sourceMap")
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};

module.exports = config;
