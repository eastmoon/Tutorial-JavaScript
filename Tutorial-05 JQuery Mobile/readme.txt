◎ JQuery Mobile
http://view.jquerymobile.com/master/demos/
http://www.w3school.com.cn/jquerymobile/

jQuery Mobile is a touch-friendly UI framework built on jQuery Core that works across all popular mobile, tablet and desktop platforms.

JQuery Mobile是一套以觸控使用者介面為主，並應用於JQuery核心運作的跨平台框架。

JQuery Mobile is a user interface framework based on jQuery that works across all popular phones, tablet, e-reader, and desktop platforms. Built with accessibility and universal access in mind, we follow progressive enhancement and responsive web design (RWD) principles. 

JQuery Mobile是使用者介面框架，核心基底為JQuery，並應用於手機、平板、閱讀器、筆電等平台。
考量需見至於不同平台，此框架設計遵循漸進增強(RE、progressive enhancement)與響應式設計(RWD、Responsive Web Design)原則。

◎ Page and Dialog
http://view.jquerymobile.com/master/demos/pages/
Demo：JQM-1_Basics
Demo：JQM-1_Basics_MultiPage
Demo：JQM-1_Basics_Dialog

A page in jQuery Mobile consists of an element with a data-role="page" attribute. 

JQuery Mobile將內容容器分為頁面(Page)與對話框(Dialog)，任何HTML元件，只要其屬性存有如下設定即可被JQuery Mobile認定為此：

○ Page
└ data-role = "page"
	└ data-role="header"
	└ data-role="content"(1.3.2) / role="main" class="ui-content"(1.4.5)
	└ data-role="footer"


Page基本用於Div元件，其下可再細分為三個資料細節。
一個網頁內可以有多個Page，而若於網址後放加上#xxx，則會顯示對應於id=xxx的Page；若沒有則顯示第一個設定的Page。

● Dialog

一個Page若要以對話框呈現，只要以連結方式指向Page的ID，並於屬性內加上data-dialog="true"；轉場方式亦可設定於連結中。

JavaScript code reference：https://api.jquerymobile.com/dialog/#option-closeBtn

◎ Link
相關Link格式參考下文：
http://demos.jquerymobile.com/1.0a4/docs/pages/link-formats.html

相關Link轉場參考下文：
http://view.jquerymobile.com/master/demos/transitions/

相關自訂轉場參考下文：
http://demos.jquerymobile.com/1.1.1/docs/pages/page-customtransitions.html

◎ Theme
http://demos.jquerymobile.com/1.1.1/docs/api/themes.html

Theme是一套用切換方式將CSS Style系統組件化的系統，在系統中可提供26個CSS Style(a-z)。
開發者使用data-theme這一屬性，指定對應的CSS Style組件編號，即可將元件更換成對應的Style。

其原理在於jQuery Mobile對於每個HTML元件有設定對應的位置，如Page中細分為header、content、footer三段，而於Theme中會將對應的段配上相應的Style。
因此，當使用者僅需指定Theme，載入不同的Style設定檔，即可切換Style。

預設Theme：
http://view.jquerymobile.com/master/demos/theme-default/

自訂化Theme工具：
http://themeroller.jquerymobile.com/

◎ RWD，Responsive Web Design
http://view.jquerymobile.com/master/demos/rwd/

使用RWD應注意的事項：

1. Create a style override stylesheet and include it after the jQuery Mobile framework stylesheet. 
This will hold all your custom styles, tweaks to the default widgets and media queries.

建立的覆蓋樣式應在jQuery Mobile框架樣式後載入；這才可將自訂樣式覆蓋於部件的預設內容。

2. Start by writing the styles you want to see at the narrowest screen width (i.e. "mobile first"). These should be outside a media query. This mobile-first approach is efficient because you can lay down the core typography, colors and styles for mobile knowing that these tend to also be used for wider breakpoints.

以最窄的銀幕寬度來設計樣式；行動裝置優先的設計有效於，設計者將其字體、顏色、樣式適用於行動裝置的設計觀，使其具備更廣闊的斷點 ( 元件化使得畫面組合更加容易 )。

