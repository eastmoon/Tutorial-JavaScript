var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUILD_PATH = "build";

module.exports = {
    entry: {
      bundle: path.resolve(__dirname, 'src/app/main.js')
    },
    output: {
      path: path.resolve(__dirname, BUILD_PATH),
      filename: '[name].js',
    },
    module: {
      loaders: [

      ]
    },
    plugins: [
      new CleanWebpackPlugin(
        // Clean target paths.
        [BUILD_PATH],
        // Clean options.
        {
          // An absolute path for the root.
          "root": "",
          // Write logs to console.
          "verbose": true,
          // test/emulate delete. (will not remove files). defalut is false.
          "dry": false,
          // Ignore this files.
          "exclude": []
        }
      ),
      new CopyWebpackPlugin([
        // Copy command
        // copy {content}/{from} to {build_path}/{to}
        {
          context: 'src/views',
          from: '*.*',
          to: ''
        }
      ],{
        // Copy options
        ignore: [
          // Doesn't copy any files with a txt extension
          '*.txt',
        ],
        // By default, we only copy modified files during a watch or webpack-dev-server build.
        // Setting this to `true` copies all files.
        copyUnmodified: true
      })
    ]
};
