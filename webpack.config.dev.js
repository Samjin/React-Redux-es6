import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map', //sourcemap, there are many other options to use, check webpack doc
  noInfo: false, //webpack will list all the files that are bundling
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index' //this has to be last
  ],
  target: 'web', //could be 'node' for node project
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`. This is 
    publicPath: '/',
    filename: 'index.js'
  },
  devServer: {
    contentBase: './src' //where the code is
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), 
    new webpack.NoErrorsPlugin() //show error message in browser
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  }
};
