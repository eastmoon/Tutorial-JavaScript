JavaScript Framework - AngularJS
https://angularjs.org/

Ref：Learn Angular, http://www.learn-angular.org/#!/lessons/the-essentials
Ref：AngularJS Document, https://docs.angularjs.org/api/ng
Ref：AngularJS Tutorial for Demo, http://www.tutorialspoint.com/angularjs/index.htm
Ref：AngularJS 開發實戰：重要的開發觀念與經驗分享, http://www.slideshare.net/WillHuangTW/angular-js-coscup2013?related=1
Ref：AngularJS 開發實戰：解析 angular-seed 專案架構與內容, http://www.slideshare.net/WillHuangTW/angularjs-angularseed

AngularJS使用MVC架構，其中核心三大元件為
(1. Template ( View )
樣板系統，利用此系統，將靜態文檔(Static DOM)的HTML與動態文檔(Dynamic DOM)的Template整合為可受架構控制的頁面。
(2. Scope ( Model )
Angular核心，用於管理、呈現資料、反應介面事件，透過Scope整合Template與Controller的溝通。
(3. Controller
事件系統，經過Scope登記Controller，並建構整個應用程式 ( Application，單一<HTML></HTML>夾住的頁面 )的運作邏輯。

◎ HTML Compiler
https://docs.angularjs.org/guide/compiler

◎ Angular Expressions
https://docs.angularjs.org/guide/expression
Demo：AngularJS-1_Expressions.html

Angular運算式(表示式)特徵：
- Contextl：JavaScript運算式在全域運算著，Angular運算式在Scope內運算。
- Forgiving：型態檢查寬鬆，在JavaScript當計算內容有undefined屬性會傳出錯誤，在Angular執行則允許undefined與null列入運算。
- No Control Flow Statements：不可於運算式內執行條件式、迴圈、例外式。
- No Function Declarations：不可宣告函數，即使是在初始化指令(Directive)。
- No RegExp Creation With Literal Notation：不可執行正規表達式。
- No Comma And Void Operators：不可使用或指定Void(無形態)。
- Filters：在其顯示前，可對運算式的資料格式使用過濾器。

◎ Scopes
https://docs.angularjs.org/guide/scope
Demo：AngularJS-1_Scopes.html

『Scope is the glue between application controller and the view. During the template linking phase the directives set up $watch expressions on the scope. The $watch allows the directives to be notified of property changes, which allows the directive to render the updated value to the DOM.』

『The normal flow of a browser receiving an event is that it executes a corresponding JavaScript callback. Once the callback completes the browser re-renders the DOM and returns to waiting for more events.』

Scope運作於應用程式Controller與View之間，在樣板連結過程，指令(Directives)會對Scope設定$watch運算式，而$watch會對指令遞送屬性變更，使指令可以繪製更新資訊於對應的DOM ( HTML element )；在一般流程中，瀏覽器接收到事件，會執行相應的JavaScript函數，當函數完成動作，瀏覽器會重繪DOM元件並繼續等待其他事件。

Controller與Scopes為互相作用的關係：
(1. Controller使用Scopes來設定方式(行為)到Templates
(2. Controller定義的方式(行為)可調整模型(Scopes的屬性)
(3. Controller可註冊監視方式在模型上，這些監視方式運行於控制器方式之後。

當DIV元件設定對應Controller時，兩者間便建立一個Scope實體來傳遞訊息，不論是對應於Angular運算式的變數、對應指令(Directive)的行為、列舉資料，皆是透過Scope來對應。

◎ Custom Directives
https://docs.angularjs.org/guide/directive
Demo：AngularJS-1_Directives.html
Ref：Directives document, https://docs.angularjs.org/api/ng#directive

『At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children.

Angular comes with a set of these directives built-in, like ngBind, ngModel, and ngClass. Much like you create controllers and services, you can create your own directives for Angular to use. When Angular bootstraps your application, the HTML compiler traverses the DOM matching directives against the DOM elements.』

指令(Directive)是標記在DOM元件上(如屬性、元件名、註記、樣式物件)，這些標記會告訴AngularJS HTML編譯器($compile)去附加特殊行為到DOM元件上(例如增加聆聽事件)，或其DOM元件下的子元件；Angular已完成諸如ngBind、ngModel、ngClass等指令，但就如同你可以建立Controller或Services一樣，亦可建立指令；當Angular啟動應用程式，HTML編譯器便會將對應的DOM元件匹配起來。

指令(Directive)可以看成是Angular為HTML標籤擴增的功能，或用於連結JavaScript動態程式的標籤；其優點是獨有的功能性和與模組(moduler)、控制器(controller)等溝通的便利性，但其缺點亦在於此，觀念上，只要使用Angular的標籤，其右子的內容即為JavaScript語言，但要注意的是，對應標籤需使用的是變數、物件、陣列，送入資訊不同會導致其編譯錯誤。

另外，指令數量繁多，但相對於HTML既存標籤，也並非所有指令皆需理解，這部分需視題目而學習與閱讀。

◎ Module
https://docs.angularjs.org/guide/module#module-loading-dependencies

◎ Angular injector subsystem
Demo：AngularJS-1_Injector.html
Ref：AngularJS 入門教學 - $inject, http://abgne.tw/angularjs/angularjs-getting-stared/inject.html
Ref：Dependency Injection, https://docs.angularjs.org/guide/di

言簡意該的說Dependency Injection：
『設立介面，由不同的物件完成介面的實體，並由需要的當下指派。』

而在Angular的Inject，是指替代傳遞參數的方式；可以指定的參數物件，可以為系統物件($scope, $window etc.)或自定物件(module.factory設定的物件)。

格式：["Object", function( Variable ) {}]
當此設定後Variable實際指向的會是前述的Object。

例如：["$scope", function( a_scope ) {}]
則a_scope實際等於$scope物件。

解釋上，這樣的系統如何對應DI設計，在於透過對應，可將Object各自分開完成設定，在執行時依需求指派對應的物件運行。
且指派物件是以字串設定，表示字串來原可為外部資訊，亦即透過網址或其他來原，使單頁運行於的Object會因外部資訊變動，讓物件間互不依存。

---------------------

Dependency Injection 設計觀念解讀：
http://huan-lin.blogspot.com/2011/10/dependency-injection-1.html

對於繼承(抽象物件)與實做(介面物件)，曾經被問過這樣一個問題。

提問者：『若專案的介面太多，你會怎麼處理？』
在下：『正常情況下，介面不應該過多，若當真過多，則應回到架構層級，整合併刪除多餘介面。』

就個人認知『介面』是『抽象』規範化的結果，這語言結構源自『多重繼承』；但這結構會導致些設計問題，諸如重複且相似的繼承行為，因此現行語言並不支援，也因此改為『單一繼承，多重實做』的架構。

就個人實務經驗，『介面』具有以下特性：
1. 演算抽離物件，使演算與物件保持相依而非耦合。
2. 跨繼承樹，允許導入不同物件群於單一演算。

由於特性1就算不使用介面，在無介面的C++也能以抽象物件保持物件群的獨立性即可。
但是特性2就屬於介面獨有特色，其優點在於無需改動開發者建立的物件群與繼承樹，亦能使其物件導入架構的演算系統內；然而，若需要考慮跨繼承樹的演算用途，就必須依據需求反覆確認其現有介面的適切性，諸如參數、回傳、使用時機等，若要正確設計，一定程度並非從需求面著手，而是從多樣需求的相似性著手，類似策略模式的設計思考。

亦即介面的設計必要性、適當性，是源自架構的多需求抽象化，而非單次題目的需求修改，因為若每次需求來就改動介面，實際上並無法使介面適切的應對所有狀況，更容易發生今非昔比的狀況而修改介面繼承樹。

『以下是幾個可能需要使用或了解 DI 技術的場合：
- 如果你正在設計一套框架（framework）或可重複使用的類別庫，DI 會是很好用的技術。
- 如果你正在開發應用程式，需要在執行時其動態載入、動態切換某些元件，DI 也能派上用場。
- 希望自已的程式碼在將來需求變動時，能夠更容易替換掉其中一部份不穩定的元件（例如第三方元件，此時可能搭配 Adapter 模式使用）。
- 你正在接手維護一個應用程式，想要在重構（refactor）程式碼的時候降低對某些元件的依賴，方便測試以及讓程式碼更好維護。』

如同文中所題，介面並非用於單一特定題目實務設計，而是基於長期系統考量的設計；但並非無需設計，而是設計時沒考慮充分，則會出現沒必要的設計風險。

Reference：
http://huan-lin.blogspot.com/2011/10/dependency-injection-2.html

---------------------

簡易個人解釋『繼承』(抽象物件)與『實做』(介面物件)：

『繼承』者就如同貴族世襲的教育制度，教導個人的品性、行為、體能等。
『實做』者就如同公司對職務提出的操作需求，指定一人於工作上的態度、方式等。

在傳統(C++等中階語言)上『繼承』與『實做』是相同，貴族本身規定的教育制度亦等同於貴族這職業的需求，因此貴族子弟受到的貴族教育來說，只要規範必要的教育方向，這即是『繼承抽象化』；亦如同數學這門學科擁有無數相異研究，但高等教育只需學習運算、代數等基本數學相同。

然而，對於公司的工作來說，單一職務的需求與個人的教育內容並不會完全相同，亦可解釋為產學不契合，因此在進入職場時必會存在磨合期，這即是『介面實做』，而個人不適應工作，即是物件實做介面的難度過大，反之則是繼承以存有介面，前述的貴族職務與教育。

也因為『實做』是指公司的職務的需求，因此只要能通過磨合，任何『繼承』者皆能擔任其職務，這即是『介面可跨繼承樹』。

「我曾在這樣的十字路口：努力學習各種模式，希望成為一個更好的軟體設計師；但現在，為了真正成為更優秀的軟體設計師，我必須降低對模式的依賴。」
—— Joshua Kerievsky. 《Refactoring to Patterns》 作者
	