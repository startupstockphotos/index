const path = require('path')

const cwd = process.cwd()
const { NODE_ENV = 'development' } = process.env

module.exports = {
  mode: NODE_ENV,
  entry: {
    client: './client/index.js'
  },
  output: {
    path: path.join(cwd, './build')
  },
  performance: { hints: false },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '@': cwd
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}
