var webpack = require('webpack');
var config  = {};

config.entry = 
{
  'polyfills': 
  [
    'core-js/es6', 
    'core-js/es7/reflect', 
    'core-js/client/shim', 
    'zone.js/dist/zone'
  ],
  // 'vendor': 
  // [
  //   '@angular/platform-browser',
  //   '@angular/core', 
  //   '@angular/common',
  //   '@angular/http',
  //   '@angular/router',
  //   'rxjs'
  // ],
  'example': './src/example/bootstrap.ts'
  // 'child': './src/example/child/bootstrap.ts'
};

config.output = 
{
  path: __dirname+'/dist',
  publicPath: 'http://192.168.40.130:8080/',
  filename: '[name].js',
  chunkFilename: '[id].chunk.js'
};

config.resolve = 
{
  extensions: ['.ts', '.js', '.css', '.html'],
};

config.module = {
  rules: 
  [
    {
      test: /\.ts$/,
      use:
      [
        {
          loader: 'awesome-typescript-loader',
          options: 
          {
            configFileName: 'tsconfig.dev.json'
          }
        },
        {loader: 'angular2-template-loader'},
        {loader: 'angular2-router-loader'},
      ]
    },
    {test: /\.css$/,  loader: 'raw-loader'},
    {test: /\.html$/, loader: 'raw-loader'}
  ]
};

config.plugins = 
[
  new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, __dirname+'/src'),
];

config.devtool = 'eval-source-map';

config.devServer = 
{
  // host: "0.0.0.0",
  host: "192.168.40.130",
  historyApiFallback: true,
  quiet: true,
  stats: 'minimal'
};

module.exports = config;