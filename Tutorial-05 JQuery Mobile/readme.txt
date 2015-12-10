�� JQuery Mobile
http://view.jquerymobile.com/master/demos/
http://www.w3school.com.cn/jquerymobile/

jQuery Mobile is a touch-friendly UI framework built on jQuery Core that works across all popular mobile, tablet and desktop platforms.

JQuery Mobile�O�@�M�HĲ���ϥΪ̤������D�A�����Ω�JQuery�֤߹B�@���󥭥x�ج[�C

JQuery Mobile is a user interface framework based on jQuery that works across all popular phones, tablet, e-reader, and desktop platforms. Built with accessibility and universal access in mind, we follow progressive enhancement and responsive web design (RWD) principles. 

JQuery Mobile�O�ϥΪ̤����ج[�A�֤߰򩳬�JQuery�A�����Ω����B���O�B�\Ū���B���q�����x�C
�Ҷq�ݨ��ܩ󤣦P���x�A���ج[�]�p��`���i�W�j(RE�Bprogressive enhancement)�P�T�����]�p(RWD�BResponsive Web Design)��h�C

�� Page and Dialog
http://view.jquerymobile.com/master/demos/pages/
Demo�GJQM-1_Basics
Demo�GJQM-1_Basics_MultiPage
Demo�GJQM-1_Basics_Dialog

A page in jQuery Mobile consists of an element with a data-role="page" attribute. 

JQuery Mobile�N���e�e����������(Page)�P��ܮ�(Dialog)�A����HTML����A�u�n���ݩʦs���p�U�]�w�Y�i�QJQuery Mobile�{�w�����G

�� Page
�| data-role = "page"
	�| data-role="header"
	�| data-role="content"(1.3.2) / role="main" class="ui-content"(1.4.5)
	�| data-role="footer"


Page�򥻥Ω�Div����A��U�i�A�Ӥ����T�Ӹ�ƲӸ`�C
�@�Ӻ������i�H���h��Page�A�ӭY����}���[�W#xxx�A�h�|��ܹ�����id=xxx��Page�F�Y�S���h��ܲĤ@�ӳ]�w��Page�C

�� Dialog

�@��Page�Y�n�H��ܮاe�{�A�u�n�H�s���覡���VPage��ID�A�é��ݩʤ��[�Wdata-dialog="true"�F����覡��i�]�w��s�����C

JavaScript code reference�Ghttps://api.jquerymobile.com/dialog/#option-closeBtn

�� Link
����Link�榡�ѦҤU��G
http://demos.jquerymobile.com/1.0a4/docs/pages/link-formats.html

����Link����ѦҤU��G
http://view.jquerymobile.com/master/demos/transitions/

�����ۭq����ѦҤU��G
http://demos.jquerymobile.com/1.1.1/docs/pages/page-customtransitions.html

�� Theme
http://demos.jquerymobile.com/1.1.1/docs/api/themes.html

Theme�O�@�M�Τ����覡�NCSS Style�t�βե�ƪ��t�ΡA�b�t�Τ��i����26��CSS Style(a-z)�C
�}�o�̨ϥ�data-theme�o�@�ݩʡA���w������CSS Style�ե�s���A�Y�i�N����󴫦�������Style�C

���z�b��jQuery Mobile���C��HTML���󦳳]�w��������m�A�pPage���Ӥ���header�Bcontent�Bfooter�T�q�A�ө�Theme���|�N�������q�t�W������Style�C
�]���A��ϥΪ̶Ȼݫ��wTheme�A���J���P��Style�]�w�ɡA�Y�i����Style�C

�w�]Theme�G
http://view.jquerymobile.com/master/demos/theme-default/

�ۭq��Theme�u��G
http://themeroller.jquerymobile.com/

�� RWD�AResponsive Web Design
http://view.jquerymobile.com/master/demos/rwd/

�ϥ�RWD���`�N���ƶ��G

1. Create a style override stylesheet and include it after the jQuery Mobile framework stylesheet. 
This will hold all your custom styles, tweaks to the default widgets and media queries.

�إߪ��л\�˦����bjQuery Mobile�ج[�˦�����J�F�o�~�i�N�ۭq�˦��л\�󳡥󪺹w�]���e�C

2. Start by writing the styles you want to see at the narrowest screen width (i.e. "mobile first"). These should be outside a media query. This mobile-first approach is efficient because you can lay down the core typography, colors and styles for mobile knowing that these tend to also be used for wider breakpoints.

�H�̯����ȹ��e�רӳ]�p�˦��F��ʸ˸m�u�����]�p���ĩ�A�]�p�̱N��r��B�C��B�˦��A�Ω��ʸ˸m���]�p�[�A�Ϩ��Ƨ�s�諸�_�I ( ����ƨϱo�e���զX��[�e�� )�C

3. Choose the breakpoints based on your content, not a specific device. Since there are devices of every imaginable width, it's smarter to choose breakpoints based on how your content looks in your design system. As you re-size the window to greater widths, identify where your content hits a point where it could adapt to take advantage of a wider width.

����_�I��󤺮e�ӫD�S��˸m�F���P���˸m�����P���e�סA����������_�I�A�����t�Ϊ����e�F�Y�K�������]�j�p�A�]�w���e���I���A�~�i�A���󤣦P���e���ܤơC

4. Write media queries' widths in ems, not pixels. This ensures the layout will adapt to font size changes in addition to screen widths. To calculate the width in ems, divide the target breakpoint in pixels (320px) by 16px (the default font size) to get the em-based width (20em).

�]�w�C��e�������^�T(ems)�A�D����(pixel)�F�o�T�O�]�p�b�r���ܤƮɡA�O���H�ù��e�סF������ù��e�׻P������t�|�ϱo�i�����e�ܤơA���`�N���O�ù��e�ӫD�����e�C

