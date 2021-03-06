﻿◎ CSS webpack

Webpack封裝CSS文檔。
在此記錄做法與相關問題。

◎ 模組安裝

npm install webpack extract-text-webpack-plugin css-loader style-loader --save-dev

◎ 小結

在目前測試上，編寫期與執行期是有所區分。
編寫期中引用到的CSS檔案，在最後編譯時才會使得Webpack進行檔案處理。
但引用的命令所取回的物件並沒法值皆使用，而是需要外部轉譯物件協助才可運行，如CSS Module；但這樣的方式會依據對方的編寫格式而改動檔案編寫法則。

◎ Problem

§ Module build failed: Unknown word 

原因『Documentation: Using loaders』
var css = require("css!./file.css");

於css-loader的npm文件與諸多文建會提出使用此寫法，webpack稱此為使用loader的方式。
但於Webpack的註解血到，避免使用此法，盡可能使用設定檔config.js。

§ Module not found: Error: Cannot resolve module '[object Object]' 

原因『版本參數名稱不同』
Webpack 1 : ExtractTextPlugin.extract([notExtractLoader], loader, [options])
Webpack 2 : ExtractTextPlugin.extract(options: loader | object)

Ref : https://github.com/webpack/extract-text-webpack-plugin

參考文獻有使用Webpack 1的寫法並送入物件，但這方式會導致錯解讀錯誤。

§ ExtractTextPlugin not output file

原因『Webpack編寫錯誤』
因為其格式名稱相同導致錯誤。

○ 正確格式
module.export = {
	entry{},
	output{},
	module{ loaders: [] },
	plugins: []
}

● 錯誤格式
module.export = {
	entry{},
	output{},
	loaders: [],
	plugins: []
}

module.export = {
	entry{},
	output{},
	module{ 
		loaders: [],
		plugins: []
	}
}

上述錯誤格是仍會執行loaders運作，並將css寫入js檔案內。
但因為格式解讀錯誤，並不會正確呼叫到plugins，因此導致運作程序不完整。

---------------------

Reference page :

webpack中关于样式的处理
https://github.com/zhengweikeng/blog/issues/9

webpack/extract-text-webpack-plugin
https://github.com/webpack/extract-text-webpack-plugin
