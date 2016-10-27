// Reference : https://webpack.toobug.net/zh-cn/chapter3/config.html

/*
若有多個入口，亦即需有複數個JS專案當案，需在ENTRY進行設定。
需注意若單用[hash]則會整併為單一檔案；觀看其輸出檔，可以觀察到其內部僅保有一個檔案的內容，主因應是於本次build過程中僅有一個hash，而後執行的檔案覆蓋其上。
因此於Output，應設定依據[name]、[name]-[hash]、[chunkhash]輸出。
*/
var config = {
    entry:{
      'demo1': './example1',
      'demo2': './example2'
    },
    output:{
        path:'./build',
        //filename:'[name].js'
        //filename:'[name]-[hash].js'
        filename:'[chunkhash].js'
    }
};

module.exports = config;