5. Use min-width breakpoints that build on top of the mobile styles. The first breakpoint applies layout adjustments on top of the standard mobile styles so these can be fairly lightweight. Additional min-width breakpoints can be added for even wider screens that each build on the previous breakpoint styles.

�ϥγ̤p�e�׸`�I����ʸ˸m�˦��A�̪쪺�_�I�]�p�����зǦ�ʼ˦��A�Ϩ�i���q�B�@�F���A�W�[�̤p�e���_�I���˦��ӹ�����h�˪��ù��e�סC

6. To override framework styles only for smaller screens, use a max-width breakpoint instead. This allows you to constrain your style overrides to only apply below a certain screen width. Above this width, all the normal styles will apply so this is good for certain types of overrides.

�л\�ج[�˦������̤p�ù��ؤo�A�H�̤j�e���_�I�Ӵ��N�F�o�]�p�N����ù��e�ש�@�w�ؤo�A�Y�C����ϥ��л\�˦��F�Ϥ��Y���󭭨�A�h�ϥΤ@��˦��C

jQuery Mobile ���Ѫ�RWD����P�ݩʤJ�U�ҦC�G

�� responsive grids
http://view.jquerymobile.com/master/demos/grids/
Demo�GJQM-1_RWD_Grids

Grid�O�@�M�ʺA���ءA��ù��ؤo�ܰʮɡA�����ج[�����椸�]�H�Y�|�ܰʨ�۹�e�סC
�����WGrid�@�����|�šA����Grid A�BGrid B�BGrid C�BGrid D�A��ù���Ҥئp�U�G
Grid A (50/50)
Grid B (33/33/33)
Grid C (25/25/25/25)
Grid D (20/20/20/20/20)

���h�[�c�h��ui-grid-x�Bui-block-x�Bui-bar-x
<div class="ui-grid-x">
	<div class="ui-block-x">
		<div class="ui-bar-x"> ... </div>
	</div>
</div>

- ui-gird-x�A{x = a, b, c, d}
grid�]�w��ʺA��檺�`��ҤءC

- ui-block-x�A{x = a, b, c, d, e}
block�]�w���󬰪�椺���϶�x�A�Ygird��a�A�h�|��a�Bb�϶��C
�� multi-block�]�w�覡�O���Ƴ]�wui-block-x�A�C�C���ܥk�A�B�qui-block-a�}�l�A�Y�Sa�qb�}�l�]�O�P�Ӧ�m�ƦC�C


- ui-bar-x�A{x = a-z}
bar�]�wblock���������CSS Style�Ax����Theme���˦��C

�ۭqGird
http://view.jquerymobile.com/master/demos/grids-custom-responsive/
�z�L�ק�ui-block-x��width��һPmax-width�ؤo�ӭץ��C

���s��Girds
http://view.jquerymobile.com/master/demos/grids-buttons/
Demo�GJQM-1_RWD_Grids_Button

<label for="grid-checkbox-1">Checkbox</label>
<input type="checkbox" id="grid-checkbox-1" name="grid-checkbox-1">

�����s��Grids�]�w�A�N�@��label for�����@��input id�C

���ocheckbox�Bradio�ƭ�
https://api.jquery.com/checked-selector/

�� reflow tables 
http://view.jquerymobile.com/master/demos/table-reflow/
Demo�GJQM-1_RWD_ReflowTable

�ϥ�Table�ݦ�Attribute
1. data-role="table"�A���w������jQuery Mobile�v�T�C
2. data-mode="reflow"�A���w����欰Reflow���C
3. class="ui-responsive"�A���w����㦳�T���A�̾ڿù��e�׽�����ܤ覡�F�w�]��560px (35em)�C

����Table���ΰѦҤU��G
http://www.w3schools.com/jquerymobile/jquerymobile_tables.asp

�� column chooser tables
http://view.jquerymobile.com/master/demos/table-column-toggle/
Demo�GJQM-1_RWD_ColumnToggleTable

Column��ܪ��A�O�إߪ��ɦ۰ʲ��ͤ@������ܫ��s�A�ô��ѨϥΪ̿�ܻP�������C
�� Column Toggle�MReflow�O�Ĭ𪺦s�b�A���i�P�ɨϥΡC

