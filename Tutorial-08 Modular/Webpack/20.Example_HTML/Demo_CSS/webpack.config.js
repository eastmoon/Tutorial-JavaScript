var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      bundle: path.resolve(__dirname, 'src/app/main.js')
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css?minimize")
        }
      ]
    },
    plugins: [
      // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
      new ExtractTextPlugin("[name].css", {allchunk:true}),
      // Use the plugin to create html file in build folder.
      new HtmlWebpackPlugin({
        filename: "index.html",
        title: "Webpack HTML Plugin demo",
        template: './src/views/templates/index_template.ejs',
        chunks: ["bundle"]
      })
    ]
};
