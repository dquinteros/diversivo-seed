const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.json/, loader: 'json' },
      { test: /\.(woff|woff2|png|jpg|jpeg|gif|svg)/, loader: 'url-loader', options: { limit: 100000 } },
      { test: /\.(ttf|eot)/, loader: 'file-loader' },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
