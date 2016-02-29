module.exports = {  
  entry: './src/ts/app.tsx',
  output: {
    path: 'www/js/',
    filename: 'app.js',
    publicPath: '/js/',
  },
  resolve: {
    extensions: ['', '.tsx', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
