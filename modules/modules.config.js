const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './modules/main.js',
  output: {
    path: path.resolve(__dirname) + '/output',
    filename: 'bundle-modules.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015', 'stage-2']
        }
      }
    ]
  }
};
