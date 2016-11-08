◎ EmberJS
http://emberjs.com/

◎ 核心功能

§ MVC Framework

EmberJS是以JavaScript撰寫的MVC (Model View Controller)架構，與此架構相似的AngularJS。

在EmberJS定義上，使用者必須先建立Application物件，在透過Application物件建立以下類別：
- Model：
	模型，儲存外部或互動相關的資訊。
- View：
	顯示控制元件，EmberJS套件完成的顯示元件，此元件可設置互動與綁訂控制器，以達到與MVC架構溝通。
- Controller：
	控制器，管理模型並傳遞資料至模板或顯示控制元件。

§ Template

EmberJS在顯示端使用的模板為Handlebars，並以此串接傳統HTML與View。

Handlebars在基本的HTML上，加上不同的輔助工具 (helper)，大致分為：
- Expressions
	表達式：{{property}} 表示模型物件的屬性功能類：如 {{if}} {{each}} {{action}} 等
- Outlets
	插座：{{outlet}} 預留位置，用作轉換不同模板
- Views
	視圖：{{view name}}  插入視圖至模板中

§ Router - 路由器

頁面上的互動，或稱為狀態的管理就由路由器來負責。
簡單來說是跟據網址 (URL) 建立模型(Model)，顯示相關的模板。

◎ Webpack 封裝

EmberJS相關的文件本身並不無運用於Webpack專案，亦無正式的方言轉譯(Loader)，在npm上，雖然有Ember-webpack-loader，但實際使用時仍要注意：

0. 範例使用為ES6語言；編譯過程引用時，會導致連結錯誤，在執行階段無法正確連上目標。
1. 編譯時，loader對ember與jquery的連接會錯誤，需額外使用檔案提供行為與正確的檔案位置。
2. 產出後的JS在顯示元件的對接需有額外處理 ( ? 待確認，確定正常方式會告知無法編譯的狀況

---------------------

Reference page :

[Ember.js] 為何用、如何嵌入和寫第一支Hello World
http://ithelp.ithome.com.tw/articles/10157381

[心得] ember.js
https://www.ptt.cc/bbs/Ajax/M.1366496798.A.155.html

点燃圣火！ Ember.js 的初学者指南
http://www.adobe.com/cn/devnet/html5/articles/flame-on-a-beginners-guide-to-emberjs.html?sdid=XKMMHJ2P
http://www.adobe.com/devnet/archive/html5/articles/flame-on-a-beginners-guide-to-emberjs.html

Building an Ember.js Application
https://www.youtube.com/watch?v=1QHrlFlaXdI

A Guide to Building Your First Ember.js App
https://www.toptal.com/javascript/a-step-by-step-guide-to-building-your-first-ember-js-app

Handlebars
http://handlebarsjs.com/

Using ember with webpack
https://medium.com/@tulios/using-ember-with-webpack-e03290b61dec#.6mjkknxmc

tulios/ember-webpack-example
https://github.com/tulios/ember-webpack-example
