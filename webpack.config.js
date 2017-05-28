var webpack = require('webpack');
var event   = process.env.npm_lifecycle_event;
var watch   = event.includes('watch');
var prod    = event.includes('prod');
var dev     = !prod;
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
  'example': dev? 'example/bootstrap.ts': 'example/bootstrap.aot.ts'
};

config.output = 
{
  path: __dirname+'/dist',
  publicPath: watch? 'http://192.168.40.130:4200/': 'angular-skeleton/dist/',
  filename: '[name].js',
  chunkFilename: '[id].chunk.js'
};

config.resolve = 
{
  modules: [dev? "src": "codegen", "node_modules"],
  extensions: ['.ts', '.js', '.css', '.html'],
};

config.module = 
{
  rules: 
  [
    {
      test: /\.ts$/,
      use:
      [
        {loader: 'awesome-typescript-loader'},
        {loader: 'angular2-template-loader'},
        {
          loader: 'angular-router-loader',
          options: 
          {
            aot: prod
          }
        },
      ]
    },
    {test: /\.css$/,  loader: 'raw-loader'},
    {test: /\.html$/, loader: 'raw-loader'}
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

if (dev) config.devtool = 'eval-source-map';

config.devServer = 
{
  // host: "0.0.0.0",
  host: "192.168.40.130",
  port: '4200',
  historyApiFallback: true,
  quiet: true,
  stats: 'minimal'
};

config.stats = 
{
  maxModules: 0
};

console.log("Bundling...\n");
module.exports = config;