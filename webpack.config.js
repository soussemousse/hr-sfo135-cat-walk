const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    filename: 'bundle.[contentHash].js',
    path: path.join(__dirname, '/client/dist'),
  },
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-transform-react-jsx"
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: 'html-loader'
      },
    ]
  },
  plugins: [
    // new CompressionPlugin({
    //   filename: '/bundle.[contentHash].js.gz',
    //   deleteOriginalAssets: true
    // }),
    new HtmlWebpackPlugin({
      template: './client/dist/template.html'
    }),
  ],
};


