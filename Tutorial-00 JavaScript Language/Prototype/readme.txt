◎ Object.Prototype
Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
other reference :
Function.prototype : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype

Demo：JS-Prototype_1
Demo：JS-Prototype_2
Demo：JS-Prototype_3

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

JavaScript與C不同，其程式的運行並無須編譯，亦即程式將會在運行時將被宣告的Script轉譯為運算元。
其最大問題是何時產生運算元，若運算元是當需要執行時才產生，那物件的構成僅流於文字間，亦即可以動態新增變數、函數。

obj.var = 1;
obj.fun = function() {}

如上所見，即使透過new產生物件，亦可在透過直接指定新增變數、函數。
而這樣結構亦可用解釋new的運作模式，將class函數內容複製入一個實質物件容器。

類別繼承(Inheritance)：

var subClass = function() {
	// Inheritance Parent Class
	class.call(this);
	...
}

類別繼承透過Object.call函數，呼叫指定類別的宣告函數。
亦即當subClass透過new運行時，在函數內容複製時，會先將父類別複製後才複製自身內容。

------------------------------

Object.Prototype運作如下：

1. 宣告subClass
var subClass = function() {}
2. 指定subClass繼承class存於prototype內的變數、函數。
subClass.prototype = Object.create(class.prototype);
3. 指定subClass的建構函數，出非特殊一般指向為subClass宣告本身。
subClass.constructor = subClass;

其結構上，subClass會繼承到class.prototype內所存的變數、函數，並透過subClass宣告函數複製物件內容。

------------------------------

在範例JS-Prototype_3中，測試一下結果

1. Object.call，可以複數宣告，且內容皆會複製於產生物件內。 
2. Object.prototype，不可指向複數內容，最後指向的prototype才會被建立。
3. Prototype內存函數不可使用宣告函數內的私有函數。

若依照物件導，單一繼承向來解釋：

1. Object.call，宣告實作的介面。
2. Object.prototype，宣告繼承的介面與內容；但不可擁有私有變數、函數。