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

Demo：ThreeJS-1_Basics
Demo：ThreeJS-1_Basics_Info_Structure

1. Creating the scene

在三維空間中，場景(世界座標)、相機(視點)、繪製(輸出)三個是主要的物件。
場景，決定三維空間與基底座標，透過控制此區也能找尋到相對的物體。
相機，輸出視角控制，在三維空間中控制場景、相機是建立動態系統的應用核心。
繪製，以何種方式輸出，亦即以何種方式輸出Image並放到何處？簡單的畫面輸出，到動態材質用法皆受其影響。

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

依據瀏覽器更新速率並繪製內容。
Reference : Window.requestAnimationFrame(), https://developer.mozilla.org/zh-TW/docs/Web/API/Window.requestAnimationFrame

	function draw() {
		window.requestAnimationFrame( draw );
		renderer.render( scene, camera );
	}
	draw();

3. Create object

建立物件，在三維空間中，物件是由形狀、材質構成。
形狀，物件的幾何外觀，亦即透過產生函數構築的Polygon集合。
材質，物件的塗色基底，可以指定為單色、圖片、金屬等。
物件，將形狀與材質整合的實體；特殊的物件函數能產生的物件其用途會不同，如點、線、物件、骨架、動畫物件等。

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

物件被置入場景後是以靜止的，對於物件若要執行動畫，則必須在繪製前更新位置，然後運作畫面更新。

	function draw() {
		// Transform object statement.
		// Render statement.
	}

◎ Morph target animation
Ref : https://en.wikipedia.org/wiki/Morph_target_animation
Ref : http://http.developer.nvidia.com/GPUGems/gpugems_ch04.html
Ref : http://www.owlnet.rice.edu/~elec539/Projects97/morphjrks/warp.html
Ref : http://web.mit.edu/manoli/ecimorph/www/ecimorph.html
Ref : https://www.csie.ntu.edu.tw/~b97105/DIP_Final_Project/
Ref : Three Methods for Making of Character Facial Animation based on Game Engine
http://www.adada.info/journals/vol.18_no4.1.pdf

Morph target animation is a technique that allows to deform a mesh using different deformed versions of the original mesh. This technique is used in character animation for example. The deformed versions are the morph targets (also called blend shapes). The deformation from one morph target to another one is done by interpolating the vertex positions.

變形目標動畫 ( Morph target animation )是一種以原始網格為底，變化為目標網格的技術；這項技術應用於角色動畫中。
變化結果為變形目標，也稱之為混和形狀；變化從一個變形目標到其他的過程，是經由向量點內插演算出來。

變形演算法用途廣泛，不論平面影像還是三維網格；其目的皆是透過補間技術，讓單一影像至另一影像間的過程保持自然，從基礎的影像處理，影片壓縮，動畫運用皆可。

基本觀念是透過影像上的特徵點移動，而移動會導致影像出現缺漏或覆蓋的區域，這時透過影像處理，如像素插入演算法、平均模糊演算法等將其顏色填補。

而運用三維物體動畫上，則是以Polygon的邊角為特徵，當移動其特徵時，填補或刪減Polygon來達到形狀自然，而顏色的改變則交由著色器處理。

◎ WebGLRenderTarget
http://my.oschina.net/u/186074/blog/79062?p=%7B%7Bpage%7D%7D
http://stackoverflow.com/questions/16066448/three-js-texture-image-update-at-runtime
Demo：ThreeJS-2_API_WebGLRenderTarget

運用不同場景與相機，取得動態運算的影像來轉為其他場景物體的物體材質。
通常運用於角色、場景的資訊呈現裝置，類同虛擬世界中的虛擬世界，例如：監視螢幕、控制面板等。

1. 建立兩個不同的場景、相機
	- subScene, subCamera；提供動態材質的虛擬場景
	- scene, camera；實際顯示於畫面的場景

2. 建立RenderTarget
	WebGLRenderTarget, http://threejs.org/docs/index.html#Reference/Renderers/WebGLRenderTarget
	此繪製目標是用來產出動態影像，並提供給其他物體作為材質內容使用。

3. 建立動態材質物體
	var obj = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial());
        obj.material.map = renderTarget;
        obj.material.map.needsUpdate = true;
	
	建立一面板，設為基礎材質；並於對材質的map(紋理屬性)指定為renderTarget(WebGLRenderTarget物件)。
	needsUpdate為確保材質更新屬性，此相關設定細節參考後文『How to update things』。

◎ ThreeJS 物件化
Demo：ThreeJS-1_Object
Demo：ThreeJS-1_Object_WebGLRenderTarget

ThreeJS提供了對WebGL的物件化，但在內容應用上，這樣的設計仍然缺乏足夠的物件管理系統。
實際缺乏的結構如多場景繪製順序、物件建立工廠；實際缺的單純是用於動態建立、管理的介面機制。

Composite pattern：
- BehaviourObject
提供給物件實體的行為介面，其內指定的行為函數會被行為管理物件直接執行，此物件不具有管理能力，僅適合用於樹狀底端單元。

- ManagementBehaviourObject
行為管理物件，繼承BehaviourObject，提供物件實體觸發運行下屬所管理的物件實體，此物件具有管理能力與自身執行，適合用於樹狀的節點單元。

實務設計上，參考ThreeJS-1_Object

Scene呼叫ManagementBehaviourObject.call(this)，this為包括THREE.Scene、THREE.Camera等的管理物件。
Object呼叫BehaviourObject.call(obj)，obj為THREE.Mesh產出的實體物件。

進階運用上，考量Renderer可以對不同場景的繪製結果作為物件材質，設計增加

LayoutQueue，分別產生紋理的Texture與顯示於畫面的Stage，這兩個皆為SceneLayout的場景管理物件。

1. 指定紋理(Texture)場景。
LayoutQueue.Texture.AddScene("Earth", new Scene1(renderer) );

2. 取回紋理場景
var surface = LayoutQueue.Texture.RetrieveScene("Earth");

3. 指定其材質為對應紋理
obj.material.map = surface.texture;
obj.material.map.needsUpdate = true;

4. 繪製流程，先更新紋理場景，在更新顯示場景
LayoutQueue.Texture.Update();
LayoutQueue.Stage.Update();

另外新增兩基礎場景物件，提供繪製處裡與基礎場景物件設置。
TextureScene，用於LayoutQueue.Texture內。
StageScene，用於LayoutQueue.Stage內。

◎ ThreeJS 粒子系統測試範例

Demo：ThreeJS-3_Particle_Pointlight
設定三個星球，讓點光源繞行其中。
本範例中，參考的文獻內對Light內放入Sprite來增加識別度，但Three命令SpriteCanvasMaterial於新版內無法使用，改用SpriteMaterial。

以下文件教導如何使用Canvas來繪製平面圖當作物件的材質：
WebGL text using a Canvas Texture
http://delphic.me.uk/webgltext.html

Canvas and SpriteMaterial
http://stackoverflow.com/questions/14103986/canvas-and-spritematerial

---------------------

Three 範例
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

WebGL 自學網
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