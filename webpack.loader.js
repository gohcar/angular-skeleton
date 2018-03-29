function WebpackLoader(config)
{
  jQuery.extend(WebpackLoader.config, config);
  
  if (WebpackLoader.config.watchMode)
  {
    jQuery.ajax({url: WebpackLoader.config.watchPath+'watch', timeout: 150})
          .fail(function() { WebpackLoader.config.watchMode = false; })
          .always(WebpackLoader.load);
  } 
  else WebpackLoader.load();
}


WebpackLoader.publicPath = "";
WebpackLoader.config     =
{
  watchMode: true,
  watchPath: 'http://'+window.location.hostname+':4200/',
  distPath:  'dist/',
  files:[]
}


WebpackLoader.load = function()
{
  WebpackLoader.publicPath = WebpackLoader.config.watchMode? 
                             WebpackLoader.config.watchPath: WebpackLoader.config.distPath;
  if (WebpackLoader.config.watchMode) console.log("WebpackLoader watch mode enabled.");
  WebpackLoader.loadJs(WebpackLoader.config.files);
}


WebpackLoader.loadJs = function(src, i)
{
  i = i || 0; if (i >= src.length) return;
  var script = document.createElement('script');
  script.src = WebpackLoader.publicPath+src[i];
  script.onload = function () { WebpackLoader.loadJs(src, i+1); }
  document.body.appendChild(script);
}