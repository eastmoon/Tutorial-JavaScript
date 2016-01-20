◎ ReactJS
http://facebook.github.io/react/

◎ 環境

Demo：ReactJS-1-Basics.html

ReactJS在撰寫上有兩種語法形式可使用，使用JSX語法、React.DOM物件操作(純JavaScript，Plain JS)。
這兩類語法差別在於JSX是XML格式將可閱讀與易理解的句型轉成React.DOM，減少設計時的負擔。

※ 相關React與JSX文章參考：
---------------------------
React JSFiddle with JSX
https://jsfiddle.net/reactjs/69z2wepo/

What is JSX
http://www.arthurtoday.com/2012/06/jsx.html

ReactJS與JSX
http://andyyou.logdown.com/posts/178391-reactjs-jsx

JSX in Depth
https://facebook.github.io/react/docs/jsx-in-depth.html
---------------------------

然而撰寫上對JSX使用應注意一點，編譯器環境設定：type="text/babel"，並載入babel-core的JavaScript檔案。
React與JSX格式，其使用的編譯器為採用最新版本JavaScript語言規則的Babel編譯器，若然不設定此項，其文件載入或夾住其中的Script將無法正常運行，並警告文法錯誤。

若撰寫上不使用JSX，而採用React.DOM操作，則無需指定編譯器型態，在script標籤的預設上，皆指定為JavaScript編譯器(text/javascript)執行，若無特殊需求並無須跟換。

※ JavaScript版本與Babel編譯器文章參考：
---------------------------
Working with ReactJS in WebStorm: Coding Assistance
https://blog.jetbrains.com/webstorm/2015/10/working-with-reactjs-in-webstorm-coding-assistance/

Babel is a JavaScript compiler.
https://babeljs.io/

JavaScript 1.7
http://www.cnblogs.com/enix/archive/2011/12/13/2286303.html

HTML Script tag: type or language
http://stackoverflow.com/questions/2267476/html-script-tag-type-or-language-or-omit-both
---------------------------

個人解釋：
從文件上確認的內容，雖Babel是屬於JavaScript轉譯，但對於是否所有瀏覽器皆能適用抱持非肯定，以個人當前環境並無法確定(主要針對手持裝置)，從文件上也多無說明與確認之參考；但若非移植到特定環境 ( React Native )，而是選擇公開環境 ( Phonegap )，JSX撰寫方式並不適合使用，其具備的風險是存在的。

※ 相關文章中有提及不同方式來設定JSX轉譯環境與React執行注意要點。
http://andyyou.logdown.com/posts/177982-reactjs-getting-started

◎ 概觀
https://facebook.github.io/react/docs/tutorial.html#your-first-component
Reference : http://i.imgur.com/Q4kFTzL.png

JSX:
var component = React.createClass({});
ReactDOM.rendert(<component>, document.body);

JS:
var component = React.createClass({});
ReactDOM.render(React.createElement(component), document.body);

React基本構成有兩個部分，第一建立元件(Component)、第二繪製元件於頁面文件(DOM)，且分為JSX與JS兩種撰寫型式。
在官方推薦，期許使用者使用JSX來擴展並簡化閱讀性，避免使用JS操作導致程式閱讀與維護困難；雖引用函示庫應可解決不相容等疑慮，但這部分實務仍須注意。

其次，React的運作結構類同AngularJS，建立的元件皆可顯示於頁面，並以元件為單位對事件處理；類似AngularJS的Controller。
透過React API來管理類別、元件顯示等行為，而產生的元件則藉由Component API來獲得系統對應的事件觸發，例如預設資料、更新狀態等。

---------------------------
React API
https://facebook.github.io/react/docs/top-level-api.html

Component API
https://facebook.github.io/react/docs/component-api.html

DOM Differences
React對跨瀏覽器使用JSX與DOM系統相關差異性說明，如Tag、Event規範。
https://facebook.github.io/react/docs/dom-differences.html
---------------------------

◎ 元件繪製

Demo：ReactJS-1-Basics_class_render.html

JSX：
var component = React.createClass({
	render: function() {
		return (
			<div className="myStyle">
				Hello world
				<a href="#">Link</a>
			</div>
		);
	}
});

JS：
var component = React.createClass({
	render: function() {
		return (
			React.createElement('div', {className:"myStyle"}, "Hello world",
				React.createElement('a', {href:"#"}, "Link")
			)
		);
	}
});


繪製為Component API，其用途在於將元件繪製於文件時，會觸發此函數將顯示對應的XML格式傳回，並經由React解釋為正確的DOM對應格式。
繪製的運作結構有兩點需要注意：

1. Render function 回傳內容必須為Tag tree，如上所示；亦即若有複數需要呈現的標籤與內容，應以一個<div>標籤框住。

2. Render function 若對同一個文件區繪製相同元件，則後者的Properties將會取代前者。
https://facebook.github.io/react/blog/2015/10/01/react-render-and-top-level-api.html#object-oriented-updates

---------------------------
ReactDOM.render and the Top Level React API
ReactDOM繪製行為與React API關係性與物件導向運行影響。
https://facebook.github.io/react/blog/2015/10/01/react-render-and-top-level-api.html

React (Virtual) DOM Terminology
https://facebook.github.io/react/docs/glossary.html
---------------------------

◎ 元件事件

Demo：ReactJS-1-Basics_event.html

元件經過繪製到文件後，可經由改變props和state來觸發元件重繪(re-render)，並觸發相關事件。

Properties：屬性
在ReactDOM.render時，輸入的屬性參數即會填入其中；亦可使用getDefaultProps函數來回傳屬性預設值，亦即若有輸入屬性則取代回傳預設值，若無則以預設值使用。

State：狀態
在ReactDOM.render透過傳入的屬性產生元件後，即會產生狀態資訊，以供元件內部操作。

Interactive Event：互動事件
https://facebook.github.io/react/docs/events.html

JSX或JS形式，互動事件的觸發源自於元件與使用者互動下產生；如Click事件，在React，其互動事件皆符合DOM指定的標準。
在範例中，利用onClick={this.handleClick}來串聯事件函數與元件觸發。
若觸發後，在運作上須更新內容Props或State則以，setProps、setState來更新資訊，並觸發重繪來更新畫面。

System event：系統事件

系統事件是指當React系統函數運作時，會觸發的事件函數，如setProps、setState會觸發重繪函數，而重繪函數則會使用三個事件函數。
shouldComponentUpdate：是否該更新元件
componentWillUpdate：元件即將更新
componentDidUpdate：元件更新完畢

這些系統事件，是提供開發者自訂事件流程的運作變化。
---------------------------
React, Tutorial for getting started
應用程式範例教學
https://facebook.github.io/react/docs/tutorial.html#your-first-component

React 語法
事件運作範例程式
http://jamestw.logdown.com/posts/248317-react-one-step-at-a-time

Interactivity and Dynamic UIs
互動與動態UI範例說明。
https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html

Component Specs and Lifecycle
https://facebook.github.io/react/docs/component-specs.html
---------------------------


---------------------

Reference page :