3. Choose the breakpoints based on your content, not a specific device. Since there are devices of every imaginable width, it's smarter to choose breakpoints based on how your content looks in your design system. As you re-size the window to greater widths, identify where your content hits a point where it could adapt to take advantage of a wider width.

選擇斷點基於內容而非特殊裝置；不同的裝置有不同的寬度，明智的選擇斷點，應基於系統的內容；即便視窗重設大小，設定內容於點內，才可適應於不同的寬度變化。

4. Write media queries' widths in ems, not pixels. This ensures the layout will adapt to font size changes in addition to screen widths. To calculate the width in ems, divide the target breakpoint in pixels (320px) by 16px (the default font size) to get the em-based width (20em).

設定媒體寬度應為英吋(ems)，非像素(pixel)；這確保設計在字體變化時，是跟隨螢幕寬度；手機的螢幕寬度與像素比差會使得可視內容變化，應注意的是螢幕寬而非像素寬。

5. Use min-width breakpoints that build on top of the mobile styles. The first breakpoint applies layout adjustments on top of the standard mobile styles so these can be fairly lightweight. Additional min-width breakpoints can be added for even wider screens that each build on the previous breakpoint styles.

使用最小寬度節點為行動裝置樣式，最初的斷點設計應為標準行動樣式，使其可輕量運作；其後，增加最小寬度斷點的樣式來對應更多樣的螢幕寬度。

6. To override framework styles only for smaller screens, use a max-width breakpoint instead. This allows you to constrain your style overrides to only apply below a certain screen width. Above this width, all the normal styles will apply so this is good for certain types of overrides.

覆蓋框架樣式應為最小螢幕尺寸，以最大寬度斷點來替代；這設計將限制螢幕寬度於一定尺寸，若低限制使用覆蓋樣式；反之若高於限制，則使用一般樣式。

RWD樣式設計相關討論：
Web Style Sheets CSS tips & tricks, http://www.w3.org/Style/Examples/007/units.en.html
-----
CSS font size, https://css-tricks.com/css-font-size/
-----
彈性化的 Media Query, https://blog.hinablue.me/entry/css-media-query-use-pixel-or-not/
-----
Responsive Web Design - 概論整理重點, http://blog.friendo.com.tw/posts/238205-responsive-web-design
-----
CSS 使用 px 和 em 的差異, http://blog.longwin.com.tw/2007/12/css_px_em_difference_2007/
-----
RWD 字型設定策略, http://www.kangting.tw/2014/04/rwd.html

字型大小的設定單位，有絕對單位的px，以及比例單位的em、rem與百世比。
像素（px）是一種絕對單位，例如當你將字型設定為16px，則網頁將以 16px 呈現字型， 沒有任何妥協，使用絕對單位的好處在於可以完全掌控網頁內容，這在過去以固定寬度為主要設計方式的時代並沒有什麼問題，然而行動裝置的崛起，以像素為單位的設計方式面臨了不小的挑戰。

精確的像素設定沒有辦法滿足多樣性的裝置呈現需求，例如根據個人電腦螢幕設計的的字型大小，在手機之類的小型螢幕上就會變得不容易檢視，反之亦然。除此之外，既使面對固定寬度的網頁設計，精確的像素設定亦不容易維護，一旦字型大小需要調整，逐一修改網頁中字型的設定值成了無可避免的問題。

為了避免上述的問題，比較好的作法是透過em或是百分比為字型大小進行設定。
-----
jQuery Mobile 提供的RWD元件與屬性入下所列：

○ responsive grids
http://view.jquerymobile.com/master/demos/grids/
Demo：JQM-1_RWD_Grids

Grid是一套動態表格框，當螢幕尺寸變動時，對應框架內的單元也隨即會變動其相對寬度。
分類上Grid共分為四級，分為Grid A、Grid B、Grid C、Grid D，其螢幕比例尺如下：
Grid A (50/50)
Grid B (33/33/33)
Grid C (25/25/25/25)
Grid D (20/20/20/20/20)

分層架構則為ui-grid-x、ui-block-x、ui-bar-x
<div class="ui-grid-x">
	<div class="ui-block-x">
		<div class="ui-bar-x"> ... </div>
	</div>
</div>

- ui-gird-x，{x = a, b, c, d}
grid設定於動態表格的總比例尺。

