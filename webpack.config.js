var webpack   = require('webpack');
var AotPlugin = require('@ngtools/webpack').AotPlugin;
var event     = process.env.npm_lifecycle_event;
var watch     = event.includes('watch');
var prod      = event.includes('prod');
var config    = {};

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
    '@angular/router'
  ],
  'example': 'example/bootstrap.ts'
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
  modules: ["src", "node_modules"],
  extensions: ['.ts', '.js', '.css', '.html'],
};

config.module = 
{
  rules: 
  [
    {test: /\.css$/,  loader: 'raw-loader'},
    {test: /\.html$/, loader: 'raw-loader'}
  ]
};

if (prod)
{
  config.module.rules.push(
    {test: /\.ts$/, loader: '@ngtools/webpack'}
  );
}
else
{
  config.module.rules.push(
    {test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader']}
  );
}

config.plugins = [];

if (prod)
{
  config.plugins.push(
    new AotPlugin(
    {
      tsConfigPath: './tsconfig.json',
      entryModule: __dirname+'/src/example/example.module#ExampleModule'
    }),
    new webpack.optimize.UglifyJsPlugin(
    {
      beautify: false,
      comments: false
    })
  );
}

config.plugins.push(
  new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, __dirname+'/src'),
  new webpack.optimize.CommonsChunkPlugin({ name: ['vendor', 'polyfills'] }),
  new webpack.NoEmitOnErrorsPlugin()
);

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