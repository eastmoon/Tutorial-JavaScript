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

1. Creating the scene

	- Scene
	- Camera
	- Renderer
	- Get canvas from renderer, and add canvas in HTML DOM

2. Rendering the scene

function draw() {
	window.requestAnimationFrame( draw );
	renderer.render( scene, camera );
}

draw();

3. Create object

	- Create Model Shape
	var geometry = new THREE.SphereGeometry( 1, 32, 32 );
        - Create Model Skin,  material for non-shiny (Lambertian) surfaces.
        var material = new THREE.MeshLambertMaterial({
        	map: THREE.ImageUtils.loadTexture('img/mars_color.jpg')
        });
        - Create Model Object.
        var obj = new THREE.Mesh( geometry, material );
        - Add to scene.
	scene.add( obj );

4. Animating the object

function draw() {
	// Transform object statement.
	// Render statement.
}

---------------------

1. �����
��3D����A�ʥF���O�ƥ�ʺA���~�˪���A�P�޲z����s�B�ʺA���ͪ���s���覡

3. ���l
Pointlight

2. �ɤl�B��

�T�ӬP�y�B���l��¶�䤤�B��
http://threejs.org/examples/#canvas_lights_pointlights
http://threejs.org/examples/#webgl_geometry_large_mesh
http://threejs.org/examples/#webgl_geometry_text
http://threejs.org/examples/#webgl_lensflares

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