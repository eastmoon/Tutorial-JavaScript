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

---------------------

Reference page :

Javascript模块化编程（三）：require.js的用法
http://www.ruanyifeng.com/blog/2012/11/require_js.html

Using reactjs with requirejs
http://stackoverflow.com/questions/23381561/using-reactjs-with-requirejs

