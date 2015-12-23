�� Object.Prototype
Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
other reference :
Function.prototype : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype

Demo�GJS-Prototype_1
Demo�GJS-Prototype_2
Demo�GJS-Prototype_3

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

JavaScript�PC���P�A��{�����B��õL���sĶ�A��Y�{���N�|�b�B��ɱN�Q�ŧi��Script��Ķ���B�⤸�C
��̤j���D�O��ɲ��͹B�⤸�A�Y�B�⤸�O��ݭn����ɤ~���͡A�����󪺺c���Ȭy���r���A��Y�i�H�ʺA�s�W�ܼơB��ơC

obj.var = 1;
obj.fun = function() {}

�p�W�Ҩ��A�Y�ϳz�Lnew���ͪ���A��i�b�z�L�������w�s�W�ܼơB��ơC
�ӳo�˵��c��i�θ���new���B�@�Ҧ��A�Nclass��Ƥ��e�ƻs�J�@�ӹ�誫��e���C

���O�~��(Inheritance)�G

var subClass = function() {
	// Inheritance Parent Class
	class.call(this);
	...
}

���O�~�ӳz�LObject.call��ơA�I�s���w���O���ŧi��ơC
��Y��subClass�z�Lnew�B��ɡA�b��Ƥ��e�ƻs�ɡA�|���N�����O�ƻs��~�ƻs�ۨ����e�C

------------------------------

Object.Prototype�B�@�p�U�G

1. �ŧisubClass
var subClass = function() {}
2. ���wsubClass�~��class�s��prototype�����ܼơB��ơC
subClass.prototype = Object.create(class.prototype);
3. ���wsubClass���غc��ơA�X�D�S��@����V��subClass�ŧi�����C
subClass.constructor = subClass;

�䵲�c�W�AsubClass�|�~�Ө�class.prototype���Ҧs���ܼơB��ơA�óz�LsubClass�ŧi��ƽƻs���󤺮e�C

------------------------------

�b�d��JS-Prototype_3���A���դ@�U���G

1. Object.call�A�i�H�Ƽƫŧi�A�B���e�ҷ|�ƻs�󲣥ͪ��󤺡C 
2. Object.prototype�A���i���V�ƼƤ��e�A�̫���V��prototype�~�|�Q�إߡC
3. Prototype���s��Ƥ��i�ϥΫŧi��Ƥ����p����ơC

�Y�̷Ӫ���ɡA��@�~�ӦV�Ӹ����G

1. Object.call�A�ŧi��@�������C
2. Object.prototype�A�ŧi�~�Ӫ������P���e�F�����i�֦��p���ܼơB��ơC