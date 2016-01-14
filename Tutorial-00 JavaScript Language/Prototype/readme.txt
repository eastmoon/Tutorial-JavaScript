�� Object.Prototype
Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
other reference :
Function.prototype : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype
JavaScript �y���֤�, ���ýѦh�Ӹ`���غc���Ghttp://www.codedata.com.tw/javascript/essential-javascript-14-constructor/
JavaScript �y���֤�, prototype �S�ʡGhttp://www.codedata.com.tw/javascript/essential-javascript-15-prototype/
JavaScript ����ɦV����, https://developer.mozilla.org/zh-TW/docs/JavaScript_%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91%E4%BB%8B%E7%B4%B9

Demo�GJS-Prototype_1�A��¦Class�PPrototype�ާ@
Demo�GJS-Prototype_2�AClass�PPrototype�إߥi�����}������
Demo�GJS-Prototype_3�AClass�PPrototype�إߦ���
Demo�GJS-Prototype_4�APrototype���V�����骫��
Demo�GJS-Prototype_5�A����constructor�Pprototype�ӷ�

�ŧi���O(Class)�G

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

���ͪ���(Object)�G

var instance = new class();

�ϥλP�]�w�����ܼƻP��ơG

obj.var = 1;
obj.fun = function() {}

JavaScript�ݩ�z���A�ܼƫ��{���A�ܼƫ��V�������w���O�A���󤺮e�]�S�j�w�W�d�w�q�覡�A��Y�p�W�y���A�Y�q���w�q�L�A�t�ΫK�|�����إߩ󪫥󤺡C
�ӳo�˵��c��i�θ���new���B�@�Ҧ��A�z�L����ŧi���O��ơA���ͤ@�ӹ��骫��e���C

���O�~��(Inheritance)�G

var subClass = function() {
	// Inheritance Parent Class
	class.call(this);
	...
}

���O�~�ӳz�LObject.call��ơA�I�s���w���O���ŧi��ơC
��Y��subClass�z�Lnew�B��ɡA���N���w���O�����e���ܷͦ�e���󤺡A���~���ͫŧi���w�q�����e�C

Object.Prototype�B�@�p�U�G

1. �ŧisubClass
var subClass = function() {}
2. ���wsubClass��prototype���V���󪺹��餺�e�A�i��class.prototype�β��ͷs���������C
subClass.prototype = Object.create(class.prototype | new class());
3. ���wsubClass���غc��ơA�X�D�S��@����V��subClass�ŧi�����C
subClass.constructor = subClass;

�䵲�c�W�AsubClass�|�~�Ө�class.prototype���Ҧs���ܼơB��ơA�óz�LsubClass�ŧi��Ʋ��ͪ������C

------------------------------

Constructor�BPrototype

�bJavaScript�z�Lnew���ͪ���ɡA�|�N���󤺲��ͨ�ӼƾڡAconstructor�Bprototype�C

constructor�O���������O�ŧi��ơC
prototype�O�������~�Ӫ��쫬����C

��JavaScript�b�M��Y���ݩʦW�ٮɡA��B�J�p�U�G
1. �b������餺�T�{�ݩʬO�_�s�b�A�Y�s�b�h����C
2. �Y������餣�s���ݩʡA�ܪ��󪺭쫬���M��A�Y�s�b�h����C
3. �Y���󪺭쫬���s���ݩʡA���ݩʤ��s�b�C

------------------------------

�b�d��JS-Prototype_3���A���դ@�U���G

1. Object.call�A�i�H�Ƽƫŧi�A�B���e�ҷ|���ͩ󪫥󤺡C 
2. Object.prototype�A���i���V�ƼƤ��e�A�̫���V��prototype�~�|�Q�إߡF���i���V�ŧi��ơA�������������C

�Y�̷Ӫ���ɡA��@�~�ӦV�Ӹ����G

1. Object.call�A�ŧi��@�������C
2. Object.prototype�A�ŧi�~�Ӫ������P���e�C