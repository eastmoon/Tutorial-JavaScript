◎ WebGL
https://en.wikipedia.org/wiki/WebGL

WebGL (Web Graphics Library) is a JavaScript API for rendering interactive 3D computer graphics and 2D graphics within any compatible web browser without the use of plug-ins. WebGL is integrated completely into all the web standards of the browser allowing GPU accelerated usage of physics and image processing and effects as part of the web page canvas. WebGL elements can be mixed with other HTML elements and composited with other parts of the page or page background. WebGL programs consist of control code written in JavaScript and shader code that is executed on a computer's Graphics Processing Unit (GPU). WebGL is designed and maintained by the non-profit Khronos Group.

網頁圖像函數庫(WebGL、Web Graphics Library)是套JavaScript應用程式介面(API、Application Interface)，用於繪製互動式電腦三維與二維圖像在任何可兼容的網頁瀏覽器且不使用插件(Plug-ins)。 WebGL完全整合於網頁標準，使瀏覽器允許圖像處裡器(GPU、Graphics Processing Unit)加速處裡物理、影像處理、特效，並作為網頁畫布(Canvas)運用。 WebGL元素可以混和其他HTML元素，並複合於頁面的一部分或背景。 WebGL程式控制由JavaScript撰寫，而著色碼則由電腦的圖像處裡器執行。 WebGL是由非營利(non-profit)組織Khronos Group在設計與維護。

Design

WebGL 1.0 is based on OpenGL ES 2.0 and provides an API for 3D graphics. It uses the HTML5 canvas element and is accessed using Document Object Model interfaces. Automatic memory management is provided as part of the JavaScript language.

WebGL 1.0基於OpenGL ES 2.0，提供了3D圖像的程式介面。
它使用HTML5 Canvas並允許利用文件物件模型介面。
可利用部分Javascript實作自動記憶體管理。

◎ JS Framework

WebGL 程式碼，就如同使用JavaScript撰寫OpenGL命令，其指令繁瑣且詳細，亦無物件化。
對此，Xavier_Ho提供了幾個WebGL Libraries，透過物件化的函數庫來減少過於繁瑣的WebGL程式碼。

- three.js (threejs.org)
- sceneJS (scenejs.org)
- Babylon.js (babylonjs.com)
- CopperLicht (ambiera.com/copperlicht)
- TWGL (twgljs.org)

不同的函數庫各有其建立方式，在此以ThreeJS為基底撰寫測試範例。

◎ ThreeJS
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

1. 物件化
對3D物件，缺乏的是事件動態的外裝物件，與管理物件群、動態產生物件群的方式

3. 光子
Pointlight

2. 粒子運動

三個星球、光子圍繞其中運行
http://threejs.org/examples/#canvas_lights_pointlights
http://threejs.org/examples/#webgl_geometry_large_mesh
http://threejs.org/examples/#webgl_geometry_text
http://threejs.org/examples/#webgl_lensflares

---------------------

Reference page :

Graphics programming for the web
@Xavier_Ho
http://filonik.github.io/bdva2015/slides/webgl/

WebGL 自學網
http://html5.iii.org.tw/course/webgl/

MDN WEBGL
https://developer.mozilla.org/zh-TW/demos/tag/tech%3Awebgl

JS Framework, ThreeJS
http://threejs.org/