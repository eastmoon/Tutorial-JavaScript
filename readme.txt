Training scheme
1. variable
2. statement 
	- http://en.wikipedia.org/wiki/Statement_%28computer_science%29
3. function 
4. class
5. position
6. timeline
7. animate

=========================

Tutorial list

01：
	- Basic program architecture.
	- Single application entry
		- include extend JavaScript file.
		- start the main JavaScript file, when include finish.

02：
	- Variable structure.
	- Statement structure.
	- Function structure.

03：
	- JQuery use to update HTML, insert HTML, change attribute.
	- JQuery selectors to choose class or id.
	- JQuery event handler.
	- RWD ( Responsive Web Design ).

04：
	- AngularJS

05：
	- JQuery Mobile

06：
	- WebGL

X：
	- One Page Scroll
	- ref : http://www.smashingmagazine.com/2014/08/25/how-i-built-the-one-page-scroll-plugin/

---------------------

JavaScript Framework

10 Best JavaScript Frameworks and Libraries of 2015
http://beebom.com/2015/04/best-javascript-frameworks-and-libraries

1. JQuery
https://jquery.com/

1-1. JQuery Mobile
http://view.jquerymobile.com/master/demos/

JQuery Mobile是使用者介面框架，核心基底為JQuery，並應用於手機、平板、閱讀器、筆電等平台。
考量需見至於不同平台，此框架設計遵循漸進增強(RE、progressive enhancement)與響應式設計(RWD、Responsive Web Design)原則。

整體而論，JQuery設計著重樣式控制，其中的HTML Tag、Theme style、Transitions、RWD Component等，其中雖不乏有JS控制，但運用重點仍在於CSS控制與版面對頁面變動時的反應。

詳細說明參考Tutorial-05/readme.txt

2. ExtJS
https://www.sencha.com/products/extjs/#overview

3. AngularJS
https://angularjs.org/

AngularJS使用MVC架構，其中核心三大元件為
(1. Template ( View )
樣板系統，利用此系統，將靜態文檔(Static DOM)的HTML與動態文檔(Dynamic DOM)的Template整合為可受架構控制的頁面。
(2. Scope ( Model )
Angular核心，用於管理、呈現資料、反應介面事件，透過Scope整合Template與Controller的溝通。
(3. Controller
事件系統，經過Scope登記Controller，並建構整個應用程式 ( Application，單一<HTML></HTML>夾住的頁面 )的運作邏輯。

整體而論，AngularJS設計著重資料與顯示元件的動態產生、訊息溝通、事件處裡等，其中雖提供CSS樣式、動畫，但運用重點仍會以DI構成的唯一化(Singleton)數據結構，建立頁間溝通與動態元件管理。
其次，雖然AngularJS擁有優良的訊息架構，但其結構的生產和管理並不適合用來處理資料模型，因資料模型輸出需要唯一化的接口(Singleton Facade)雖可由Angular代理，但其資料本體仍需編寫自訂的動態架構，應使用JavaScript基本結構完成。

詳細說明參考Tutorial-04/readme.txt

4. BackboneJS
http://backbonejs.org/

5. EmberJS
http://emberjs.com/

6. WebGL, ThreeJS
Graphics programming for the web 
@Xavier_Ho
http://filonik.github.io/bdva2015/slides/webgl/

詳細說明參考Tutorial-06/readme.txt

=========================
Web tools

JSFIDDLE
http://jsfiddle.net/

GoJS
Interactive Diagrams for JavaScript and HTML
http://gojs.net/latest/index.html?gclid=CLCzp_Wsv8kCFUYAvAod-U4LmA

CDN JavaScript
http://cdnjs.com/libraries/

jQuery-noty
https://cdnjs.com/libraries/jquery-noty

=========================
Reference doc

前端工程師面試問題集
https://gist.github.com/hanksudo/5873678

陳鍾誠 / 課程 / JavaScript 第一門課
http://ccc.nqu.edu.tw/wd.html#js1:home
