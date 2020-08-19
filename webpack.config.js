// const path = require('path')
module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'app.js',
    path: __dirname + './dist',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
  devServer: {
    port: 3000,
  },
};
