◎ ReactJS
http://facebook.github.io/react/

◎ Flux
https://www.npmjs.com/package/flux

---------------------
fluxchat by Bill Fisher
https://speakerdeck.com/fisherwebdev/fluxchat

Flux 解釋
https://hulufei.gitbooks.io/react-tutorial/content/flux.html

Flux 筆記
http://andyyou.logdown.com/posts/241839-flux-notes
---------------------

◎ Redux
http://redux.js.org/docs/api/
https://www.npmjs.com/package/redux

Redux 是依據 Flux 的單向資料流，並簡化設計的資料流動管理事件廣播器。
Redux 共有三個主要物件Store、Reducer、Action。
	- Store，事件廣播管理器，透過subscribe增加事件監聽函數、透過dispatch發佈事件。
	- Reducer，事件變數處理函數，依據傳遞物件調整Store內的狀態參數。
	- Action，事件傳遞物件。

基本操作：
	1. 建立Reducer。
	2. 建立Store，並設定對應的Reducer，以及初始狀態參數。 
	3. 設定偵聽函數，Store.subscribe。
	4. 發佈事件，Store.dispatch(Action)
	5. Reducer接收狀態變數(State)、傳遞物件(Action)，並依據接收內容修改狀態變數
	6. Store呼叫所有subscribe的監聽函數。
	
※ Redux設計有說明，偵聽Store的函數，需透過Store.getState來取得當前狀態；不過，Store並不會當成物件傳遞給偵聽函數，在React範例中可以見到component.setStore等函數，以此儲存跨元件的事件處理。
- 將Redux設計過程封裝為Subject，並且定義一個靜態變數已取回Subject。
- 考量ReactJS的Component設計，擁有props和states兩個參數物件，因此Redux設計是用於直接用Store.state與Component.State對接，或是說Redux.State等於Component.State。

---------------------
Redux 的基础概念
https://hulufei.gitbooks.io/react-tutorial/content/redux-basic.html

0 to 1 : Getting started with Redux
http://www.jchapron.com/2015/08/14/getting-started-with-redux/

Angular 2 — Introduction to Redux
https://medium.com/google-developer-experts/angular-2-introduction-to-redux-1cf18af27e6e#.opjxqsr5w

Usage with React
http://redux.js.org/docs/basics/UsageWithReact.html
※ <Provider> to magically make the store available to all container components in the application without passing it explicitly. You only need to use it once when you render the root component.
---------------------

◎ Problem

===========
§ Each child in an array should have a unique "key" prop.
http://stackoverflow.com/questions/28329382/

使用矩陣產出的子元件，應設置key屬性；若單純矩陣，可以index來設置。
若設置相同的key，在產生元件時，React會發出錯誤訊息並不產生元件。

Lists and Keys
https://facebook.github.io/react/docs/lists-and-keys.html
===========
§ Adjacent JSX elements must be wrapped in an enclosing tag
http://stackoverflow.com/questions/31284169/

在JSX中，若回傳時不可有兩個連續的Tag並列同層，此時應以外層Tag包覆此兩個Tag。
===========


---------------------

Layout ?

WebAPI process
使用個模組的內部工具或ajax。

AngularJS 取代 Model ?

React vs Angular 2: 战争继续
http://jixianqianduan.com/article-translation/2016/04/07/react-vs-angular2-fight-rages-on.html

Angular vs react
比較性上，兩者的功能與涵蓋範圍太過相似。
但angular先天使用singleton方式存取資訊，其在資料管理的優勢多於react。
但react在顯示組合的便利與可讀性優於angular。

JavaScript singleton
http://www.dofactory.com/javascript/singleton-design-pattern

---------------------

Reference page :

從零開始學 ReactJS：給初學者的 React 入門教學書
https://www.gitbook.com/book/kdchang/react101/details

使用 Webpack 建立 React 專案開發環境
https://rhadow.github.io/2015/04/02/webpack-workflow/

React JS Gitbook
https://fakefish.github.io/react-webpack-cookbook/index.html

React入门教程
https://www.gitbook.com/book/hulufei/react-tutorial/details

Singleton Classes In Es6
http://amanvirk.me/singleton-classes-in-es6/

Destructuring and parameter handling in ECMAScript 6
http://www.2ality.com/2015/01/es6-destructuring.html


