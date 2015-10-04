var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var collections = require('metalsmith-collections');
var assets = require('metalsmith-assets');
var msj = require('metalsmith-json');
var permalinks = require('metalsmith-permalinks');
var sass = require('metalsmith-sass');

Metalsmith(__dirname)
  .source('src/')
  .destination('./build')
  .use(msj('./data/speakers.json'))
  .use(msj('./data/sponsors.json'))
  .use(permalinks({
    pattern: ':collection/:title'
  }))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials'
  }))
  .use(sass({
    outputStyle: 'expanded',
    outputDir: 'assets/css/'
  }))
  .use(assets({
    source: './assets', // relative to the working directory
    destination: './assets' // relative to the build directory
  }))
  .build(function(error) {
    if (error) {
      console.log(error);
    }
  });