- ui-block-x，{x = a, b, c, d, e}
block設定元件為表格內的區塊x，若gird為a，則會有a、b區塊。
※ multi-block設定方式是重複設定ui-block-x，每列左至右，且從ui-block-a開始，若沒a從b開始也是同個位置排列。


- ui-bar-x，{x = a-z}
bar設定block內元件整體CSS Style，x對應Theme的樣式。

自訂Gird
http://view.jquerymobile.com/master/demos/grids-custom-responsive/
透過修改ui-block-x的width比例與max-width尺寸來修正。

按鈕化Girds
http://view.jquerymobile.com/master/demos/grids-buttons/
Demo：JQM-1_RWD_Grids_Button

<label for="grid-checkbox-1">Checkbox</label>
<input type="checkbox" id="grid-checkbox-1" name="grid-checkbox-1">

對於按鈕化Grids設定，將一個label for對應一個input id。

取得checkbox、radio數值
https://api.jquery.com/checked-selector/

● reflow tables 
http://view.jquerymobile.com/master/demos/table-reflow/
Demo：JQM-1_RWD_ReflowTable

使用Table需有Attribute
1. data-role="table"，指定此表格受jQuery Mobile影響。
2. data-mode="reflow"，指定此表格為Reflow表格。
3. class="ui-responsive"，指定此表具有響應，依據螢幕寬度調變顯示方式；預設為560px (35em)。

相關Table應用參考下文：
http://www.w3schools.com/jquerymobile/jquerymobile_tables.asp

○ column chooser tables
http://view.jquerymobile.com/master/demos/table-column-toggle/
Demo：JQM-1_RWD_ColumnToggleTable

Column選擇表單，是建立表單時自動產生一個欄位選擇按鈕，並提供使用者選擇與關閉欄位。
※ Column Toggle和Reflow是衝突的存在，不可同時使用。

使用Table需有Attribute
1. data-role="table"，指定此表格受jQuery Mobile影響。
2. data-mode="columntoggle"，指定此表格為Column Toggle表格。
3. class="ui-responsive"，指定此表具有響應，初始所有欄位皆顯示。
4. id="xxx"，指定一個id名稱。
5. 欄位元件(th)設定data-priority，若無設定該欄位將不受到Column Toggle管理。

對於按鈕與選擇頁面，可有Attribute
1. data-column-btn-theme=x，{x = a-z}，按鈕使用的Theme。 
2. data-column-btn-text=x，按鈕顯示的名稱為x。
3. data-column-popup-theme=x，{x = a-z}，選擇頁面的Theme。

另外可使用class="table-stripe"，設定奇偶列的顏色變化；顏色變化是採用Theme設定。

欄位屬性data-priority預設寬度參考如下：
data-priority="1"
Displays the column at 320px (20em)
data-priority="2"
Displays the column at 480px (30em)
data-priority="3"
Displays the column at 640px (40em)
data-priority="4"
Displays the column at 800px (50em)
data-priority="5"
Displays the column at 960px (60em)
data-priority="6"
Displays the column at 1,120px (70em)

● panels
http://view.jquerymobile.com/master/demos/panel/
http://view.jquerymobile.com/master/demos/panel-fixed/
Demo：JQM-1_RWD_Panel
Demo：JQM-1_RWD_Panel_CSS_Media

面板(Panel)，為頁面(Page)內的子分頁或子面板，不同於標頭(Header)、內容(Content)、頁尾(Footer)，面板預設為不顯示，直到以連結呼叫時才出現。
原則上面板與其他為同層，無前後關係。

架構：
<div data-role="page">
	<div data-role="header">...</div>
	<div role="main" class="ui-content">...</div>
	<div data-role="footer">...</div>
	<div data-role="panel">...</div>
</div>

使用Panel需有Attribute
1. data-position=x, {x = "left" | "right"}，此面板所在的位置是在左側(left)還是右側(right)。
2. data-display=x, {x = "overlay" | "reveal" | "push"}，此面板出現時的方式是覆蓋其上(overlay)、放置於下(reveal)、推移全版(push)。
4. data-position-fixed=x, {x = "true" | "false"}，當滾軸下拉時，面板是否為固定不動。
3. id="xx"，設定其編號，便於連結呼叫。

