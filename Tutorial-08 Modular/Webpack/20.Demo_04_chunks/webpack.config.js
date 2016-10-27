// Refernece : https://webpack.toobug.net/zh-cn/chapter3/chunks.html
// Reference : https://webpack.toobug.net/zh-cn/chapter3/common-chunks-plugin.html
// API reference : https://webpack.github.io/docs/plugins.html

/*
若有多個入口，且入口共用相同的模組，如example1使用a、b，example2使用a、b、c，在不多加設定情況，共用的模組會直接被箝至入口頁面內。

Chunk：當一個入口使用的模組越多，箝入太多容量也就越大，然而這樣的運作將違背網頁下載檔案縮小的原則；對此運用AMD(異步載入)機制，並由Webpack將其分為多個檔案載入，即為Chunk機制。
如example3中，b的引用前加上require.ensure()。

CommonsChunkPlugin：使用Chunk機制可以分離程式，但並無法將多個入口公用模組抽出，在此需使用Webpack的Plugins機制，使用工具CommonsChunkPlugin。
然而，被抽離的common.js檔案，並不會被主動設為AMD處理，而被抽離的入口會因為common未被載入而無法運作。
*/

var webpack = require('webpack');

var config = {
    entry:{
      'demo1': './example1',
      'demo2': './example2',
      'demo3': './example3'
    },
    output:{
        path:'./build',
        filename:'bundle.[name].js'
        //filename:'[name].js'
        //filename:'[name]-[hash].js'
        //filename:'[chunkhash].js'
    },
    plugins:[
      new webpack.optimize.CommonsChunkPlugin('common.js', ['demo1', 'demo2'])
    ]
};

module.exports = config;
