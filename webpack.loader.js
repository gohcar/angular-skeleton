function WebpackLoader(config)
{
  WebpackLoader.setConfig(config);  
  WebpackLoader.loadJs();
}


WebpackLoader.defConfig =
{
  production: false,
  watchMode: true,
  watchPath: window.location.origin+':4200/',
  distPath:  '/dist/',
  publicPath: '',
  files:[]
}


WebpackLoader.config = {}


WebpackLoader.setConfig = function(usrConfig)
{
  var config = {};

  for (var key in WebpackLoader.defConfig)
  {
    config[key] = typeof(usrConfig[key]) != 'undefined'? usrConfig[key]: WebpackLoader.defConfig[key];
  }
  
                          config.watchMode  = config.watchMode && !config.production;              // watch mode disable for production  
  if (!config.publicPath) config.publicPath = config.watchMode? config.watchPath: config.distPath; // set public path
  if (config.watchMode)   console.log("WebpackLoader watch mode enabled.");

  WebpackLoader.config = config;
}


WebpackLoader.loadJs = function(i)
{
  if ((i = i || 0) >= WebpackLoader.config.files.length) return;

  var script        = document.createElement('script');
      script.src    = WebpackLoader.config.publicPath + WebpackLoader.config.files[i];
      script.onload = function () { WebpackLoader.loadJs(i + 1); }

  document.body.appendChild(script);
}