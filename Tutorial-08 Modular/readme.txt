◎ 模組化寫法

JavaScript的基本模組寫法

- 基本模組(函數)寫法
Demo : Example_Module_1

原始寫法僅是以函數包括內容，外部變數皆為全域變數，並無封裝的概念。

- 物件寫法
Demo : Example_Module_2

以物件(Object)封裝了內容，但物件本身並無法存取屬性(public、protected、private)，因此所有內容皆為公開。

- IIFE
Demo : Example_Module_3

立即執行函數( Immediately-Invoked Function Expression，IIFE )，此類寫法，最後回傳的內容設為需要公開的函數，沒有回傳的變數則成了私有存取屬性。

- Augmentation

IIFE的宣告仍是以函數方式，因此函數若傳入模組，並對傳入內容動態增加函數，則回傳模組的模組將會得到此函數擁有的行為。
此方式變相可視為繼承，且為多重繼承。

◎ RequireJS
http://requirejs.org/

JavaScript的模組化(Modular)中，以NodeJS的CommonJS方式常受人討論。
然而CommonJS的設計是以NodeJS為目的，而NodeJS是設計用於伺服器端的腳本操作系統，在模組載入(require)命令上，是採用同步(synchronous)載入，可運用於瀏覽器則需要為異步(asynchronous)。
同步亦即運作雙方是在一個固定且可控制的程序上，異步則是運作雙方的程序雖相互依賴但沒有一方有固定的發動時間；網路載入資料即是客戶端與遠端溝通中最常見的異步處理程序。

RequireJS為解決異步程序，繁生了異步模塊定義( AMD、Asynchronous Module Definition )；而瀏覽器端的RequireJS則是以此方式撰寫。

◎ Browserify
https://bower.io/

● npm (node package manager)

NodeJS為執行JavaScript的環境操作軟體，若於伺服器安裝則可用JavaScript開發後端軟體。
npm則是NodeJS用於安裝node packages的命令列工具，並可用其解決package相依性問題。

○ Browserify 

Browserify可解釋為一套封裝工具，透過Bower先行載入需關聯的JS library，並由require運用於專案內。
然而若沒有適當的關聯，運用於專案內的內容會出現找不到參考的狀況。
因此，藉由Browserify則可將其封裝為單一JS檔案，前端頁面僅須載入此一檔案即可。
※ Bower用於下載並整理JS、CSS，而Browserify則是管理模組關係。

◎ Gulp

Gulp為一個借鑑Unix管道概念的自動化運行器，透過Task指定任務內容，並依序處理需要執行的項目。

◎ CommonJS and Webpack

Webpack 是德國開發者 Tobias Koppers 開發的模組整合工具。它的核心功能如下:

- 可同時整合 CommonJS 和 AMD 模組
- 轉換 JSX, Coffee Script, TypeScript 等
- 分散封裝專案使用的程式碼，使載入頁面時只需載入當頁所需的程式碼以加速載入速度
- 整合樣式表 (css, sass, less 等)
- 處理圖片與字型
- 建置 production-ready 的程式碼 (壓縮)

● 建立Webpack
Demo : Tutorial-07 ReactJS\01.Framework_webpack\WebProject

1. Move to project folder and opem command line

2. type "npm init"
	- 輸入專案參數，並產生package.json檔案

3. type "npm install webpack --save-dev"
	- 載入並安裝webpack相關內容於本專案夾中
	- 若要指定版本，則可改為webpack@X.X.X，例如webpack@1.12.14
	- 若無指定版本，會抓取Node資料庫中最後的版本

4. create webpack.config.js and content
	- Ref : https://fakefish.github.io/react-webpack-cookbook/Getting-started.html

5.  Modify package.json
	- add "scripts": {"build": "webpack"}

6. type "npm run build"
	- 執行編譯並產出封裝後的js檔案
	- 本句是指定build執行，而build則是指定於package.json中的內容

※ 若沒有修改package.json，將無法正確執行編譯動作。
※ 如同多數專案檔案夾相似，Webpack以檔案夾為根目錄結構，亦即單一專案夾建立完成即可複製給相似專案運用；但需注意npm下載的內容會因為檔案夾名稱長度過常導致無法正常刪除、複製。
	- 刪除檔案名稱過長方式：http://demo.tc/post/811
 
○ 建立React webpack
Demo : Tutorial-07 ReactJS\01.Framework_webpack\ReactProject

1. Move to project folder and opem command line

2. type "npm init"
	- 輸入專案參數，並產生package.json檔案

3. type "npm install webpack@1.12.14 webpack-dev-server@1.14.1 react-hot-loader@1.3.0 babel-loader@5.4.0 react@0.13.3 --save-dev"
	- "npm install webpack webpack-dev-server babel-loader babel-preset-es2015 babel-preset-react react react-dom react-hot-loader --save-dev"
	- 安裝webpack需要之工具與函式庫。
	- webpack，Webpack的檔案結構。
	- webpack-dev-server，為一套開發工具，期會透過NodeJS啟動伺服器，便於使用者編譯期間的動態測試。
	- react-hot-loader，與dev-server相似，避免LiveReload時導致React元件的state重設回初始值。
	- react，ReactJS主函式庫
	- react-dom，React-DOM 函式庫
	- babel-loader，JSX語法轉換函式庫
		- http://babeljs.io/docs/plugins/preset-react/
	- babel-preset-react，Babel for React preset
	- babel-preset-es2015，Babel for es2015(ES6+) preset

4. create webpack.config.js and content
	- Ref : https://github.com/babel/babel-loader

5.  Modify package.json
	- add "scripts": {"build": "webpack"}

6. type "npm run build"
	- 執行編譯並產出封裝後的js檔案
	- 本句是指定build執行，而build則是指定於package.json中的內容


---------------------

Reference page :

Javascript模块化编程（三）：require.js的用法
http://www.ruanyifeng.com/blog/2012/11/require_js.html

Using reactjs with requirejs
http://stackoverflow.com/questions/23381561/using-reactjs-with-requirejs

Gulp：任务自动管理工具
http://javascript.ruanyifeng.com/tool/gulp.html

網站前端開發上一些名詞： requireJS, Browserify, AMD, commonJS, npm, Bower
http://yulin-learn-web-dev.logdown.com/posts/306644

WELCOME TO THE WEBPACK DOCUMENTATION!
https://webpack.github.io/docs/

webpack-howto
https://github.com/petehunt/webpack-howto

webpack-step-by-step
https://github.com/abhijeetNmishra/webpack-step-by-step

React Tutorial (with Webpack + ES6): Build a ToDo App with Best Practices
https://www.youtube.com/watch?v=IR6smI_YJDE

如何使用 Webpack 模組整合工具
https://rhadow.github.io/2015/03/23/webpackIntro/

使用 Webpack 建立 React 專案開發環境
https://rhadow.github.io/2015/04/02/webpack-workflow/

