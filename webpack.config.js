const path = require('path');
const FlowWebpackPlugin = require('flow-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index',
  },
  output: {
    path: './dist',
    libraryTarget: 'commonjs2',
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
  },
  target: 'electron-renderer',
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
      },
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        query: {
          modules: true,
        },
      }],
    }, {
      test: /\.png$/,
      use: {
        loader: 'url-loader',
      },
    }, {
      enforce: 'pre',
      test: /\.(js|jsx)$/,
      loader: 'eslint-loader',
      exclude: /(node_modules)/,
    }],
  },
  plugins: [
    new FlowWebpackPlugin(),
  ],
};
