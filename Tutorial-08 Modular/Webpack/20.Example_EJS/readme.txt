◎ HTML webpack

Webpack封裝時創建HTML檔案，並以此夾帶抽出的JS、CSS檔案。
在此記錄做法與相關問題。

◎ 模組安裝

§ HTML plugin ( Demo )
npm install webpack ejs-compiled-loader --save-dev

§ HTML、CSS plugin ( Demo_HTML_plugins )
npm install webpack html-webpack-plugin ejs-compiled-loader --save-dev

◎ 小結

EJS 是一種樣板工具。
透過樣板，開發者可以將模組封裝於程式內，需要使用時將其繪製介面上。

在使用樣板時可分為兩種情況：

§ In JavaScript ( Demo )

安裝ejs-compiled-loader套件後，讓Webpack可以轉譯EJS文件檔於JS檔案中。
當JS檔案壓縮完畢，開發者得依據EJS開發方式，經由JS下達命令去重繪頁面。

※ ejs-compiled-loader 套件本身即擁有 ejs 套件，無需額外指定。

§ HTML plugins

安裝html-webpack-plugin，透過此插件，將產出的HTML文檔以EJS格式方式產生。
若沒有使用EJS轉譯，基本的讀取資訊句型仍會正常運作，如下句：

<%= htmlWebpackPlugin.options.title %>

但使用如崁入樣板，這類句型則會出現異常，如下句：

<% include template/file %>

---------------------

Reference page :

Embedded JavaScript templates.
https://github.com/tj/ejs

ejs-compiled-loader for webpack
https://github.com/bazilio91/ejs-compiled-loader

Using EJS Template Engine
http://jasonlamswatow.com/using-ejs-template-engine/

EJS
https://easonwang01.gitbooks.io/web_advance/content/ejs.html

