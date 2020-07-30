const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index2.js',
    another: './src/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};