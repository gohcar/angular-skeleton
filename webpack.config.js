const webpack     = require("webpack");
const EVENT       = process.env.npm_lifecycle_event;
const PROD        = EVENT.includes('prod');
const PUBLIC_PATH = 'angular-skeleton';

const CONSTANTS = 
{
  ENV: PROD? JSON.stringify('production'): JSON.stringify('development')
};

const modules = 
{
  'example': 'example/bootstrap',
  'child':   'example/child/bootstrap',
}

var chunks   = [];
const config = {};

config.entry = 
{
  'polyfills': 
  [
    'core-js/es6', 
    'core-js/es7/reflect', 
    'core-js/client/shim', 
    'zone.js/dist/zone'
  ]
};

for (key in modules)
{
  var value = modules[key];
  config.entry[key] = './codegen/'+value+'.js';
  chunks.push(key);
}

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
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', chunks: chunks})
];

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

console.log(PROD? 'PRODUCTION BUILD': 'DEVELOPMENT BUILD');

module.exports = config;