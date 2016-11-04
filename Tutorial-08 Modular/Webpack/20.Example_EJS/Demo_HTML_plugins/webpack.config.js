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
        {test: /\.ejs$/, loader: 'ejs-compiled?htmlmin'}
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        title: "Webpack HTML plugins title",
        chunks: ["bundle"],
        template: './src/views/index.ejs'
      })
    ]
};
