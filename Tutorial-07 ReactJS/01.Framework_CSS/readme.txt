◎ CSS
http://www.w3schools.com/css/default.asp

CSS，Cascading Style Sheets

HTML文件本身僅規範了文件資料的樹狀構成，對於應該以何種方式呈現，諸如字形、字色、字距、外框邊寬設定等，僅有預設的設定。
然而，使用HTML在設計時，為求美觀符合設計美感，舉凡排版、調色、動畫皆會使用CSS來運作。

● 傳統寫法

典型的CSS寫法，是將CSS規範制定在一個文檔內，依據介面需求編寫需要的設定。
由於CSS規範是全域(整份文件)皆能收到，因此以巢式定義法(e.g., .main .sidebar .button)，設定整份文檔的樣式，可謂最傳統的編寫方式。
然而，一旦專案逐漸龐雜，其定義文件就會越加複雜且難以維護。

○ 模組化

CSS規範是全域(整份文件)，因此當專案複雜時，特定頁面應只需要載入需要的設定文檔。
因此如何切割文檔並適當模組、命名，除了可以有效的管理專案，亦能做到需要才載入文檔的運作模式，以提高文件載入速度。

常用於CSS的模組化法則：
	- OOCSS，Object-Oriented CSS
		- Ref : http://oocss.org/
	- SMACSS，Scalable and Modular Approach for CSS
		- Ref : https://smacss.com/
	- BEM，Block Element Modifier
		- Ref : https://en.bem.info/methodology/


◎ CSS in React ( DOM Elements )
https://facebook.github.io/react/docs/dom-elements.html

◎ jsxstyle

◎ CSS Module

● React CSS Module

§ Package install

npm install style-loader css-loader react-css-modules --save-dev

style-loader and css-loader process your CSS files. css-loader is the loader that actual makes CSS modules work。
style-loader與css-loader用於處理CSS檔案；其中css-loaderu解析句型，而style-loader將解析結果放入js檔。
css-loader亦包含Webpack loader運作程序，讓CSS Module可以確實運作。
react-css-modules實做CSS Module對應程序，讓React的JSX可以正常運作CSS Module。

§ 


---------------------

Reference page :

React 碎碎念: 我只是想寫個 CSS
http://pymaster.logdown.com/post/694666

Styling React
http://survivejs.com/react/advanced-techniques/styling-react/

Styling in React
https://www.kirupa.com/react/styling_in_react.htm

谈谈 CSS Modules
https://boke.io/tan-tan-css-modules/

CSS Modules
https://github.com/css-modules/css-modules

CSS Modules Welcome to the Future
https://glenmaddern.com/articles/css-modules

CSS Modules  –  Solving the Challenges of CSS at Scale
http://www.universalmind.com/blog/css-modules%E2%80%8A-%E2%80%8Asolving-the-challenges-of-css-at-scale/

React CSS Modules
https://github.com/gajus/react-css-modules
https://www.npmjs.com/package/react-css-modules

Modularise CSS the React way
https://medium.com/@jviereck/modularise-css-the-react-way-1e817b317b04#.5c7p223p0

教學 | CSS 網頁互動的好幫手 - hover的應用
http://weilife.pixnet.net/blog/post/321563384
