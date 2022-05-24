const path = require('path');

	module.exports = {
      mode: 'development',
  		entry: './src/index.js',
  		output: {
    			filename: 'main.js',
    			path: path.resolve(__dirname, 'dist'),
  		},
      module: {
        rules: [
          {
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/env']
              }
            }
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ]
      },
      devtool: 'source-map'
	};