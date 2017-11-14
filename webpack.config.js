const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { 
        test: /\.js$/, use: 'babel-loader', exclude: /node_modules/, 
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.tpl.html$/,
        use: [
          { loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './src')) },
          { loader: 'html-loader' },
        ]
      }
    ]
  }
};