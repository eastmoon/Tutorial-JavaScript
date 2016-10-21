◎ ReactJS Tutorial - Thinking in React, http://facebook.github.io/react/docs/thinking-in-react.html

◎ CommonJS

『We recommend using React with a CommonJS module system like browserify or webpack.』
http://browserify.org/
https://webpack.github.io/

CommonJS是伺服器端的模組化規範，NodeJS則採用此一規範。
在其規範上，單一文檔即是單一模組，當文檔執行前若定義其需載入的模組，則會完整讀取後才執行模組。
然而，此項設計考慮在伺服器端(或稱執行端)需執行的檔案多為本地資料，因此完全載入後運行並不會產生任何延遲與系統負擔；若單以載入執行這點，類同PHP的include運作，同為腳本系統的物件分割概念。
可用於網頁或前端，載入模組越多、越大，越容易導致載入延遲或使得系統崩潰，亦即CommonJS的設計概念運用於此並不恰當，因此繁生出下列方式：

● 異步模塊定義，AMD ( Asynchromous Module Definition )

以CommonJS基礎為概念，RequireJS提出的AMD則是採用『異步加載模組』的方式運行；運作與撰寫類似AngularJS的Dependency Injection (DI)。
透過定義文檔的相依性，並於執行前將模組載入，且確保模組載入完成後才逐步執行後方的動作；相似的CMD、UMD則基於不同的載入時機，運作平台決定模組加載狀態。

○ 封裝，browserify & webpack

ReactJS官方建議採用CommonJS模組系統，然而此一模組化概念近似物件導向為主的專案結構，與傳統網頁的程序式檔案結構概念相異；網頁早期的JS結構，近似單一功能的演算聚合檔，多個功能則分散不同檔案內，因此若同時需要多個功能則須載入多個JS檔案。
若以物件導向觀念來看，運用CommonJS的結構較能清出切割功能與物件的關係，因此若採用此方式，則需使用上述兩個工具將JS檔案封裝為單一檔案，在一次性載入。
※ 直接撰寫ReactJS，並於一檔案內宣告CreateClass，另一檔案內執行Render命令繪製，會出現類別未宣告的錯誤。

個人解釋：
ReactJS的官方建議使用CommonJS在網頁開發上並不直覺，且封裝執行過程實質上違背網頁直譯的操作概念，而是相似編譯的過程。
然而，ReactJS本身的設計為物件導向為概念，Webpack亦有相同用處，若以此考量，則保持CommonJS的編寫過程則會是一種良性習慣。

※ 相關文章參考：
---------------------------
Writing React components as CommonJS modules
http://simonsmith.io/writing-react-components-as-commonjs-modules/

RequireJS
http://requirejs.org/

AMD, UMD, CommonJS
http://fireqqtw.logdown.com/posts/255789-amd-umd-commonjs

CommonJS AMD CMD UMD
http://my.oschina.net/felumanman/blog/263330

CommonJS 和 RequireJS 有什麼不同 ?
http://www.arthurtoday.com/2012/01/commonjs-requirejs.html
---------------------------

◎ Class

在ReactJS的官方文件中，定義類別的方式為

var Hello = React.createClass({ ... });

這形式的寫法符合JavaScript基本的類別定義方式，但在SE6 ( ECMAScript 2015 ) 中，對於類別定義有了更新的寫法。

class Hello { ... }

而引用至ReactJS內則是

class Hello extends React.Component { ... }

這寫法在閱讀上更為接近物件導向常見的寫法，使類別、函數、靜態物件這些定義上區分的更為明確清楚。
實際運用上，宣告class的類別也確實可以由ReactDOM.render繪製於頁面。
然而，在互動撰寫時，則會出現this不存在，無法取回資訊等問題；雖於Babel的官方文件內有其他描述與說明，但若非ReactJS官方文件修改，不然其不確定性仍有著一定程度的撰寫風險。
若對風險無法保證，則使用ES5的方式撰寫，或部分使用ES6已習慣新的撰寫方式。

※ 相關文章參考：
---------------------------
React on ES6+
http://babeljs.io/blog/2015/06/07/react-on-es6-plus/
http://www.tamas.io/react-with-es6/

MDN Classes
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes

Managing the private data of ES6 classes
http://www.2ality.com/2016/01/private-data-classes.html

學習 ECMAScript 6 - var, let 和 const
http://rocksaying.tw/archives/2015/ES6_var,let,const.html

React.createClass versus extends React.Component
https://toddmotto.com/react-create-class-versus-component/
---------------------------

◎ Event system
※ Demo : 20.Demo_application_search_data

ReactJS的事件管理變數、傳遞由上層管理單元分配，各元件應對變數的存取與反應處理。

1. 初始流程
FilterableBox ──〉 SearchBar  
	      └─〉 ProductTable

初始流程，在FilterableBox設立狀態變數(State variable)、回應函數(Callback function)，並將內容以Props方式傳給子元件。

2. 事件流程
SearchBar ─〉 FilterableBox ─〉 ProductTable

當事件發生，如OnClick發生在SearchBar；SearchBar則透過JS事件觸發對應函數，在由this.refs取得變更內容，傳入回應函數並觸發setState函數。
其後經ReactJS內部機制，將更新內容傳遞給ProductTable並重繪其元件。

3. 取回元件輸入變數

不同於儲存屬性值得Props，儲存元件狀態的State，Refs用於儲存該元件內的子元件；系統則可透過存取子元件來取得該元件的屬性，並將其數值回傳。

※ 相關文章參考：
---------------------------
Refs to Components
https://facebook.github.io/react/docs/more-about-refs.html

Props、State、Refs 與表單處理
https://github.com/kdchang/reactjs101/blob/master/Ch04/props-state-introduction.md

React and ES6 - Part 3, Binding to methods of React class (ES7 included)
http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
---------------------------

◎ JavaScript language, forEach
Reference : https://jsperf.com/bindvsforeachwith2ndarg/2