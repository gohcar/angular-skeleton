var event     = process.env.npm_lifecycle_event;
var watch     = event.includes('watch');
var prod      = event.includes('prod');
var webpack   = require('webpack');
var path      = require('path');
var AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
var config    = {};

     if (prod)  console.log("> \033[33mPRODUCTION BUILD\033[0m\n");
else if (watch) console.log("> \033[33mWATCH BUILD\033[0m\n");
else            console.log("> \033[33mDEVELOPMENT BUILD\033[0m\n");

config.mode = prod? 'production': 'development';

config.entry =
{
  'polyfills':
  [
    'core-js/es6',
    'core-js/es7/reflect',
    'core-js/client/shim',
    'zone.js/dist/zone'
  ],
  'example': 
  [
    './webpack.init.js',
    'example/bootstrap.ts'
  ]
};

config.output =
{
  path: __dirname+'/dist',
  filename: '[name].js'
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
    })
  );
}

config.plugins.push(
  new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './client')),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    ENV: prod? JSON.stringify('production'): JSON.stringify('development')
  })
);

config.optimization = 
{
  minimize: true,
  splitChunks: 
  {
    cacheGroups: 
    {
      commons: 
      {
        name: "vendor",
        chunks: "initial"
      }
    }
  }
};

config.devServer =
{
  host: "0.0.0.0",
  port: '4200',
  historyApiFallback: true,
  quiet: true,
  stats: 'minimal',
  headers: { "Access-Control-Allow-Origin": "*" },
  disableHostCheck: true
};

config.stats =
{
  maxModules: 0,
  children: false,
  version: false,
  hash: false
};

console.log("Building...");
module.exports = config;
