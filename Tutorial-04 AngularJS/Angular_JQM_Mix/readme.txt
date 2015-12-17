AngularJS、jQuery Mobile混合使用：

兩個JSFramework同時會控制CSS與Event，依據其優先順序會導致某一方的系統被刪除，如ngRepear會蓋掉JQM checkbox event，導致CSS無法修改。
對此，依據不同事件與情況，因視需求修改結構或觸發程序。

◎ JS Framework 載入順序，如下所列：
1. jQuery
2. jQuery Mobile
3. AngularJS

https://groups.google.com/forum/#!msg/angular/6A3Skwm59Z4/oJ0WhKGAFK0J

依多數文章所述，jQuery Mobile、AngularJS是以jqLite為底操作HTML DOM，因此若要取得完整的jQuery則需先載入jQuery。

◎ 當AngularJS使用ngInclude載入頁面時，無法觸發jQueryMobile的樣式運作；下文即是說明如何讓其正常運作。

AngularJS + JQueryMobile and Dynamic Loading of pages
http://ramkulkarni.com/blog/angularjs-jquerymobile-and-dynamic-loading-of-pages/

◎ 動態編譯文件
Demo：Dynamic-Compile

問題相似前題，前題是以include載入含有jQuery Mobile樣式的頁面而無法正常顯示，本題則是以jQuery Mobile連結與呈現動畫為主，載入具有AngularJS運算式頁面後無法正常顯示。

如範例所示，若未設置動態編譯，在點擊載入外部頁面後，其外部頁面內的AngularJS不會執行亦不會編譯。
且jQuery Mobile的連結僅載入認定的Page內容，即使設置Script也不會執行。
雖可利用Bootstrap，但此動作使指將文件與對應的Module連結，且Module會被重複設置，階層關係亦會導致異常。

對此，使用$compile物件，對載入內容頁面進行編譯，其過程如下：
1. 設定事件"pagebeforeshow"，並等待事件發生。
2. 觸發事件，自全域文件取得相依管理物件injector，並從injector內取得編譯服務$compile
3. 編譯載入的內容頁面；注意，本範例僅針對載入的第一頁面進行編譯。
4. 利用rootScope登記其scope，將內容加入頁面。
5. 觸發scope的$digest命令，讓頁面事件可以更新。

※ 不同的觸發事件，會決定動態編譯發生的時間點，若使用pagechange，則會等到顯示完畢才編譯；若使用pageload則會出現，編譯不完整，相似資料尚未掛載於頁面的狀況。

◎ Button 點擊操控
Demo：Button-1

利用點擊將按鈕標示為關注(Focus)。
1. 訊息傳遞與動態產出按鈕使用AngularJS構築的資料模組；藉由Singletion結構，亦可用於頁面間傳輸資料。
2. 點擊後處裡，改以jQuery selector運作式取得指定元素(HTML Element)，在對其更換樣式類別。

◎ Radio Checked 顯示異常
Demo：Button-2

如範例所示：
1. Group 1-JQM，則因為只保留jQuery Mobile樣式修改而正常，可選項產生卻無法透過AngularJS來達到動態控制。
2. Group 1-AngularJS，雖然透過AngularJS執行的選擇有正常運作，可是屬於jQuery Mobile的樣式修改卻異常。
3. Group 2，利用AngularJS機制產生選項並接收訊息，於點擊時，利用jQuery命令，自主切換jQuery Mobile設定樣式。

此問題由來，透過觀察瀏覽器內容，可以發現由AngularJS產出的選項，並沒有jQuery Mobile的對應事件；因此推論是由於JavaScript事件系統導致異常，若為DOM Level2的偵聽系統雙架構會同時聽取事件發動，而是DOM Level1的指定事件則會保留最後一個指向目標。

◎ Default Select 顯示異常
Demo：Button-3

此問題延伸於前範例Button-2，若將jQuery Mobile函數庫移除，預設選項便會出來。
問題同前，是在於CSS樣式重疊導致異常；但若於標籤設置checked屬性則會正常顯示，可試想為checked屬性存在對於預設配置動作會有分歧。

針對問題，採行下列處理方式：
1. 使用jQuery事件，以此觸發修改內容
$("#id").on() etc.
2. 使用特定AngularJS屬性標籤，以此觸發修改內容
ng-if etc.
3. 自建repeat-event屬性，以此觸發修改內容
http://stackoverflow.com/questions/13471129/ng-repeat-finish-event

但上述問題皆發生事件觸發後，jQuery selector無法抓取Element，亦即事件發生當下，AngularJS編譯處裡尚未將完成的內容填寫於DOM內。
這部分測試是透過行為函數觸發後，將selector結果log出來，並藉此確認。

最終解決方案如範例，使用AngularJS對數值修改後，行為函數會觸發並將顯示內容改變的特性，以此設計函數並修改樣式。

---------------------

Reference page :

jQuery Mobile混backbone
http://coenraets.org/blog/2012/03/using-backbone-js-with-jquery-mobile/