JavaScript Framework - AngularJS
https://angularjs.org/

Ref�GLearn Angular, http://www.learn-angular.org/#!/lessons/the-essentials
Ref�GAngularJS Document, https://docs.angularjs.org/api/ng
Ref�GAngularJS Tutorial for Demo, http://www.tutorialspoint.com/angularjs/index.htm
Ref�GAngularJS �}�o��ԡG���n���}�o�[���P�g�����, http://www.slideshare.net/WillHuangTW/angular-js-coscup2013?related=1
Ref�GAngularJS �}�o��ԡG�ѪR angular-seed �M�׬[�c�P���e, http://www.slideshare.net/WillHuangTW/angularjs-angularseed

AngularJS�ϥ�MVC�[�c�A�䤤�֤ߤT�j����
(1. Template ( View )
�˪O�t�ΡA�Q�Φ��t�ΡA�N�R�A����(Static DOM)��HTML�P�ʺA����(Dynamic DOM)��Template��X���i���[�c��������C
(2. Scope ( Model )
Angular�֤ߡA�Ω�޲z�B�e�{��ơB���������ƥ�A�z�LScope��XTemplate�PController�����q�C
(3. Controller
�ƥ�t�ΡA�g�LScope�n�OController�A�ëغc������ε{�� ( Application�A��@<HTML></HTML>�������� )���B�@�޿�C

�� HTML Compiler
https://docs.angularjs.org/guide/compiler

�� Angular Expressions
https://docs.angularjs.org/guide/expression
Demo�GAngularJS-1_Expressions.html

Angular�B�⦡(��ܦ�)�S�x�G
- Contextl�GJavaScript�B�⦡�b����B��ۡAAngular�B�⦡�bScope���B��C
- Forgiving�G���A�ˬd�e�P�A�bJavaScript��p�⤺�e��undefined�ݩʷ|�ǥX���~�A�bAngular����h���\undefined�Pnull�C�J�B��C
- No Control Flow Statements�G���i��B�⦡��������󦡡B�j��B�ҥ~���C
- No Function Declarations�G���i�ŧi��ơA�Y�ϬO�b��l�ƫ��O(Directive)�C
- No RegExp Creation With Literal Notation�G���i���楿�W��F���C
- No Comma And Void Operators�G���i�ϥΩΫ��wVoid(�L�κA)�C
- Filters�G�b����ܫe�A�i��B�⦡����Ʈ榡�ϥιL�o���C

�� Scopes
https://docs.angularjs.org/guide/scope
Demo�GAngularJS-1_Scopes.html

�yScope is the glue between application controller and the view. During the template linking phase the directives set up $watch expressions on the scope. The $watch allows the directives to be notified of property changes, which allows the directive to render the updated value to the DOM.�z

�yThe normal flow of a browser receiving an event is that it executes a corresponding JavaScript callback. Once the callback completes the browser re-renders the DOM and returns to waiting for more events.�z

Scope�B�@�����ε{��Controller�PView�����A�b�˪O�s���L�{�A���O(Directives)�|��Scope�]�w$watch�B�⦡�A��$watch�|����O���e�ݩ��ܧ�A�ϫ��O�i�Hø�s��s��T�������DOM ( HTML element )�F�b�@��y�{���A�s����������ƥ�A�|���������JavaScript��ơA���Ƨ����ʧ@�A�s�����|��øDOM������~�򵥫ݨ�L�ƥ�C

Controller�PScopes�����ۧ@�Ϊ����Y�G
(1. Controller�ϥ�Scopes�ӳ]�w�覡(�欰)��Templates
(2. Controller�w�q���覡(�欰)�i�վ�ҫ�(Scopes���ݩ�)
(3. Controller�i���U�ʵ��覡�b�ҫ��W�A�o�Ǻʵ��覡�B��󱱨�覡����C

��DIV����]�w����Controller�ɡA��̶��K�إߤ@��Scope����Ӷǻ��T���A���׬O������Angular�B�⦡���ܼơB�������O(Directive)���欰�B�C�|��ơA�ҬO�z�LScope�ӹ����C

�� Custom Directives
https://docs.angularjs.org/guide/directive
Demo�GAngularJS-1_Directives.html
Ref�GDirectives document, https://docs.angularjs.org/api/ng#directive

�yAt a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children.

Angular comes with a set of these directives built-in, like ngBind, ngModel, and ngClass. Much like you create controllers and services, you can create your own directives for Angular to use. When Angular bootstraps your application, the HTML compiler traverses the DOM matching directives against the DOM elements.�z

���O(Directive)�O�аO�bDOM����W(�p�ݩʡB����W�B���O�B�˦�����)�A�o�ǼаO�|�i�DAngularJS HTML�sĶ��($compile)�h���[�S��欰��DOM����W(�Ҧp�W�[��ť�ƥ�)�A�Ψ�DOM����U���l����FAngular�w�����ѦpngBind�BngModel�BngClass�����O�A���N�p�P�A�i�H�إ�Controller��Services�@�ˡA��i�إ߫��O�F��Angular�Ұ����ε{���AHTML�sĶ���K�|�N������DOM����ǰt�_�ӡC

���O(Directive)�i�H�ݦ��OAngular��HTML�����X�W���\��A�ΥΩ�s��JavaScript�ʺA�{�������ҡF���u�I�O�W�����\��ʩM�P�Ҳ�(moduler)�B���(controller)�����q���K�Q�ʡA������I��b�󦹡A�[���W�A�u�n�ϥ�Angular�����ҡA��k�l�����e�Y��JavaScript�y���A���n�`�N���O�A�������һݨϥΪ��O�ܼơB����B�}�C�A�e�J��T���P�|�ɭP��sĶ���~�C

�t�~�A���O�ƶq�c�h�A���۹��HTML�J�s���ҡA�]�ëD�Ҧ����O�һݲz�ѡA�o�����ݵ��D�ئӾǲ߻P�\Ū�C

�� Module
https://docs.angularjs.org/guide/module#module-loading-dependencies

�� Angular injector subsystem
Demo�GAngularJS-1_Injector.html
Ref�GAngularJS �J���о� - $inject, http://abgne.tw/angularjs/angularjs-getting-stared/inject.html
Ref�GDependency Injection, https://docs.angularjs.org/guide/di

��²�N�Ӫ���Dependency Injection�G
�y�]�ߤ����A�Ѥ��P�����󧹦�����������A�åѻݭn����U�����C�z

�ӦbAngular��Inject�A�O�����N�ǻ��Ѽƪ��覡�F�i�H���w���Ѽƪ���A�i�H���t�Ϊ���($scope, $window etc.)�Φ۩w����(module.factory�]�w������)�C

�榡�G["Object", function( Variable ) {}]
���]�w��Variable��ګ��V���|�O�e�z��Object�C

�Ҧp�G["$scope", function( a_scope ) {}]
�ha_scope��ڵ���$scope����C

�����W�A�o�˪��t�Φp�����DI�]�p�A�b��z�L�����A�i�NObject�U�ۤ��}�����]�w�A�b����ɨ̻ݨD��������������B��C
�B��������O�H�r��]�w�A��ܦr��ӭ�i���~����T�A��Y�z�L���}�Ψ�L�ӭ�A�ϳ歶�B���Object�|�]�~����T�ܰʡA�����󶡤����̦s�C

---------------------

Dependency Injection �]�p�[����Ū�G
http://huan-lin.blogspot.com/2011/10/dependency-injection-1.html

����~��(��H����)�P�갵(��������)�A���g�Q�ݹL�o�ˤ@�Ӱ��D�C

���ݪ̡G�y�Y�M�ת������Ӧh�A�A�|���B�z�H�z
�b�U�G�y���`���p�U�A���������ӹL�h�A�Y��u�L�h�A�h���^��[�c�h�šA��X�֧R���h�l�����C�z

�N�ӤH�{���y�����z�O�y��H�z�W�d�ƪ����G�A�o�y�����c���ۡy�h���~�ӡz�F���o���c�|�ɭP�ǳ]�p���D�A�Ѧp���ƥB�ۦ����~�Ӧ欰�A�]���{��y���ä��䴩�A�]�]���אּ�y��@�~�ӡA�h���갵�z���[�c�C

�N�ӤH��ȸg��A�y�����z�㦳�H�U�S�ʡG
1. �t���������A�Ϻt��P����O���̦ۨӫD���X�C
2. ���~�Ӿ�A���\�ɤJ���P����s���@�t��C

�ѩ�S��1�N�⤣�ϥΤ����A�b�L������C++�]��H��H����O������s���W�ߩʧY�i�C
���O�S��2�N�ݩ󤶭��W���S��A���u�I�b��L�ݧ�ʶ}�o�̫إߪ�����s�P�~�Ӿ�A���Ϩ䪫��ɤJ�[�c���t��t�Τ��F�M�ӡA�Y�ݭn�Ҽ{���~�Ӿ𪺺t��γ~�A�N�����̾ڻݨD���нT�{��{���������A���ʡA�Ѧp�ѼơB�^�ǡB�ϥήɾ����A�Y�n���T�]�p�A�@�w�{�רëD�q�ݨD���ۤ�A�ӬO�q�h�˻ݨD���ۦ��ʵۤ�A���������Ҧ����]�p��ҡC

��Y�������]�p���n�ʡB�A��ʡA�O���۬[�c���h�ݨD��H�ơA�ӫD�榸�D�ت��ݨD�ק�A�]���Y�C���ݨD�ӴN��ʤ����A��ڤW�õL�k�Ϥ����A��������Ҧ����p�A��e���o�ͤ��D���񪺪��p�ӭק虜���~�Ӿ�C

�y�H�U�O�X�ӥi��ݭn�ϥΩΤF�� DI �޳N�����X�G
- �p�G�A���b�]�p�@�M�ج[�]framework�^�Υi���ƨϥΪ����O�w�ADI �|�O�ܦn�Ϊ��޳N�C
- �p�G�A���b�}�o���ε{���A�ݭn�b����ɨ�ʺA���J�B�ʺA�����Y�Ǥ���ADI �]�ଣ�W�γ��C
- �Ʊ�ۤw���{���X�b�N�ӻݨD�ܰʮɡA�����e���������䤤�@������í�w������]�Ҧp�ĤT�褸��A���ɥi��f�t Adapter �Ҧ��ϥΡ^�C
- �A���b������@�@�����ε{���A�Q�n�b���c�]refactor�^�{���X���ɭԭ��C��Y�Ǥ��󪺨̿�A��K���եH�����{���X��n���@�C�z

�p�P�夤���D�A�����ëD�Ω��@�S�w�D�ع�ȳ]�p�A�ӬO�������t�ΦҶq���]�p�F���ëD�L�ݳ]�p�A�ӬO�]�p�ɨS�Ҽ{�R���A�h�|�X�{�S���n���]�p���I�C

Reference�G
http://huan-lin.blogspot.com/2011/10/dependency-injection-2.html

---------------------

²���ӤH�����y�~�ӡz(��H����)�P�y�갵�z(��������)�G

�y�~�ӡz�̴N�p�P�Q�ڥ@ŧ���Ш|��סA�оɭӤH���~�ʡB�欰�B��൥�C
�y�갵�z�̴N�p�P���q��¾�ȴ��X���ާ@�ݨD�A���w�@�H��u�@�W���A�סB�覡���C

�b�ǲ�(C++�������y��)�W�y�~�ӡz�P�y�갵�z�O�ۦP�A�Q�ڥ����W�w���Ш|��ץ絥�P��Q�ڳo¾�~���ݨD�A�]���Q�ڤl�̨��쪺�Q�ڱШ|�ӻ��A�u�n�W�d���n���Ш|��V�A�o�Y�O�y�~�ө�H�ơz�F��p�P�ƾǳo���Ǭ�֦��L�Ƭ۲���s�A�������Ш|�u�ݾǲ߹B��B�N�Ƶ��򥻼ƾǬۦP�C

�M�ӡA��󤽥q���u�@�ӻ��A��@¾�Ȫ��ݨD�P�ӤH���Ш|���e�ä��|�����ۦP�A��i���������Ǥ����X�A�]���b�i�J¾���ɥ��|�s�b�i�X���A�o�Y�O�y�����갵�z�A�ӭӤH���A���u�@�A�Y�O����갵���������׹L�j�A�Ϥ��h�O�~�ӥH�s�������A�e�z���Q��¾�ȻP�Ш|�C

�]�]���y�갵�z�O�����q��¾�Ȫ��ݨD�A�]���u�n��q�L�i�X�A����y�~�ӡz�̬ү�����¾�ȡA�o�Y�O�y�����i���~�Ӿ�z�C

�u�ڴ��b�o�˪��Q�r���f�G�V�O�ǲߦU�ؼҦ��A�Ʊ榨���@�ӧ�n���n��]�p�v�F���{�b�A���F�u���������u�q���n��]�p�v�A�ڥ������C��Ҧ����̿�C�v
�X�X Joshua Kerievsky. �mRefactoring to Patterns�n �@��
	