module.exports = {  
  entry: './src/ts/app.ts',
  output: {
    filename: 'www/js/app.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
