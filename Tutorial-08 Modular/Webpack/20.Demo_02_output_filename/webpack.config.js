// Reference : https://webpack.toobug.net/zh-cn/chapter3/config.html

/*
output path : 輸出檔案所在的基底檔案夾位置。 
output filename : 合併後的文檔可依以下方式指定輸出檔名。
- xxx 指定名稱
- [name] 模組名稱
- [hash] 模組編譯後的Hash值；此hash值為本次build的唯一編號，因此不適用於Multi entry.
- [chunkhash] Chunks對應的Hash值
*/
var config = {
    entry:['./example1','./example2'],
    output:{
        path:'./build',
        filename: 'bundle.js'
        //filename:'[name].js'
        //filename:'[hash].js'
        //filename:'[chunkhash].js'
    }
};

module.exports = config;
