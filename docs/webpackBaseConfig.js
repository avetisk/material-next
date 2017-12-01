// @flow

const webpack = require('webpack');
const path = require('path');
const pkg = require('../package.json');

module.exports = {
  context: path.resolve(__dirname),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        MATERIAL_UI_VERSION: JSON.stringify(pkg.version),
      },
    }),
  ],
  resolve: {
    alias: {
      'material-next': path.resolve(__dirname, '../src'),
      '@material-next/icons': path.resolve(__dirname, '../packages/@material-next/icons/src'),
      docs: path.resolve(__dirname, '../docs'),
    },
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
};