�ϥ�Table�ݦ�Attribute
1. data-role="table"�A���w������jQuery Mobile�v�T�C
2. data-mode="columntoggle"�A���w����欰Column Toggle���C
3. class="ui-responsive"�A���w����㦳�T���A��l�Ҧ�������ܡC
4. id="xxx"�A���w�@��id�W�١C
5. ��줸��(th)�]�wdata-priority�A�Y�L�]�w�����N������Column Toggle�޲z�C

�����s�P��ܭ����A�i��Attribute
1. data-column-btn-theme=x�A{x = a-z}�A���s�ϥΪ�Theme�C 
2. data-column-btn-text=x�A���s��ܪ��W�٬�x�C
3. data-column-popup-theme=x�A{x = a-z}�A��ܭ�����Theme�C

�t�~�i�ϥ�class="table-stripe"�A�]�w�_���C���C���ܤơF�C���ܤƬO�ĥ�Theme�]�w�C

����ݩ�data-priority�w�]�e�װѦҦp�U�G
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

�� panels
http://view.jquerymobile.com/master/demos/panel/
http://view.jquerymobile.com/master/demos/panel-fixed/
Demo�GJQM-1_RWD_Panel
Demo�GJQM-1_RWD_Panel_CSS_Media

���O(Panel)�A������(Page)�����l�����Τl���O�A���P����Y(Header)�B���e(Content)�B����(Footer)�A���O�w�]������ܡA����H�s���I�s�ɤ~�X�{�C
��h�W���O�P��L���P�h�A�L�e�����Y�C

�[�c�G
<div data-role="page">
	<div data-role="header">...</div>
	<div role="main" class="ui-content">...</div>
	<div data-role="footer">...</div>
	<div data-role="panel">...</div>
</div>

�ϥ�Panel�ݦ�Attribute
1. data-position=x, {x = "left" | "right"}�A�����O�Ҧb����m�O�b����(left)�٬O�k��(right)�C
2. data-display=x, {x = "overlay" | "reveal" | "push"}�A�����O�X�{�ɪ��覡�O�л\��W(overlay)�B��m��U(reveal)�B��������(push)�C
4. data-position-fixed=x, {x = "true" | "false"}�A��u�b�U�ԮɡA���O�O�_���T�w���ʡC
3. id="xx"�A�]�w��s���A�K��s���I�s�C

��ܳ]�w
<a href="#xx" data-rel="close">...</a>

���O���w�]�]�p�O�HResponsive Web Design�Ҷq���u�X�\�ୱ�O�A���Y�ù��e�פj��w�ȮɡA�u�X�����h��o�­��B���A��F������]�p�Ҷq���e�P��ܤ�ҦӼW�[�F�I�����ơA���b�q���h�L�ݦ��Ҷq�C
�]���A���F��S�w�ù��e�פU��ֵL�N�q�ާ@�A�h�i��CSS�]�w�ñN���O�ʵe�B��m�B��ܪ��A�����]���C

CSS3��Media Queries����¦���]�w�W�d
http://www.w3schools.com/css/css3_mediaqueries.asp
http://www.w3schools.com/css/css3_mediaqueries_ex.asp

�Q�δC�����ҹ����A�B�~�W�]CSS Style�ӧ��ܾ��骬�A�C

�� Popup
http://www.w3schools.com/jquerymobile/jquerymobile_popups.asp
Demo�GJQM-1_Basics_Popup

�u�X(Popup)��ǥΩ󤺮e���ܡA����i�Ω�N�c������H�B�~�ϰ�i�}���B�̡C

�ϥ�Popup�ݦ�Attribute
1. data-role="popup"�A���w�����󬰼u�X����C
2. id="xx"�A���w������id�A�Q����s��Ĳ�o�u�X�欰�C
3. data-dismissible={true | false}�A�T��u�X��i�I���L��m�����C
	- �Y��false�A�Ӥ������s���������s�Gclass="ui-btn-right"�A�аO��ܩ�k�W��Fclass="ui-btn-left"�A�аO��ܩ󥪤W��C
	<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a>
4. data-arrow�A���u�X�νb�Y�Хܩ���ܦ�m��������t�C
5. data-overlay-theme�A���u�X�I����Theme style�C

Link�I�sPopup�i��Attribute
1. data-position-to={window | #xxx | origin}�A���u�X������ܪ���m�C
	- window�A���������C
	- #xxx�Aid="xxx"������C
	- origin�A��eĲ�o�欰����m�C
2. data-transition=xxx�A�Hxxx������覡�e�{�C
	- �ԲӰѦҫe��ALink����C

�u�X���󤺥i���t�@��Page�[�c�A����ܤ��e���u�X�Φ��C

---------------------------------

jQuery Mobile examples
http://www.w3schools.com/jquerymobile/jquerymobile_examples.asp

Reference : jQuery Mobile element attribute
http://www.w3schools.com/jquerymobile/jquerymobile_ref_data.asp

JQuery Mobile �ج[���лP�ϥ� 20140713
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