var path = require('path');

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
    // ejs-compiled-loader options setting
    'ejs-compiled-loader': {
      // enable or disable html minifier
      'htmlmin': true,
      'htmlminOptions': {
        removeComments: true
      }
    },
    plugins: [
    ]
};
