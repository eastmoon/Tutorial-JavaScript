var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
      main: path.resolve(__dirname, 'src/app/main.js')
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          // 使用的轉譯器，CSS用於解析句型、Style用於寫入JS檔案
          //loader: "style-loader!css-loader"

          // 分離使用的到的CSS內容。
          // @Parame notExtractLoader : 當抽取失敗時使用的轉寫工具
          // @Parame loader : 解析句型工具
          loader: ExtractTextPlugin.extract("style-loader", "css?minimize")
        }
      ]
    },
    plugins: [
        // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
        new ExtractTextPlugin("[name].css", {allchunk:true})
    ]
};
