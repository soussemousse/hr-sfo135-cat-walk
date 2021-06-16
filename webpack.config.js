const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    filename: 'bundle.js',
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
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
      filename: path.join(__dirname, '/client/dist/bundle.js'),
      deleteOriginalAssets: true
    })
  ]

  // plugins: [
  //   new CompressionPlugin({
  //     filename: '[path].gz[query]',
  //     algorithm: 'gzip',
  //     test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
  //     threshold: 10240,
  //     minRatio: 0.8,
  //     deleteOriginalAssets: true
  //   })
  // ]
};


// var path = require('path');
// var SRC_DIR = path.join(__dirname, '/client/src');
// var DIST_DIR = path.join(__dirname, '/client/dist');

// module.exports = {
//   entry: `${SRC_DIR}/index.js`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)?/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: [
//               "@babel/preset-env",
//               "@babel/preset-react"
//             ]
//           }
//         }
//       }
//     ]
//   }
// };
