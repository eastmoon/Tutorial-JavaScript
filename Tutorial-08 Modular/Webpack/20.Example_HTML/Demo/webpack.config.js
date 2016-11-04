var path = require('path');
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

      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: "index.html",
          title: "Webpack HTML Plugin demo",
          template: './src/views/templates/index_template.ejs'
        })
    ]
};
