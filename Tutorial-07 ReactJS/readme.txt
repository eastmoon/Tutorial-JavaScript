◎ ReactJS
http://facebook.github.io/react/

◎ 環境

Demo：ReactJS-1-Basics.html

ReactJS在撰寫上有兩種語法形式可使用，使用JSX語法、React.DOM物件操作(非JSX語法)。
這兩類語法差別在於JSX是XML格式將可閱讀與易理解的句型轉成React.DOM，減少設計時的負擔。

※ 相關React與JSX文章參考：
---------------------------
React JSFiddle with JSX
https://jsfiddle.net/reactjs/69z2wepo/

What is JSX
http://www.arthurtoday.com/2012/06/jsx.html

ReactJS與JSX
http://andyyou.logdown.com/posts/178391-reactjs-jsx
---------------------------

然而撰寫上對JSX使用應注意一點，編譯器環境設定：type="text/babel"，並載入babel-core的JavaScript檔案。
React與JSX格式，其使用的編譯器為採用最新版本JavaScript語言規則的Babel編譯器，若然不設定此項，其文件載入或夾住其中的Script將無法正常運行，並警告文法錯誤。

若撰寫上不使用JSX，而採用React.DOM操作，則無需指定編譯器為，在script標籤的預設上，接指定為JavaScript編譯器(text/javascript)執行，若無特殊需求並無須跟換。

※ JavaScript版本與Babel編譯器文章參考：
---------------------------
Working with ReactJS in WebStorm: Coding Assistance
https://blog.jetbrains.com/webstorm/2015/10/working-with-reactjs-in-webstorm-coding-assistance/

Babel is a JavaScript compiler.
https://babeljs.io/

JavaScript 1.7
c
http://www.cnblogs.com/enix/archive/2011/12/13/2286303.html

HTML Script tag: type or language
http://stackoverflow.com/questions/2267476/html-script-tag-type-or-language-or-omit-both
---------------------------

個人解釋：
從文件上確認的內容，雖Babel是屬於JavaScript轉譯，但對於是否所有瀏覽器皆能適用抱持非肯定，以個人當前環境並無法確定(主要針對手持裝置)，從文件上也多無說明與確認之參考；但若非移植到特定環境 ( React Native )，而是選擇公開環境 ( Phonegap )，JSX撰寫方式並不適合使用，其具備的風險是存在的。

※ 相關文章中有提及不同方式來設定JSX轉譯環境與React執行注意要點。
http://andyyou.logdown.com/posts/177982-reactjs-getting-started

◎ 概觀
http://i.imgur.com/Q4kFTzL.png

React 語法
http://jamestw.logdown.com/posts/248317-react-one-step-at-a-time

ReactDOM.render and the Top Level React API
https://facebook.github.io/react/blog/2015/10/01/react-render-and-top-level-api.html

React library, Top-Level API
https://facebook.github.io/react/docs/top-level-api.html

Interactivity and Dynamic UIs
https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html

Component Specs and Lifecycle
https://facebook.github.io/react/docs/component-specs.html
---------------------

Reference page :
