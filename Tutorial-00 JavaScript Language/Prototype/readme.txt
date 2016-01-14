◎ Object.Prototype
Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
other reference :
Function.prototype : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype
JavaScript 語言核心, 隱藏諸多細節的建構式：http://www.codedata.com.tw/javascript/essential-javascript-14-constructor/
JavaScript 語言核心, prototype 特性：http://www.codedata.com.tw/javascript/essential-javascript-15-prototype/
JavaScript 物件導向介紹, https://developer.mozilla.org/zh-TW/docs/JavaScript_%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91%E4%BB%8B%E7%B4%B9

Demo：JS-Prototype_1，基礎Class與Prototype操作
Demo：JS-Prototype_2，Class與Prototype建立可為分開之物件
Demo：JS-Prototype_3，Class與Prototype建立次數
Demo：JS-Prototype_4，Prototype指向為實體物件
Demo：JS-Prototype_5，物件的constructor與prototype來源

宣告類別(Class)：

var class = function() {
	// private variable
	var x = 1;
	// private function
	var fun = function() {}
	// public variable
	this.px = 1;
	// public method
	this.pfun = function() {}
}

產生物件(Object)：

var instance = new class();

使用與設定物件變數與函數：

obj.var = 1;
obj.fun = function() {}

JavaScript屬於弱型態變數型程式，變數指向不須指定型別，物件內容也沒強硬規範定義方式，亦即如上句型，若從未定義過，系統便會直接建立於物件內。
而這樣結構亦可用解釋new的運作模式，透過執行宣告類別函數，產生一個實體物件容器。

類別繼承(Inheritance)：

var subClass = function() {
	// Inheritance Parent Class
	class.call(this);
	...
}

類別繼承透過Object.call函數，呼叫指定類別的宣告函數。
亦即當subClass透過new運行時，先將指定類別的內容產生至當前物件內，其後才產生宣告式定義的內容。

Object.Prototype運作如下：

1. 宣告subClass
var subClass = function() {}
2. 指定subClass的prototype指向物件的實體內容，可為class.prototype或產生新的物件實體。
subClass.prototype = Object.create(class.prototype | new class());
3. 指定subClass的建構函數，出非特殊一般指向為subClass宣告本身。
subClass.constructor = subClass;

其結構上，subClass會繼承到class.prototype內所存的變數、函數，並透過subClass宣告函數產生物件實體。

------------------------------

Constructor、Prototype

在JavaScript透過new產生物件時，會將物件內產生兩個數據，constructor、prototype。

constructor是指物件的類別宣告函數。
prototype是指物件繼承的原型物件。

當JavaScript在尋找某個屬性名稱時，其步驟如下：
1. 在物件實體內確認屬性是否存在，若存在則執行。
2. 若物件實體不存有屬性，至物件的原型內尋找，若存在則執行。
3. 若物件的原型不存有屬性，此屬性不存在。

------------------------------

在範例JS-Prototype_3中，測試一下結果

1. Object.call，可以複數宣告，且內容皆會產生於物件內。 
2. Object.prototype，不可指向複數內容，最後指向的prototype才會被建立；不可指向宣告函數，必須為物件實體。

若依照物件導，單一繼承向來解釋：

1. Object.call，宣告實作的介面。
2. Object.prototype，宣告繼承的介面與內容。