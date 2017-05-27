const webpack     = require("webpack");
const EVENT       = process.env.npm_lifecycle_event;
const PROD        = EVENT.includes('prod');
const PUBLIC_PATH = 'angular-skeleton';

const CONSTANTS   = 
{
  ENV: PROD? JSON.stringify('production'): JSON.stringify('development')
};

const config = {};

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
  'example': 'example/bootstrap.js',
  'child':   'example/child/bootstrap.js',
};

config.output = 
{
  path: __dirname+'/dist',
  publicPath: PUBLIC_PATH+'/dist/',
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
  new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, __dirname),
  new webpack.DefinePlugin(CONSTANTS),
  new webpack.optimize.CommonsChunkPlugin({ name: ['vendor', 'polyfills'] })
];

config.stats = 
{
  maxModules: 0
};


if (PROD) 
{
  config.plugins.push(
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(
    {
      beautify: false,
      comments: false
    })
  );
}

console.log("Bundling("+(PROD? 'Production': 'Development')+")...\n");

module.exports = config;