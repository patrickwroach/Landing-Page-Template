const path = require('path');


module.exports = {
  entry: {
    app: './src/index.js',

  },

  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use:[          
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },]
     },
    
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
      test: /\.js$/,
      use:[
        {
        loader:'babel-loader',
        query: {
          presets: ['es2015']
        }
        }
      ]
      }
    ]
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

};

