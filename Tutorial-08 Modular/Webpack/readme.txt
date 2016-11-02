◎ Webpack

Webpack是一套基於NodeJS為底的開發模組整合工具。
運用此工具，開發者可以使用NodeJS下的套件模組，並以此加速開發與自動化流程。

◎ 模組安裝

● npm (node package manager)

NodeJS為執行JavaScript的環境操作軟體，若於伺服器安裝則可用JavaScript開發後端軟體。
npm則是NodeJS用於安裝node packages的命令列工具，並可用其解決package相依性問題。

○ Package Dependencies

在安裝套件需注意，每個套件都有其相依其他第三方工具。
因此安裝時，系統會檢查於本次安裝是否存有依賴相同的套件，或安裝被依賴的套件；若存在，npm對此會自動保留其一，但若分次安裝，舊有下載將不會移除。
※ 由於套件安裝後會以階層方式存於檔案夾內，這也造成檔案夾過長而無法正常刪除問題，解決方式參考後文。

◎ Entry
Demo : 20.Demo_01_entry_and_output
Demo : 20.Demo_03_multi_entry

Webpack的Entry(入口)，亦即實際需進行處理的對象JS。
※ 在原則上，需要進行編譯的是JavaScript，若對象為HTML、CSS，則需使用外部工具進行設定或指定處理方式。

若針對不同情況設計了執行入口(C++ Main)，可使用物件描述指定輸出多個入口。
{
	'XX': 'main1.js',
	'YY': 'main2.js'
}

◎ Output
Demo : 20.Demo_02_output_filename

Webpack的Output是用於指定輸出檔案的名稱(filename)與位置(path)。
需注意的是，依據不同的名稱格式，輸出的檔案會有整合、分割的狀況。

◎ Plugins
Demo : 20.Demo_04_chunks
Ref : https://webpack.github.io/docs/list-of-plugins.html
Ref : https://rhadow.github.io/2015/05/30/webpack-loaders-and-plugins/

Plugins的主要功能是針對Webpack功能性的補強、輔助，這點與Loader有明顯的分野；但這並非絕對。
因此，大多數情況，若針對特定功能進行處理，多半會以Webpack為字首開始運作。

◎ Loader
Ref : https://webpack.toobug.net/zh-cn/chapter4/README.md

Loader與Plugins同為Webpack用於使用外部工具的參數，但主要用途是將不同於JS的格適當案轉換為JS檔案；在這點上與Plugins有明顯的分野，亦因此獨立一個詞來處理。

Loader官方分類：
https://webpack.github.io/docs/list-of-loaders.html

1. basic
基礎工具，在此分類中的部分屬於語言編寫工具相關，如讀取XML、SVG檔案，將程式結果輸出為文字串等。

2. packaging
封裝，在此分類中的部分屬於檔案、資源管理為主，例如指定檔案到輸出位置、影像壓縮、位元轉換。

3. dialects
方言，在此分類中的部分屬於JS方言轉換為JS語言的相關工具，如專案常用的ES6、BABEL轉換ECMAScript為原始JS。

4. templating
樣板，在此分類中的部分屬於HTML樣板轉換的相關工具，如JSX、EJS這類特定樣板工具，在Webpack進行封裝時將其轉換成正式的HTML。

5. styling
樣式，在此分類中的部分屬於CSS樣式轉換的相關工具，如CSS、SASS等。

6. translation
轉換，不同於方言轉譯，這部分近似將特定檔案格式轉換成JSON的轉換工具。

7. support
支援，在此分類中的部分可分為測試、預載兩部分。

◎ Problem

§ npm安裝參數--save-dev是什麼意思？
此參數用於省略手動修改package.json文件的步驟。
-save 自動把模組和版本編號添加到dependencies區塊。
-save-dev 自動把模組和版本編號添加到devDependencies區塊。

此參數設定後的package.json其差異在執行npm install，自動重建並安裝專案模組。
npm install -production 僅安裝dependencies區塊的模組。
npm install 則安裝dependencies與devDependencies區塊的模組。

§ 刪除檔案名稱過長方式
http://demo.tc/post/811

如同多數專案檔案夾相似，Webpack以檔案夾為根目錄結構，亦即單一專案夾建立完成即可複製給相似專案運用；但需注意npm下載的內容會因為檔案夾名稱長度過常導致無法正常刪除、複製。

---------------------

Reference page :

webpack指南
https://www.gitbook.com/book/toobug/webpack-guide

webpack最全面的知識梳理
https://kknews.cc/zh-tw/other/26xkoe.html

React 和 Webpack 小书 - 一本介绍在 React JS 中使用 Webpack 的小书。
https://hainuo.gitbooks.io/react-webpack-cookbook/content/index.html

