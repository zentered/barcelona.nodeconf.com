var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');
var collections = require('metalsmith-collections');
var assets = require('metalsmith-assets');
var permalinks = require('metalsmith-permalinks');
var browserSync = require('metalsmith-browser-sync');
var sass = require('metalsmith-sass');
var setuphandlebars = require('./setuphandlebars');

setuphandlebars.init();

Metalsmith(__dirname)
  .source('src/')
  .destination('./build')
  .use(collections({
    pages: {
      pattern: 'speakers/*.md'
    }
  }))
  .use(permalinks({
    pattern: ':collection/:title'
  }))
  .use(markdown())
  .use(templates('handlebars'))
  .use(sass({
    outputStyle: 'expanded',
    outputDir: 'css/'
  }))
  .use(assets({
    source: './assets', // relative to the working directory
    destination: './assets' // relative to the build directory
  }))
  .use(browserSync({
    server: './build',
    files: ['src/**/*.*']
  }))
  .build(function(error) {
    if (error) {
      console.log(error);
    }
  });
