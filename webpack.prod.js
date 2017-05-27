var webpack = require("webpack");
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
  'vendor': 
  [
    '@angular/platform-browser',
    '@angular/core', 
    '@angular/common',
    '@angular/http',
    '@angular/router',
    'rxjs'
  ],
  'example': 'example/bootstrap.aot.js',
  // 'child':   'example/child/bootstrap.aot.js',
};

config.output = 
{
  path: __dirname+'/dist',
  publicPath: 'angular-skeleton/dist/',
  filename: '[name].js',
  chunkFilename: '[id].chunk.js'    
};

config.resolve = 
{
  modules: ["codegen", "node_modules"],
  extensions: ['.js']
};

config.module = 
{
  rules: 
  [
    {
      test: /\.js$/,
      loaders: 
      [
        './src/common/ng2-router-loader?loader=system&aot=true'
      ]
    },
  ]
};

config.plugins = 
[
  new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, __dirname+'/src'),
  new webpack.optimize.CommonsChunkPlugin({ name: ['vendor', 'polyfills'] }),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.optimize.UglifyJsPlugin(
  {
    beautify: false,
    comments: false
  })
];

config.stats = 
{
  maxModules: 0
};

console.log("Bundling...\n");
module.exports = config;