AngularJS�BjQuery Mobile�V�X�ϥΡG

���JSFramework�P�ɷ|����CSS�PEvent�A�̾ڨ��u�����Ƿ|�ɭP�Y�@�誺�t�γQ�R���A�pngRepear�|�\��JQM checkbox event�A�ɭPCSS�L�k�ק�C
�惡�A�̾ڤ��P�ƥ�P���p�A�]���ݨD�קﵲ�c��Ĳ�o�{�ǡC

�� JS Framework ���J���ǡA�p�U�ҦC�G
1. jQuery
2. jQuery Mobile
3. AngularJS

https://groups.google.com/forum/#!msg/angular/6A3Skwm59Z4/oJ0WhKGAFK0J

�̦h�Ƥ峹�ҭz�AjQuery Mobile�BAngularJS�O�HjqLite�����ާ@HTML DOM�A�]���Y�n���o���㪺jQuery�h�ݥ����JjQuery�C

�� ��AngularJS�ϥ�ngInclude���J�����ɡA�L�kĲ�ojQueryMobile���˦��B�@�F�U��Y�O�����p�����䥿�`�B�@�C

AngularJS + JQueryMobile and Dynamic Loading of pages
http://ramkulkarni.com/blog/angularjs-jquerymobile-and-dynamic-loading-of-pages/

�� �ʺA�sĶ���
Demo�GDynamic-Compile

���D�ۦ��e�D�A�e�D�O�Hinclude���J�t��jQuery Mobile�˦��������ӵL�k���`��ܡA���D�h�O�HjQuery Mobile�s���P�e�{�ʵe���D�A���J�㦳AngularJS�B�⦡������L�k���`��ܡC

�p�d�ҩҥܡA�Y���]�m�ʺA�sĶ�A�b�I�����J�~��������A��~����������AngularJS���|����礣�|�sĶ�C
�BjQuery Mobile���s���ȸ��J�{�w��Page���e�A�Y�ϳ]�mScript�]���|����C
���i�Q��Bootstrap�A�����ʧ@�ϫ��N���P������Module�s���A�BModule�|�Q���Ƴ]�m�A���h���Y��|�ɭP���`�C

�惡�A�ϥ�$compile����A����J���e�����i��sĶ�A��L�{�p�U�G
1. �]�w�ƥ�"pagebeforeshow"�A�õ��ݨƥ�o�͡C
2. Ĳ�o�ƥ�A�ۥ�������o�̺ۨ޲z����injector�A�ñqinjector�����o�sĶ�A��$compile
3. �sĶ���J�����e�����F�`�N�A���d�ҶȰw����J���Ĥ@�����i��sĶ�C
4. �Q��rootScope�n�O��scope�A�N���e�[�J�����C
5. Ĳ�oscope��$digest�R�O�A�������ƥ�i�H��s�C

�� ���P��Ĳ�o�ƥ�A�|�M�w�ʺA�sĶ�o�ͪ��ɶ��I�A�Y�ϥ�pagechange�A�h�|������ܧ����~�sĶ�F�Y�ϥ�pageload�h�|�X�{�A�sĶ������A�ۦ���Ʃ|�������󭶭������p�C

�� Button �I���ޱ�
Demo�GButton-1

�Q���I���N���s�Хܬ����`(Focus)�C
1. �T���ǻ��P�ʺA���X���s�ϥ�AngularJS�c�v����ƼҲաF�ǥ�Singletion���c�A��i�Ω󭶭����ǿ��ơC
2. �I����B�̡A��HjQuery selector�B�@�����o���w����(HTML Element)�A�b���󴫼˦����O�C

�� Radio Checked ��ܲ��`
Demo�GButton-2

�p�d�ҩҥܡG
1. Group 1-JQM�A�h�]���u�O�djQuery Mobile�˦��ק�ӥ��`�A�i�ﶵ���ͫo�L�k�z�LAngularJS�ӹF��ʺA����C
2. Group 1-AngularJS�A���M�z�LAngularJS���檺��ܦ����`�B�@�A�i�O�ݩ�jQuery Mobile���˦��ק�o���`�C
3. Group 2�A�Q��AngularJS����Ϳﶵ�ñ����T���A���I���ɡA�Q��jQuery�R�O�A�ۥD����jQuery Mobile�]�w�˦��C

�����D�ѨӡA�z�L�[���s�������e�A�i�H�o�{��AngularJS���X���ﶵ�A�èS��jQuery Mobile�������ƥ�F�]�����׬O�ѩ�JavaScript�ƥ�t�ξɭP���`�A�Y��DOM Level2����ť�t�����[�c�|�P��ť���ƥ�o�ʡA�ӬODOM Level1�����w�ƥ�h�|�O�d�̫�@�ӫ��V�ؼСC

�� Default Select ��ܲ��`
Demo�GButton-3

�����D������e�d��Button-2�A�Y�NjQuery Mobile��Ʈw�����A�w�]�ﶵ�K�|�X�ӡC
���D�P�e�A�O�b��CSS�˦����|�ɭP���`�F���Y����ҳ]�mchecked�ݩʫh�|���`��ܡA�i�շQ��checked�ݩʦs�b���w�]�t�m�ʧ@�|�����[�C

�w����D�A�Ħ�U�C�B�z�覡�G
1. �ϥ�jQuery�ƥ�A�H��Ĳ�o�ק鷺�e
$("#id").on() etc.
2. �ϥίS�wAngularJS�ݩʼ��ҡA�H��Ĳ�o�ק鷺�e
ng-if etc.
3. �۫�repeat-event�ݩʡA�H��Ĳ�o�ק鷺�e
http://stackoverflow.com/questions/13471129/ng-repeat-finish-event

���W�z���D�ҵo�ͨƥ�Ĳ�o��AjQuery selector�L�k���Element�A��Y�ƥ�o�ͷ�U�AAngularJS�sĶ�B�̩|���N���������e��g��DOM���C
�o�������լO�z�L�欰���Ĳ�o��A�Nselector���Glog�X�ӡA���Ǧ��T�{�C

�̲׸ѨM��צp�d�ҡA�ϥ�AngularJS��ƭȭק��A�欰��Ʒ|Ĳ�o�ñN��ܤ��e���ܪ��S�ʡA�H���]�p��ƨíק�˦��C

---------------------

Reference page :

jQuery Mobile�Vbackbone
http://coenraets.org/blog/2012/03/using-backbone-js-with-jquery-mobile/