◎ SASS webpack

Webpack封裝SASS文檔。
在此記錄做法與相關問題。

※ SASS與LESS語法差別，主要在於是否保有括號做為分段標記。

Demo : SASS基礎操作與Webpack檔案轉譯與分割設定。
Demo_React : SASS操作於React。

◎ 模組安裝

npm install webpack extract-text-webpack-plugin css-loader style-loader sass-loader node-sass --save-dev

◎ 額外功能

§ sourceMap
css?sourceMap / sass?sourceMap

§ config
sass?config=[otherSassloaderConfig]

§ sassLoader & includePaths

◎ 小結

SASS是一套增加邏輯性的樣式語法，但其本身使用時必須使用一次轉譯工具；官方提供的轉譯工具是使用於Ruby環境下，本專案的範例則尋求於Webpack的環境下進行編譯語處理，以便日後與其他系統整合。

參考CSS Modules的使用與建構方式，SASS等標準的CSS檔案在Webpack的框架下，是指當JS檔使用require呼叫CSS檔時，會將css檔案內使用的SASS編譯後整併到內崁JS檔或輸出的CSS檔案內。
因此，若以輸出的方式使用輸出CSS檔案，則需要在HTML檔內加入下述內容。
{
	<script src="bundle.js"></script>
	<link rel="stylesheet" type="text/css" href="bundle.css" />
}

bundle是透過Webpack指定的輸出檔名，其JS、CSS檔應採用相同的檔名結構。
而使用的HTML或JSX語法則指定對應的CSS類別名稱。
{
	<div className="buttonStyle">...</div>
}

然而這樣的作法，若誤寫className對應的名稱，並不會在Webpack編譯時發出任何錯誤，SASS檔案也會轉譯並輸出成CSS檔案，但在顯示時會出現沒有套上CSS的狀況。
※ 同樣的問題使用CSS Module，狀況相同。
※ 同樣的問題使用CSS in React會編譯通過，但在執行時會發生不存在的變數而產生異常。
※ 由於className對應的是單純文字，因此，若要有條件的組合複數class名稱，可使用第三方工具classnames
	- Ref : https://github.com/JedWatson/classnames

◎ Problem

§ 禁用 @import 'compass';

參考連結如下。
其意思是指當使用import載入外部SASS檔案時，不應該針對整個檔案夾而是針對指定檔案。
若針對整份檔案夾將造成其搜尋其內部結構的所有檔案與檔案夾，這必然會產生嚴重的IO延遲與無意義的操作。

---------------------

Reference page : (Webpack)

Adding SASS Support to Webpack
https://shellmonger.com/2016/01/19/adding-sass-support-to-webpack/

Styling React Components in Sass
http://hugogiraudel.com/2015/06/18/styling-react-components-in-sass/

---------------------

Reference page : (SASS)

Sass (stylesheet language)
https://en.wikipedia.org/wiki/Sass_(stylesheet_language)

Sass Basics
http://sass-lang.com/guide

CSS w3schools
http://www.w3schools.com/css/default.asp

使用scss來加速寫css吧!
http://blog.visioncan.com/2011/sass-scss-your-css/

SASS基本使用教學：變數、函式、繼承、巢狀撰寫
https://coder.tw/?p=874

Sass教學 (39) - 輕鬆import資料夾內所有sass檔
http://ithelp.ithome.com.tw/articles/10161305

SCSS 開發原則：禁用 @import 'compass';
https://ruby-china.org/topics/10699

Styling React Components in Sass
http://hugogiraudel.com/2015/06/18/styling-react-components-in-sass/