顯示設定
<a href="#xx" data-rel="close">...</a>

面板的預設設計是以Responsive Web Design考量的彈出功能面板，但若螢幕寬度大於定值時，彈出視窗則顯得笨重且不適當；手機的設計考量內容與顯示比例而增加了點擊次數，但在電腦則無需此考量。
因此，為了對特定螢幕寬度下減少無意義操作，則可用CSS設定並將面板動畫、位置、顯示狀態直接設妥。

CSS3於Media Queries有基礎的設定規範
http://www.w3schools.com/css/css3_mediaqueries.asp
http://www.w3schools.com/css/css3_mediaqueries_ex.asp

利用媒體環境對應，額外增設CSS Style來改變整體狀態。

◎ Popup
http://www.w3schools.com/jquerymobile/jquerymobile_popups.asp
Demo：JQM-1_Basics_Popup

彈出(Popup)基準用於內容提示，但亦可用於將繁瑣內文以額外區域展開的處裡。

使用Popup需有Attribute
1. data-role="popup"，指定此元件為彈出元件。
2. id="xx"，指定此元件id，利於按鈕等觸發彈出行為。
3. data-dismissible={true | false}，禁止彈出後可點選其他位置關閉。
	- 若為false，該元件內應存有關閉按鈕：class="ui-btn-right"，標記顯示於右上方；class="ui-btn-left"，標記顯示於左上方。
	<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a>
4. data-arrow，此彈出用箭頭標示於顯示位置的元件邊緣。
5. data-overlay-theme，此彈出背景的Theme style。

Link呼叫Popup可用Attribute
1. data-position-to={window | #xxx | origin}，此彈出元件顯示的位置。
	- window，視窗中央。
	- #xxx，id="xxx"的元件。
	- origin，當前觸發行為的位置。
2. data-transition=xxx，以xxx的轉場方式呈現。
	- 詳細參考前文，Link轉場。

彈出元件內可為另一個Page架構，但顯示內容為彈出形式。

---------------------------------

設計選單共用於全系統的常用方式：
http://roughlybrilliant.com/three_ways_to_implement_a_global_menu_in_jquery_mobile
Demo：JQM-2_Design_RWD_Layout_4

使用jQuery Mobile，若要改變JQM元件配置位置，參考下文。

1. header、footer可於page外，請依下文設定：
http://demos.jquerymobile.com/1.4.4/toolbar-external/
http://jsfiddle.net/koala_dev/DgdMg/2/
http://jsfiddle.net/U5bnm/

(1. 將header、footer放置於body下
(2. 當文件啟動完畢，執行下列JavaScript
$(function(){
	$( "[data-role='header']" ).toolbar({ theme: "a" });
	$( "[data-role='footer']" ).toolbar({ theme: "a" });
});
將擁有屬性data-role='header'、data-role='footer'的元件設定為toolbar，並指定其樣式為"a"類。

2. panel若在page外，將不接受自動設定，以此啟動其效果；若要改為外部，請依下文設定：
http://demos.jquerymobile.com/1.4.5/panel-external/
https://demos.jquerymobile.com/1.4.5/panel-external-internal/index.html

(1. 將panel放置於body下
(2. 當文件啟動完畢，執行下列JavaScript

$( "body > [data-role='panel']" ).panel();
對所有<body>下擁有屬性data-role='panel'的元件，啟動panel功能。

3. popup可於page外，將依下文設定：
http://demos.jquerymobile.com/1.4.2/popup-outside-multipage/

---------------------------------

jQuery Mobile examples
http://www.w3schools.com/jquerymobile/jquerymobile_examples.asp

Reference : jQuery Mobile element attribute
http://www.w3schools.com/jquerymobile/jquerymobile_ref_data.asp

JQuery Mobile 框架介紹與使用 20140713
http://www.slideshare.net/EZoApp/jquery-mobile-20140713

Magnific Popup
http://dimsemenov.com/plugins/magnific-popup/

Responsive Web Design
http://alistapart.com/article/responsive-web-design

Media Query Change Detection in JavaScript Through CSS Animations
https://css-tricks.com/media-query-change-detection-in-javascript-through-css-animations/

Enquire.js
Awesome Media Queries in JavaScript
http://wicky.nillia.ms/enquire.js/