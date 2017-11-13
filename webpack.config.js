const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { 
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" 
      },
      // {
      //   test: /\.html$/,
      //   loader: "ngtemplate!html?module=myTemplates&relativeTo=" + 
      //       (path.resolve(__dirname, './src/'))
      // }
      {
        test: /\.tpl.html$/,
        use: [
          { loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './src')) },
          { loader: 'html-loader' }
        ]
      }
      // {
      //   test: /\.tpl.html$/,
      //   loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src')) + '/!html'
      // }
    ]
  }
};