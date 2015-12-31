�� WebGL
https://en.wikipedia.org/wiki/WebGL

WebGL (Web Graphics Library) is a JavaScript API for rendering interactive 3D computer graphics and 2D graphics within any compatible web browser without the use of plug-ins. WebGL is integrated completely into all the web standards of the browser allowing GPU accelerated usage of physics and image processing and effects as part of the web page canvas. WebGL elements can be mixed with other HTML elements and composited with other parts of the page or page background. WebGL programs consist of control code written in JavaScript and shader code that is executed on a computer's Graphics Processing Unit (GPU). WebGL is designed and maintained by the non-profit Khronos Group.

�����Ϲ���Ʈw(WebGL�BWeb Graphics Library)�O�MJavaScript���ε{������(API�BApplication Interface)�A�Ω�ø�s���ʦ��q���T���P�G���Ϲ��b����i�ݮe�������s�����B���ϥδ���(Plug-ins)�C WebGL������X������зǡA���s�������\�Ϲ��B�̾�(GPU�BGraphics Processing Unit)�[�t�B�̪��z�B�v���B�z�B�S�ġA�ç@�������e��(Canvas)�B�ΡC WebGL�����i�H�V�M��LHTML�����A�ýƦX�󭶭����@�����έI���C WebGL�{�������JavaScript���g�A�ӵۦ�X�h�ѹq�����Ϲ��B�̾�����C WebGL�O�ѫD��Q(non-profit)��´Khronos Group�b�]�p�P���@�C

Design

WebGL 1.0 is based on OpenGL ES 2.0 and provides an API for 3D graphics. It uses the HTML5 canvas element and is accessed using Document Object Model interfaces. Automatic memory management is provided as part of the JavaScript language.

WebGL 1.0���OpenGL ES 2.0�A���ѤF3D�Ϲ����{�������C
���ϥ�HTML5 Canvas�ä��\�Q�Τ�󪫥�ҫ������C
�i�Q�γ���Javascript��@�۰ʰO����޲z�C

�� JS Framework

WebGL �{���X�A�N�p�P�ϥ�JavaScript���gOpenGL�R�O�A����O�c���B�ԲӡA��L����ơC
�惡�AXavier_Ho���ѤF�X��WebGL Libraries�A�z�L����ƪ���Ʈw�Ӵ�ֹL���c����WebGL�{���X�C

- three.js (threejs.org)
- sceneJS (scenejs.org)
- Babylon.js (babylonjs.com)
- CopperLicht (ambiera.com/copperlicht)
- TWGL (twgljs.org)

���P����Ʈw�U����إߤ覡�A�b���HThreeJS���򩳼��g���սd�ҡC

�� ThreeJS
http://threejs.org/
http://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene

Demo�GThreeJS-1_Basics
Demo�GThreeJS-1_Basics_Info_Structure

1. Creating the scene

�b�T���Ŷ����A����(�@�ɮy��)�B�۾�(���I)�Bø�s(��X)�T�ӬO�D�n������C
�����A�M�w�T���Ŷ��P�򩳮y�СA�z�L����Ϥ]���M��۹諸����C
�۾��A��X��������A�b�T���Ŷ�����������B�۾��O�إ߰ʺA�t�Ϊ����ή֤ߡC
ø�s�A�H��ؤ覡��X�A��Y�H��ؤ覡��XImage�é���B�H²�檺�e����X�A��ʺA����Ϊk�Ҩ���v�T�C

	- Scene
	Lib Reference : Scenes
	http://threejs.org/docs/index.html#Reference/Core/Object3D

	- Camera
	Lib Reference : Cameras
	http://threejs.org/docs/index.html#Reference/Cameras/Camera

	- Renderer
	Lib Reference : Renderers
	http://threejs.org/docs/index.html#Reference/Renderers/WebGLRenderer

	- Get canvas from renderer, and add canvas in HTML DOM
	document.body.appendChild( renderer.domElement );

2. Rendering the scene

�̾��s������s�t�v��ø�s���e�C
Reference : Window.requestAnimationFrame(), https://developer.mozilla.org/zh-TW/docs/Web/API/Window.requestAnimationFrame

	function draw() {
		window.requestAnimationFrame( draw );
		renderer.render( scene, camera );
	}
	draw();

3. Create object

�إߪ���A�b�T���Ŷ����A����O�ѧΪ��B����c���C
�Ϊ��A���󪺴X��~�[�A��Y�z�L���ͨ�ƺc�v��Polygon���X�C
����A���󪺶��򩳡A�i�H���w�����B�Ϥ��B���ݵ��C
����A�N�Ϊ��P�����X������F�S�������Ưಣ�ͪ������γ~�|���P�A�p�I�B�u�B����B���[�B�ʵe���󵥡C

	- Create Model Shape
	Lib Reference : Extras / Geometries
	http://threejs.org/docs/index.html#Reference/Extras.Geometries/BoxGeometry
	
	var geometry = new THREE.SphereGeometry( 1, 32, 32 );

        - Create Model Skin,  material for non-shiny (Lambertian) surfaces.
	Lib Reference : Materials
	http://threejs.org/docs/index.html#Reference/Materials/MeshLambertMaterial

        var material = new THREE.MeshLambertMaterial({
        	map: THREE.ImageUtils.loadTexture('img/mars_color.jpg')
        });


        - Create Model Object.
	Lib Reference : Objects
	http://threejs.org/docs/index.html#Reference/Objects/Mesh

        var obj = new THREE.Mesh( geometry, material );

        - Add to scene.
	scene.add( obj );

4. Animating the object

����Q�m�J������O�H�R��A��󪫥�Y�n����ʵe�A�h�����bø�s�e��s��m�A�M��B�@�e����s�C

	function draw() {
		// Transform object statement.
		// Render statement.
	}

�� Morph target animation
Ref : https://en.wikipedia.org/wiki/Morph_target_animation
Ref : http://http.developer.nvidia.com/GPUGems/gpugems_ch04.html
Ref : http://www.owlnet.rice.edu/~elec539/Projects97/morphjrks/warp.html
Ref : http://web.mit.edu/manoli/ecimorph/www/ecimorph.html
Ref : https://www.csie.ntu.edu.tw/~b97105/DIP_Final_Project/
Ref : Three Methods for Making of Character Facial Animation based on Game Engine
http://www.adada.info/journals/vol.18_no4.1.pdf

Morph target animation is a technique that allows to deform a mesh using different deformed versions of the original mesh. This technique is used in character animation for example. The deformed versions are the morph targets (also called blend shapes). The deformation from one morph target to another one is done by interpolating the vertex positions.

�ܧΥؼаʵe ( Morph target animation )�O�@�إH��l���欰���A�ܤƬ��ؼк��檺�޳N�F�o���޳N���Ω󨤦�ʵe���C
�ܤƵ��G���ܧΥؼСA�]�٤����V�M�Ϊ��F�ܤƱq�@���ܧΥؼШ��L���L�{�A�O�g�ѦV�q�I�����t��X�ӡC

�ܧκt��k�γ~�s�x�A���ץ����v���٬O�T������F��ت��ҬO�z�L�ɶ��޳N�A����@�v���ܥt�@�v�������L�{�O���۵M�A�q��¦���v���B�z�A�v�����Y�A�ʵe�B�άҥi�C

���[���O�z�L�v���W���S�x�I���ʡA�Ӳ��ʷ|�ɭP�v���X�{�ʺ|���л\���ϰ�A�o�ɳz�L�v���B�z�A�p�������J�t��k�B�����ҽk�t��k���N���C���ɡC

�ӹB�ΤT������ʵe�W�A�h�O�HPolygon���䨤���S�x�A���ʨ�S�x�ɡA��ɩΧR��Polygon�ӹF��Ϊ��۵M�A���C�⪺���ܫh��ѵۦ⾹�B�z�C

�� WebGLRenderTarget
http://my.oschina.net/u/186074/blog/79062?p=%7B%7Bpage%7D%7D
http://stackoverflow.com/questions/16066448/three-js-texture-image-update-at-runtime
Demo�GThreeJS-2_API_WebGLRenderTarget

�B�Τ��P�����P�۾��A���o�ʺA�B�⪺�v�����ର��L�������骺�������C
�q�`�B�Ω󨤦�B��������T�e�{�˸m�A���P�����@�ɤ��������@�ɡA�Ҧp�G�ʵ��ù��B����O���C

1. �إߨ�Ӥ��P�������B�۾�
	- subScene, subCamera�F���ѰʺA���誺��������
	- scene, camera�F�����ܩ�e��������

2. �إ�RenderTarget
	WebGLRenderTarget, http://threejs.org/docs/index.html#Reference/Renderers/WebGLRenderTarget
	��ø�s�ؼЬO�ΨӲ��X�ʺA�v���A�ô��ѵ���L����@�����褺�e�ϥΡC

3. �إ߰ʺA���誫��
	var obj = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial());
        obj.material.map = renderTarget;
        obj.material.map.needsUpdate = true;
	
	�إߤ@���O�A�]����¦����F�é����誺map(���z�ݩ�)���w��renderTarget(WebGLRenderTarget����)�C
	needsUpdate���T�O�����s�ݩʡA�������]�w�Ӹ`�Ѧҫ��yHow to update things�z�C

�� ThreeJS �����
Demo�GThreeJS-1_Object
Demo�GThreeJS-1_Object_WebGLRenderTarget

ThreeJS���ѤF��WebGL������ơA���b���e���ΤW�A�o�˪��]�p���M�ʥF����������޲z�t�ΡC
��گʥF�����c�p�h����ø�s���ǡB����إߤu�t�F��گʪ���¬O�Ω�ʺA�إߡB�޲z����������C

Composite pattern�G
- BehaviourObject
���ѵ�������骺�欰�����A�䤺���w���欰��Ʒ|�Q�欰�޲z���󪽱�����A�����󤣨㦳�޲z��O�A�ȾA�X�Ω�𪬩��ݳ椸�C

- ManagementBehaviourObject
�欰�޲z����A�~��BehaviourObject�A���Ѫ������Ĳ�o�B��U�ݩҺ޲z���������A������㦳�޲z��O�P�ۨ�����A�A�X�Ω�𪬪��`�I�椸�C

��ȳ]�p�W�A�Ѧ�ThreeJS-1_Object

Scene�I�sManagementBehaviourObject.call(this)�Athis���]�ATHREE.Scene�BTHREE.Camera�����޲z����C
Object�I�sBehaviourObject.call(obj)�Aobj��THREE.Mesh���X�����骫��C

�i���B�ΤW�A�ҶqRenderer�i�H�藍�P������ø�s���G�@���������A�]�p�W�[

LayoutQueue�A���O���ͯ��z��Texture�P��ܩ�e����Stage�A�o��ӬҬ�SceneLayout�������޲z����C

1. ���w���z(Texture)�����C
LayoutQueue.Texture.AddScene("Earth", new Scene1(renderer) );

2. ���^���z����
var surface = LayoutQueue.Texture.RetrieveScene("Earth");

3. ���w����謰�������z
obj.material.map = surface.texture;
obj.material.map.needsUpdate = true;

4. ø�s�y�{�A����s���z�����A�b��s��ܳ���
LayoutQueue.Texture.Update();
LayoutQueue.Stage.Update();

�t�~�s�W���¦��������A����ø�s�B�̻P��¦��������]�m�C
TextureScene�A�Ω�LayoutQueue.Texture���C
StageScene�A�Ω�LayoutQueue.Stage���C

�� ThreeJS �ɤl�t�δ��սd��

Demo�GThreeJS-3_Particle_Pointlight
�]�w�T�ӬP�y�A���I����¶��䤤�C
���d�Ҥ��A�ѦҪ����m����Light����JSprite�ӼW�[�ѧO�סA��Three�R�OSpriteCanvasMaterial��s�����L�k�ϥΡA���SpriteMaterial�C

�H�U���оɦp��ϥ�Canvas��ø�s�����Ϸ�@���󪺧���G
WebGL text using a Canvas Texture
http://delphic.me.uk/webgltext.html

Canvas and SpriteMaterial
http://stackoverflow.com/questions/14103986/canvas-and-spritematerial

---------------------

Three �d��
http://threejs.org/examples/#canvas_lights_pointlights
http://threejs.org/examples/#webgl_geometry_large_mesh
http://threejs.org/examples/#webgl_geometry_text
http://threejs.org/examples/#webgl_lensflares

---------------------

Detect webgl support and fallback to regular canvas
http://stackoverflow.com/questions/9899807/three-js-detect-webgl-support-and-fallback-to-regular-canvas

---------------------

Reference page :

Graphics programming for the web
@Xavier_Ho
http://filonik.github.io/bdva2015/slides/webgl/

WebGL �۾Ǻ�
http://html5.iii.org.tw/course/webgl/

MDN WEBGL
https://developer.mozilla.org/zh-TW/demos/tag/tech%3Awebgl

JS Framework, ThreeJS
http://threejs.org/

Getting started with Three.JS
https://aerotwist.com/tutorials/getting-started-with-three-js/

How to update things
https://github.com/mrdoob/three.js/wiki/Updates

Window.requestAnimationFrame
https://developer.mozilla.org/zh-TW/docs/Web/API/Window.requestAnimationFrame