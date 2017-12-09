const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app')
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
      },
      // {
      //   test: /\.css$/,
      //   use: 'css-loader'
      // }
    ]
  }
};