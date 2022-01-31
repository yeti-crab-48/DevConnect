const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'), 
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?/, 
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader', 
            options: {
              presets: [
                '@babel/preset-env', 
                '@babel/preset-react'
              ]
            }, 
          }, 
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', 
          'css-loader',
          'sass-loader' 
        ]
      }
    ]
  }, 
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, './client/index.html')})],
  devServer: {
    historyApiFallback: true,
    static: {
        publicPath: '/build',
        directory: path.resolve(__dirname, 'build'),
      },
    port: 8080, 
    proxy: {
      '/api': 'http://localhost:3000'
    }    
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}
