// webpack.config.js
module.exports = {
    //... other webpack config 
    resolve: {
        fallback: {
          "fs": false,
          "path": require.resolve("path-browserify"),
          "stream": require.resolve("stream-browserify"),
          "http": require.resolve("stream-http"), 
          "url": require.resolve("url/"),
          "util": require.resolve("util/"),
          "crypto": require.resolve("crypto-browserify"),
          "zlib": require.resolve("zlib-browserify"),
          "querystring": require.resolve("querystring-es3"),
          "dev": "webpack serve" 
      }
    },
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ],
    presets: [
        '@babel/preset-react'
      ]
  
  }

  