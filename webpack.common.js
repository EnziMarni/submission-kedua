const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
    sw: path.resolve(__dirname, 'src/scripts/sw.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/')
        }
      ]
    }),
    new WebpackPwaManifest({
      name: 'My Progressive Web App',
      short_name: 'MyPWA',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    })
  ]
}
