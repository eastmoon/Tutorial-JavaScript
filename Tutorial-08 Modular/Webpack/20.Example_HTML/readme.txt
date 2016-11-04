◎ HTML webpack

Webpack封裝時創建HTML檔案，並以此夾帶抽出的JS、CSS檔案。
在此記錄做法與相關問題。

◎ 模組安裝

§ HTML plugin ( Demo )
npm install webpack html-webpack-plugin --save-dev

§ HTML、CSS plugin ( Demo_CSS )
npm install webpack html-webpack-plugin extract-text-webpack-plugin css-loader style-loader --save-dev

§ File copy and clean plugin ( Demo_File )
npm install webpack copy-webpack-plugin clean-webpack-plugin --save-dev

◎ HTML plugin 小結

HTML plugin目的是減少開發者自行創建build內的內容物。
透過Webpack本身可以封裝JS檔，而藉由loader與extract-text插件可以將CSS檔案封裝，而必須使用此兩份檔案的HTML文檔則由此插件來建立。

使用此插件有幾個特定需注意：

§ Template

透過插件可以設定HTML檔案的基礎參數並結合封裝後的檔案，但若考量文件本身可能隸屬專案的部分頁面或有參考頁面，則可透過樣板(Template)讀取EJS檔案，來建立所需要的HTML檔案結構。

§ Chunks

檔案建立其目的是用於關聯封裝的JS與CSS檔案，然而若有複數個chunks(entry)，亦即多進入點(Multi entry)狀況，則設定檔案時指定對應的chunks名稱即可。

※ 參考Demo_CSS

◎ File copy and clean plugin 小結

檔案複製的情況發生在編譯時，需要輸出的檔案類型可能包含大量的資源檔、設定檔，這些靜態資料並不會因為編譯而更動，但可能依據版本情況複製新增的資料，或因為編譯前的清除(Clean)動作，因此需要複製整份資料夾。

§ Clean

Clean的動作單純，指定需要進行清除的資料夾，並設定忽視的檔案類型(如果必要)。
但要注意若檔案夾有任何外部裝置(軟體)正開啟時，刪除行為會失敗，進而引發編譯失敗。

§ Copy

Copy的結構為下

- [Copy command],{Copy options}

Options方面，主要是ignore檔案類型、還有只複製部分檔案。

Copy command方面，則可依循以下格式編寫：

- copy {content}/{from} to [build_path]/{to}
{
	content: "",
	from: "",
	to: ""
}
其中build_path為當前邊譯輸出的指定路徑。
其餘詳細格式規劃可參考Copy插件文件。

---------------------

Reference page :

html-webpack-plugin 
https://www.npmjs.com/package/html-webpack-plugin

HTML Webpack Plugin
https://github.com/ampedandwired/html-webpack-plugin

copy-webpack-plugin
https://www.npmjs.com/package/copy-webpack-plugin

clean-webpack-plugin 
https://www.npmjs.com/package/clean-webpack-plugin

webpack 插件： html-webpack-plugin
http://www.cnblogs.com/haogj/p/5160821.html
